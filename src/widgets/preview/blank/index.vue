<template>
  <div class="blank-preview" :style="style"></div>
</template>

<script>
export default {
  name: 'blank-preview',
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
      _style.height = `${style.height}px`
      _style.backgroundColor = style.backgroundColor || 'transparent'

      return _style
    }
  }
}
</script>

<style lang="less" scoped>
</style>