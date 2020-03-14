<template>
  <div class="toolbar-preview clearfix" :style="style">
    <div class="location">
      <i class="el-icon-location-outline"></i>
      <span>合肥</span>
      <i class="el-icon-caret-bottom"></i>
    </div>
    <div class="scan">
      <i class="iconfont iconfont-scan"></i>
      <span>扫码</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toolbar-preview',
  data() {
    return {}
  },
  props: {
    value: {
      type: Object
    }
  },
  computed: {
    style() {
      let { style } = this.value,
        _style = {}
      _style.backgroundColor = style.backgroundColor || 'transparent'
      _style.color = style.color || '#333'
      _style.marginTop = `${style.marginTop}px`
      _style.marginRight = `${style.marginRight}px`
      _style.marginBottom = `${style.marginBottom}px`
      _style.marginLeft = `${style.marginLeft}px`
      _style.paddingTop = `${style.paddingTop}px`
      _style.paddingRight = `${style.paddingRight}px`
      _style.paddingBottom = `${style.paddingBottom}px`
      _style.paddingLeft = `${style.paddingLeft}px`

      return _style
    }
  }
}
</script>

<style lang="less" scoped>
.toolbar-preview {
  .location {
    float: left;
  }
  .scan {
    float: right;
  }
}
</style>