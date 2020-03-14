<template>
  <div class="no-data-tips">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'no-data-tips',
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.no-data-tips {
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: #ebf8fd;
  color: #88c4dc;
}
</style>