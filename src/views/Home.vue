<template>
  <div class="home">
    <page-container>
      <div class="widgets-list">
        <draggable
          :list="list"
          :disabled="false"
          ghost-class="ghost"
          @start="dragging = true"
          @end="sortWidget"
        >
          <transition-group type="transition" name="flip-list">
            <widget-handler
              ref="widgetHandler"
              v-for="(widget, index) in list"
              :key="widget.hash"
              :class="{'active': active === index}"
              :data-index="index"
              @prev="handlePrevAdd(index)"
              @next="handleNextAdd(index)"
              @delete="handleDelete(index)"
              @choose="handleWidgetClick(index)"
            >
              <!-- handler与组件之间添加一层容器，防止外边距穿透 -->
              <div style="overflow: hidden;">
                <!-- text 文本组件 -->
                <text-preview v-if="widget.id === 'text'" :value="widget"></text-preview>
                <!-- blank 辅助空白 -->
                <blank-preview v-if="widget.id === 'blank'" :value="widget"></blank-preview>
                <!-- line 辅助线 -->
                <line-preview v-if="widget.id === 'line'" :value="widget"></line-preview>
                <!-- searchbar 搜索栏 -->
                <searchbar-preview v-if="widget.id === 'searchbar'" :value="widget"></searchbar-preview>
                <!-- swiper 轮播图 -->
                <swiper-preview v-if="widget.id === 'swiper'" :value="widget"></swiper-preview>
                <!-- grid 功能入口 -->
                <grid-preview v-if="widget.id === 'grid'" :value="widget"></grid-preview>
                <!-- title 标题 -->
                <title-preview v-if="widget.id === 'title'" :value="widget"></title-preview>
                <!-- pictures 图片组 -->
                <pictures-preview v-if="widget.id === 'pictures'" :value="widget"></pictures-preview>
                <!-- toolbar 工具栏 -->
                <toolbar-preview v-if="widget.id === 'toolbar'" :value="widget"></toolbar-preview>
                <!-- products 产品列表 -->
                <products-preview v-if="widget.id === 'products'" :value="widget"></products-preview>
              </div>
            </widget-handler>
          </transition-group>
        </draggable>

        <!-- 右侧面板 -->
        <widget-dialog v-show="active > -1 || dialogIsAdd" :style="{top: dialogTop + 'px'}">
          <!-- 添加 -->
          <div class="widgets-lib" v-show="dialogIsAdd">
            <div v-for="(item, index) in componentsConfig" :key="index">
              <div class="widgets-lib__title">{{ item.name }}</div>
              <div class="widgets-lib-list">
                <div
                  v-for="(widget, widgetIndex) in item.data"
                  :key="widgetIndex"
                  class="widgets-lib__item"
                  @click="handleInsert(widget)"
                >
                  <span>{{ widget.name }}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 编辑 -->
          <div class="widgets-editor" v-show="!dialogIsAdd">
            <!-- text 文本组件 -->
            <text-setting v-if="activeWidget.id === 'text'" :value="activeWidget"></text-setting>
            <!-- blank 辅助空白 -->
            <blank-setting v-if="activeWidget.id === 'blank'" :value="activeWidget"></blank-setting>
            <!-- line 辅助线 -->
            <line-setting v-if="activeWidget.id === 'line'" :value="activeWidget"></line-setting>
            <!-- searchbar 搜索栏 -->
            <searchbar-setting v-if="activeWidget.id === 'searchbar'" :value="activeWidget"></searchbar-setting>
            <!-- swiper 搜索栏 -->
            <swiper-setting
              v-if="activeWidget.id === 'swiper'"
              :value="activeWidget"
              :widget-index="active"
            ></swiper-setting>
            <!-- grid 功能入口 -->
            <grid-setting
              v-if="activeWidget.id === 'grid'"
              :value="activeWidget"
              :widget-index="active"
            ></grid-setting>
            <!-- title 搜索栏 -->
            <title-setting v-if="activeWidget.id === 'title'" :value="activeWidget"></title-setting>
            <!-- pictures 图片组 -->
            <pictures-setting
              v-if="activeWidget.id === 'pictures'"
              :value="activeWidget"
              :widget-index="active"
            ></pictures-setting>
            <!-- toolbar 工具栏 -->
            <toolbar-setting v-if="activeWidget.id === 'toolbar'" :value="activeWidget"></toolbar-setting>
            <!-- products 产品列表 -->
            <products-setting
              v-if="activeWidget.id === 'products'"
              :value="activeWidget"
              :widget-index="active"
            ></products-setting>
          </div>
        </widget-dialog>
      </div>

      <!-- 组件库 -->
      <div class="widgets-lib widget-lib-bottom">
        <div v-for="(item, index) in componentsConfig" :key="index">
          <div class="widgets-lib__title">{{ item.name }}</div>
          <div class="widgets-lib-list">
            <div
              v-for="(widget, widgetIndex) in item.data"
              :key="widgetIndex"
              class="widgets-lib__item"
              @click="widgetsLibsClick(widget)"
            >
              <span>{{ widget.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </page-container>

    <div class="options-bar">
      <el-button
        type="primary"
        plain
        size="mini"
        :loading="saveLoading"
        @click.native="handleSave"
      >保存</el-button>
      <el-popover placement="top" trigger="click" width="100">
        <div class="popper-qrcode">
          <canvas id="qrcode"></canvas>
          <div class="qrcode-tips" style="margin-bottom: 10px;">手机扫码预览效果</div>
        </div>
        <el-button type="primary" size="mini" slot="reference">预览</el-button>
      </el-popover>
    </div>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import { mapGetters, mapActions } from 'vuex'
import md5 from 'md5'
import QRCode from 'qrcode'
import componentsConfig from '@/widgets/config/components'
import widgetsConfig from '@/widgets/config/widgets'
import { getHash } from '@/utils/index'
import { PageContainer, WidgetHandler, WidgetDialog } from '@/components/index'
import {
  TextPreview,
  BlankPreview,
  LinePreview,
  SearchbarPreview,
  SwiperPreview,
  GridPreview,
  TitlePreview,
  PicturesPreview,
  ToolbarPreview,
  ProductsPreview
} from '@/widgets/preview/index'
import {
  TextSetting,
  BlankSetting,
  SearchbarSetting,
  SwiperSetting,
  GridSetting,
  TitleSetting,
  PicturesSetting,
  LineSetting,
  ToolbarSetting,
  ProductsSetting
} from '@/widgets/setting/index'

export default {
  name: 'home',

  components: {
    [Draggable.name]: Draggable,
    [PageContainer.name]: PageContainer,
    [WidgetHandler.name]: WidgetHandler,
    [WidgetDialog.name]: WidgetDialog,
    // preview组件
    [TextPreview.name]: TextPreview,
    [BlankPreview.name]: BlankPreview,
    [LinePreview.name]: LinePreview,
    [SearchbarPreview.name]: SearchbarPreview,
    [SwiperPreview.name]: SwiperPreview,
    [GridPreview.name]: GridPreview,
    [TitlePreview.name]: TitlePreview,
    [PicturesPreview.name]: PicturesPreview,
    [ToolbarPreview.name]: ToolbarPreview,
    [ProductsPreview.name]: ProductsPreview,
    // setting组件
    [TextSetting.name]: TextSetting,
    [BlankSetting.name]: BlankSetting,
    [SearchbarSetting.name]: SearchbarSetting,
    [SwiperSetting.name]: SwiperSetting,
    [GridSetting.name]: GridSetting,
    [TitleSetting.name]: TitleSetting,
    [PicturesSetting.name]: PicturesSetting,
    [LineSetting.name]: LineSetting,
    [ToolbarSetting.name]: ToolbarSetting,
    [ProductsSetting.name]: ProductsSetting
  },

  created() {
    this.requestList().then(() => {
      this.$nextTick(() => {
        this.renderQrcode()
      })
    })
  },

  data() {
    return {
      dragging: false,
      componentsConfig,
      saveLoading: false
    }
  },

  computed: {
    ...mapGetters({
      // 已经添加的组件列表数据
      list: 'editor/list',
      // 当前选中组件索引
      active: 'editor/active',
      // 模板右侧编辑面板是否处于'添加组件'状态(两种状态：添加 | 编辑)
      dialogIsAdd: 'editor/dialogIsAdd',
      // 模板右侧编辑面板top值
      dialogTop: 'editor/dialogTop',
      // 要在哪个位置添加组件的位置索引
      addIndex: 'editor/addIndex'
    }),
    activeWidget() {
      return this.list[this.active] || {}
    }
  },

  methods: {
    ...mapActions({
      setList: 'editor/setList',
      setActive: 'editor/setActive',
      setDialogIsAdd: 'editor/setDialogIsAdd',
      setDialogTop: 'editor/setDialogTop',
      setAddIndex: 'editor/setAddIndex',
      addWidget: 'editor/addWidget',
      insertWidget: 'editor/insertWidget',
      deleteWidget: 'editor/deleteWidget'
    }),
    // 模板中互换两个组件的位置，更新数据
    sortWidget: function(e) {
      this.dragging = false
      this.setList(this.list)
      this.setTop()
    },
    // 每次 [active 改变] 或者 [点了prev或next]，都需要重新计算 dialogTop 的值
    setTop(index, pos) {
      const i = index === undefined ? this.active : index
      if (i < 0) {
        return
      }
      let fix = 20, // 位置修正
        offsetTop,
        $el
      // refs方案不可行，因为不管是append还是insert动作，在refs中都是append，无法对应
      // const offsetTop = this.$refs.widgetHandler[i].$el.offsetTop
      $el = document.querySelector(`[data-index="${i}"]`)
      offsetTop = $el.offsetTop
      // 如果动作是 添加组件，需要修正面板位置
      if (pos === 'prev') {
        offsetTop -= fix
      } else if (pos === 'next') {
        const height = parseFloat(window.getComputedStyle($el).height)
        offsetTop = offsetTop + height - fix
      }
      this.setDialogTop(offsetTop)
    },
    // 点击模板中的组件，设置模板中当前选中组件的索引
    handleWidgetClick(index) {
      this.setActive(index)
      this.setTop(index)
      // 设置模板右侧面板状态为 编辑 状态
      this.setDialogIsAdd(false)
    },
    // 在模板中某个组件 前 添加某个组件 的前置动作(打开面板)
    handlePrevAdd(index) {
      this.setAddIndex(index)
      // 设置模板右侧面板状态为 添加 状态
      this.setDialogIsAdd(true)
      this.setTop(index, 'prev')
    },
    // 在模板中某个组件 后 添加某个组件 的前置动作(打开面板)
    handleNextAdd(index) {
      this.setAddIndex(index + 1)
      // 设置模板右侧面板状态为 添加 状态
      this.setDialogIsAdd(true)
      this.setTop(index, 'next')
    },
    // 向模板的某个位置插入组件
    handleInsert(widget) {
      const _widget = this.getWidget(widget)
      this.insertWidget({
        index: this.addIndex,
        widget: _widget
      })
      this.$nextTick(() => {
        this.setTop()
      })
    },
    // 向模板中添加某个组件
    widgetsLibsClick(widget) {
      const _widget = this.getWidget(widget)
      this.addWidget(_widget)
      this.$nextTick(() => {
        this.setTop()
      })
    },
    // 从模板中删除某个组件
    handleDelete(index) {
      this.deleteWidget(index).then(() => {
        setTimeout(() => {
          this.setTop()
        }, 50)
      })
    },
    // 从配置中获取组件默认配置数据
    getWidget(item) {
      const type = item.componentsName || ''
      const widget = JSON.parse(JSON.stringify(widgetsConfig[type])) || {}
      widget.hash = getHash(md5)
      return widget
    },
    requestList() {
      // setTimeout(() => {
      //   const list = JSON.parse(sessionStorage.getItem('EDITOR_LIST')) || []
      //   // 请求到的数据更新到store
      //   this.setList(list)
      // }, 200)
      return this._request.get('/api/list').then(res => {
        const list = res.data.list
        this.setList(list)
        return list
      })
    },
    // 保存数据 action
    handleSave() {
      this.setList(this.list)
      this.submit()
    },
    submit() {
      // sessionStorage.setItem('EDITOR_LIST', JSON.stringify(this.list))
      this.saveLoading = true
      this._request
        .post('/api/list', { list: JSON.parse(JSON.stringify(this.list)) })
        .then(res => {
          this.saveLoading = false
        })
    },
    renderQrcode() {
      const url = 'https://nikolausliu.top/WebEditorH5/'
      QRCode.toCanvas(document.getElementById('qrcode'), url, function(error) {
        if (error) console.error(error)
        console.log('renderQrcode success!')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  position: relative;
  box-sizing: border-box;
  min-height: 100vh;
  padding-top: 30px;
  padding-bottom: 100px;
  .widgets-list {
    min-height: 486px;
  }
  .widgets-item {
    height: 100px;
    background-color: yellowgreen;
  }
  // 添加面板
  .widgets-lib {
    padding: 0 5px 0 10px;
    &.widget-lib-bottom {
      margin-bottom: 20px;
      border-top: 1px dashed #ccc;
    }
  }
  .widgets-lib__title {
    font-size: 12px;
    margin-top: 13px;
    margin-bottom: 8px;
    font-weight: bold;
  }
  .widgets-lib-list {
    display: flex;
    flex-wrap: wrap;
  }
  .widgets-lib__item {
    box-sizing: border-box;
    flex: 0 0 33.33%;
    height: 30px;
    margin-bottom: 5px;
    padding-right: 5px;
    font-size: 12px;
    color: #666;
    cursor: pointer;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px dashed #e5e5e5;
      background: #f8f8f8;
      width: 100%;
      height: 100%;
    }
    &:hover {
      span {
        background: #e8f7fd;
        border-color: #bdf;
        color: #38f;
      }
    }
  }

  .options-bar {
    position: fixed;
    z-index: 3;
    bottom: 0;
    width: 100%;
    padding: 20px 0;
    background: #fff;
    text-align: center;
    box-shadow: 0 -3px 5px #eee;
    button {
      margin: 0 10px;
    }
  }
}
</style>

<style lang="less">
.home {
  .page-container {
    position: relative;
    margin-left: 200px;
    margin-bottom: 100px;
  }
  .widget-dialog {
    .widgets-lib {
      & > div:first-child {
        .widgets-lib__title {
          margin-top: 0;
        }
      }
    }
  }
}

.popper-qrcode {
  text-align: center;
}
</style>
