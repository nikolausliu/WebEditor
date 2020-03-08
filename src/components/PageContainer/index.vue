<template>
  <div class="page-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'page-container'
}
</script>

<style lang="less" scoped>
.page-container {
  // width: 320px;
  width: 375px;
  border: 1px dashed #ccc;
  background: #fff;
}
</style>