<template>
  <el-input-number controls-position="right" size="small" :min="min" :max="max" v-model="value"></el-input-number>
</template>

<script>
export default {
  name: 'input-number',
  data() {
    return {}
  },
  props: {
    value: {
      type: Number,
      default: 12
    },
    min: {
      type: Number,
      default: 12
    },
    max: {
      type: Number,
      default: 50
    }
  }
}
</script>

<style lang="less" scoped>
</style>