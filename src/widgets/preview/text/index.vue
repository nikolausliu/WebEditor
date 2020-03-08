<template>
  <div class="text-preview" :style="style">{{ value.data.title }}</div>
</template>

<script>
export default {
  name: 'text-preview',
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
      _style.color = style.color
      _style.backgroundColor = style.backgroundColor || 'transparent'
      _style.fontSize = `${style.fontSize}px`
      _style.textAlign = style.align
      _style.lineHeight = `${style.lineHeight}px`
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
.text-preview {
  box-sizing: border-box;
  min-height: 20px;
}
</style>