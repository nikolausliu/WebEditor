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
            <div class="data-item" v-for="(item, index) in value.data" :key="index">
              <el-collapse>
                <el-collapse-item>
                  <template slot="title">
                    <div class="title">{{ item.title }}</div>
                  </template>
                  <!-- 内容 -->
                  <form-item label="标题:">
                    <el-input v-model="item.title" size="mini"></el-input>
                  </form-item>
                  <form-item label="图片:">
                    <single-upload
                      class="single-upload"
                      v-model="item.picUrl"
                      action="https://jsonplaceholder.typicode.com/posts/"
                    ></single-upload>
                  </form-item>
                  <func-set v-model="item.functional"></func-set>
                </el-collapse-item>
              </el-collapse>
              <i class="el-icon-error" @click="handleDelete(index)"></i>
            </div>
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
import { FuncSet } from '@/widgets/form/index'

export default {
  name: 'swiper-setting',
  mixins: [mixins],
  components: {
    [Draggable.name]: Draggable,
    [SingleUpload.name]: SingleUpload,
    [FuncSet.name]: FuncSet
  },
  data() {
    return {
      dragging: false
    }
  },
  methods: {
    ...mapActions({
      addWidgetData: 'editor/addWidgetData',
      deleteWidgetData: 'editor/deleteWidgetData'
    }),
    handleSort() {
      this.dragging = false
    },
    handleDelete(index) {
      this.deleteWidgetData({
        key: this.widgetIndex,
        value: index
      })
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
.data-item {
  position: relative;
  margin-bottom: 15px;
  .el-icon-error {
    display: none;
    right: 0;
    top: 0;
    position: absolute;
    cursor: pointer;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.7);
  }
  &:hover {
    .el-icon-error {
      display: block;
    }
  }
}
.single-upload {
  width: auto;
  display: inline-block;
}

// draggable
.flip-list-move {
  transition: transform 0.5s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>

<style lang="less">
// 折叠面板样式覆盖
.data-item {
  .el-collapse {
    border: 0 !important;
  }
  .el-collapse-item__header {
    border: 1px solid #ebeef5;
    transition: border-bottom-color 0s;
    &.is-active {
      border-bottom-color: #ebeef5 !important;
    }
    .title {
      margin-left: 10px;
      width: 300px;
    }
  }
  .el-collapse-item__wrap {
    border: 1px solid #ebeef5;
    border-top: 0;
    padding: 10px;
  }
  &:hover {
    .el-collapse-item__header {
      border: 1px dashed rgb(85, 153, 255);
    }
    .el-collapse-item__wrap {
      border: 1px dashed rgb(85, 153, 255);
      border-top: 0;
    }
  }
}
</style>