<template>
  <div class="line-preview" :style="outerStyle">
    <div class="inner" :style="style"></div>
  </div>
</template>

<script>
export default {
  name: 'line-preview',
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
      _style.borderTopWidth = `${style.borderWidth}px`
      _style.borderTopStyle = style.borderStyle
      _style.borderTopColor = style.borderColor

      return _style
    },
    outerStyle() {
      let { style } = this.value,
        _style = {}
      _style.marginLeft = `${style.marginLeft}px`
      _style.marginRight = `${style.marginRight}px`

      return _style
    }
  }
}
</script>

<style lang="less" scoped>
.line-preview {
  padding: 5px 0;
  .inner {
    height: 0;
  }
}
</style>