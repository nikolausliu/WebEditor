<template>
  <div class="blank-setting">
    <div class="setting-title">辅助空白</div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="组件样式" name="first">
        <form-item label="高度:">
          <el-input-number
            controls-position="right"
            size="small"
            :min="1"
            :max="100"
            v-model="value.style.height"
          ></el-input-number>
        </form-item>
        <form-item label="背景颜色:">
          <el-color-picker v-model="value.style.backgroundColor"></el-color-picker>
        </form-item>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import mixins from '../mixins'
export default {
  name: 'blank-setting',
  mixins: [mixins]
}
</script>

<style lang="less" scoped>
@import '../setting.less';
</style>