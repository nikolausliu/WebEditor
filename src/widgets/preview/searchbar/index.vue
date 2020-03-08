<template>
  <div class="searchbar-preview" :style="style">
    <div class="searchbar__input" :style="inputStyle">
      <i class="searchbar__icon el-icon-search"></i>
      <div class="searchbar__content">{{ value.data.placeholder }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchbar-preview',
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
      _style.backgroundColor = style.backgroundColor

      return _style
    },
    inputStyle() {
      let { style } = this.value,
        _style = {}
      _style.marginTop = `${style.marginTop}px`
      _style.marginRight = `${style.marginRight}px`
      _style.marginBottom = `${style.marginBottom}px`
      _style.marginLeft = `${style.marginLeft}px`
      _style.backgroundColor = style.inputBackgroundColor
      _style.height = `${style.inputHeight}px`
      _style.borderRadius =
        style.shape === 'square' ? '5px' : `${style.inputHeight / 2}px`

      return _style
    }
  }
}
</script>

<style lang="less" scoped>
.searchbar-preview {
  padding: 5px 15px;
  .searchbar__input {
    display: flex;
    align-items: center;
    .searchbar__icon {
      margin-left: 10px;
      font-size: 16px;
      color: #666;
    }
    .searchbar__content {
      padding: 0 10px;
      font-size: 14px;
      color: #666;
    }
  }
}
</style>