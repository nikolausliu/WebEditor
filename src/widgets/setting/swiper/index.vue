<template>
  <div class="swiper-setting">
    <div class="setting-title">轮播图</div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="组件数据" name="first">
        <draggable
          :list="value.data"
          :disabled="false"
          ghost-class="ghost"
          @start="dragging = true"
          @end="handleSort"
        >
          <transition-group type="transition" name="flip-list">
            <template v-for="(item, index) in value.data">
              <setting-data-item
                :key="index"
                :value="item"
                :widget-index="widgetIndex"
                :item-index="index"
              >
                <form-item label="标题:">
                  <el-input v-model="item.title" size="mini"></el-input>
                </form-item>
                <form-item label="图片:">
                  <single-upload class="single-upload" v-model="item.picUrl"></single-upload>
                </form-item>
                <func-set v-model="item.functional"></func-set>
              </setting-data-item>
            </template>
          </transition-group>
        </draggable>
        <el-button type="primary" style="width: 100%;" @click="handleAdd">添加</el-button>
      </el-tab-pane>

      <el-tab-pane label="组件样式" name="second">
        <form-item label="外边距:">
          <el-row class="multi-row">
            <el-col :span="12">
              <span class="multi-row__label">上</span>
              <el-input-number
                controls-position="right"
                size="small"
                :min="0"
                :max="100"
                v-model="value.style.marginTop"
              ></el-input-number>
            </el-col>
            <el-col :span="12">
              <span class="multi-row__label">下</span>
              <el-input-number
                controls-position="right"
                size="small"
                :min="0"
                :max="100"
                v-model="value.style.marginBottom"
              ></el-input-number>
            </el-col>
          </el-row>
          <el-row class="multi-row">
            <el-col :span="12">
              <span class="multi-row__label">左</span>
              <el-input-number
                controls-position="right"
                size="small"
                :min="0"
                :max="100"
                v-model="value.style.marginLeft"
              ></el-input-number>
            </el-col>
            <el-col :span="12">
              <span class="multi-row__label">右</span>
              <el-input-number
                controls-position="right"
                size="small"
                :min="0"
                :max="100"
                v-model="value.style.marginRight"
              ></el-input-number>
            </el-col>
          </el-row>
        </form-item>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import mixins from '../mixins'
import { mapActions } from 'vuex'
import Draggable from 'vuedraggable'
import { SingleUpload } from '@/components/index'
import { SettingDataItem, FuncSet } from '@/widgets/form/index'

export default {
  name: 'swiper-setting',
  mixins: [mixins],
  components: {
    [Draggable.name]: Draggable,
    [SingleUpload.name]: SingleUpload,
    [SettingDataItem.name]: SettingDataItem,
    [FuncSet.name]: FuncSet
  },
  data() {
    return {
      dragging: false
    }
  },
  methods: {
    ...mapActions({
      addWidgetData: 'editor/addWidgetData'
    }),
    handleSort() {
      this.dragging = false
    },
    handleAdd() {
      this.addWidgetData({
        key: this.widgetIndex,
        value: {
          title: '标题',
          picUrl: null
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../setting.less';
</style>