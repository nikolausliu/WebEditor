<template>
  <div class="title-preview" :style="style">
    <div class="title" :style="titleStyle">
      <span>{{ value.data.title }}</span>
    </div>
    <div class="more" :style="moreStyle">
      <span>{{ value.data.moreTitle }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'title-preview',
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
      _style.marginTop = `${style.marginTop}px`
      _style.marginRight = `${style.marginRight}px`
      _style.marginBottom = `${style.marginBottom}px`
      _style.marginLeft = `${style.marginLeft}px`
      _style.paddingRight = `${style.paddingRight}px`
      _style.paddingLeft = `${style.paddingLeft}px`
      _style.height = `${style.height}px`
      if (style.layout === 'center') {
        _style.textAlign = 'center'
      }

      return _style
    },
    titleStyle() {
      let { style } = this.value,
        _style = {}
      if (style.layout === 'spaceBetween') {
        _style.float = 'left'
        _style.display = 'inline-block'
      }
      _style.color = style.color || '#333'
      _style.fontSize = `${style.fontSize}px`
      _style.lineHeight = `${style.height}px`

      return _style
    },
    moreStyle() {
      let { style } = this.value,
        _style = {}
      if (style.layout === 'spaceBetween') {
        _style.float = 'right'
        _style.display = 'inline-block'
      }
      _style.color = style.moreColor || '#333'
      _style.fontSize = `${style.moreFontSize}px`
      _style.lineHeight = `${style.height}px`

      return _style
    }
  }
}
</script>

<style lang="less" scoped>
</style>