<template>
  <div class="form-item">
    <div class="form-item__label" :style="{width: labelWidth}">{{ label }}</div>
    <div class="form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'form-item',
  props: {
    label: {
      type: String,
      default: '标题'
    },
    labelWidth: {
      type: String,
      default: 'auto'
    }
  }
}
</script>

<style lang="less" scoped>
.form-item {
  display: flex;
  margin-bottom: 10px;
  &__label {
    margin-right: 10px;
    font-size: 12px;
    text-align: right;
  }
  &__content {
    flex-grow: 1;
  }
}
</style>