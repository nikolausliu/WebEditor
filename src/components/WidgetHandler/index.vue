<template>
  <div class="widget-handler">
    <i class="widget-handler__button widget-handler__prev el-icon-circle-plus" @click="prevClick"></i>
    <i class="widget-handler__button widget-handler__next el-icon-circle-plus" @click="nextClick"></i>
    <el-popover placement="left" width="150" v-model="deleteVisible">
      <p style="margin: 0 0 10px 0; text-align: center;">确定删除当前组件？</p>
      <div style="text-align: center; margin: 0">
        <el-button type="primary" size="mini" @click="handleDelete">确定</el-button>
        <el-button size="mini" plain @click="deleteVisible = false">取消</el-button>
      </div>
      <i class="widget-handler__button widget-handler__close el-icon-error" slot="reference"></i>
    </el-popover>
    <div @click="handleClick">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'widget-handler',
  data() {
    return {
      deleteVisible: false
    }
  },
  methods: {
    prevClick() {
      this.$emit('prev')
    },
    nextClick() {
      this.$emit('next')
    },
    handleDelete() {
      this.deleteVisible = false
      this.$emit('delete')
    },
    handleClick() {
      this.$emit('choose')
    }
  }
}
</script>

<style lang="less" scoped>
@color: rgb(85, 153, 255);
@btnSize: 16px;
@pre: widget-handler;
.widget-handler {
  position: relative;
  &__button {
    display: none;
    z-index: 2;
  }
  &.active,
  &:hover {
    &::after {
      position: absolute;
      z-index: 1;
      box-sizing: border-box;
      content: ' ';
      pointer-events: none;
      top: -50%;
      right: -50%;
      bottom: -50%;
      left: -50%;
      transform: scale(0.5);
      border: 2px dashed @color;
    }
    // outline: 1px dashed @color;
    .@{pre}__button {
      position: absolute;
      display: block;
      font-size: @btnSize;
      cursor: pointer;
    }
    .@{pre}__prev,
    .@{pre}__next {
      left: 50%;
      transform: translateX(-50%);
      color: @color;
    }
    .@{pre}__prev {
      top: -@btnSize / 2;
    }
    .@{pre}__next {
      bottom: -@btnSize / 2;
    }
    .@{pre}__close {
      color: rgba(0, 0, 0, 0.7);
      right: -@btnSize / 2;
      top: -@btnSize / 2;
    }
  }
}
</style>

<style lang="less">
@btnSize: 16px;
.widget-handler.active .widget-handler__close {
  display: block;
  color: rgba(0, 0, 0, 0.7);
  right: -@btnSize / 2;
  top: -@btnSize / 2;
}

[class*='van-hairline']::after {
  position: absolute;
  box-sizing: border-box;
  content: ' ';
  pointer-events: none;
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
  border: 0 solid #ebedf0;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
}
.van-hairline--surround::after {
  border-width: 1px;
}
</style>
