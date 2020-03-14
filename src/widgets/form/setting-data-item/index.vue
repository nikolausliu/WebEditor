<template>
  <div class="setting-data-item">
    <el-collapse>
      <el-collapse-item>
        <template slot="title">
          <div class="title">{{ value.title || '' }}</div>
        </template>
        <!-- 内容 -->
        <slot></slot>
      </el-collapse-item>
    </el-collapse>
    <i class="el-icon-error" @click="handleDelete"></i>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'setting-data-item',
  data() {
    return {}
  },
  props: {
    // 组件的 data item
    value: {
      type: Object
    },
    // 组件的索引(模板中的第几个组件)
    widgetIndex: {
      type: Number
    },
    // 组件的 data item 的索引(组件中的第几个数据)
    itemIndex: {
      type: Number
    }
  },
  methods: {
    ...mapActions({
      deleteWidgetData: 'editor/deleteWidgetData'
    }),
    handleDelete(index) {
      this.deleteWidgetData({
        key: this.widgetIndex,
        value: this.itemIndex
      })
    }
  }
}
</script>

<style lang="less" scoped>
.setting-data-item {
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
</style>

<style lang="less">
// 折叠面板样式覆盖
.setting-data-item {
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