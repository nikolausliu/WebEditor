<template>
  <div class="widget-dialog">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'widget-dialog',
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.widget-dialog {
  position: absolute;
  left: 100%;
  padding: 15px;
  margin-left: 20px;
  width: 380px;
  background: #fff;
  transition: top 0.5s;
  &::before {
    position: absolute;
    content: ' ';
    right: 100%;
    top: 20px;
    border: solid transparent;
    height: 0;
    width: 0;
    border-color: transparent;
    border-right-color: #fff;
    border-width: 7px;
    margin-top: -7px;
  }
}
</style>