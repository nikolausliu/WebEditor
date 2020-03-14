<template>
  <div class="grid-preview" :style="style">
    <div class="clearfix" v-if="value.data.length">
      <div class="grid-item" v-for="(item, index) in value.data" :key="index" :style="itemStyle">
        <img
          class="grid-item__icon"
          :src="item.icon || defaultImageUrl"
          :alt="item.title"
          :style="iconStyle"
        />
        <div class="grid-item__title" :style="titleStyle">{{ item.title }}</div>
      </div>
    </div>
    <no-data-tips v-if="!value.data.length">请点击该区域并在右侧面板添加数据</no-data-tips>
  </div>
</template>

<script>
import { NoDataTips } from '../../form/index'
import { defaultImageUrl } from '../../config/base'
export default {
  name: 'grid-preview',
  components: {
    [NoDataTips.name]: NoDataTips
  },
  data() {
    return {
      defaultImageUrl
    }
  },
  props: {
    value: {
      type: Object
    }
  },
  computed: {
    cols() {
      return this.value.style.cols || 3
    },
    style() {
      let { style } = this.value,
        _style = {}
      _style.marginTop = `${style.marginTop}px`
      _style.marginRight = `${style.marginRight}px`
      _style.marginBottom = `${style.marginBottom}px`
      _style.marginLeft = `${style.marginLeft}px`
      _style.backgroundColor = style.backgroundColor

      return _style
    },
    itemStyle() {
      let { style } = this.value,
        _style = {},
        cols = style.cols || 3
      // (屏宽 - 左右margin) / 列数
      _style.width = `${(375 - style.marginLeft - style.marginRight) / cols}px`

      return _style
    },
    iconStyle() {
      let { style } = this.value,
        _style = {}
      _style.width = `${style.iconWidth || 50}px`
      _style.height = `${style.iconHeight || 50}px`

      return _style
    },
    titleStyle() {
      let { style } = this.value,
        _style = {}
      _style.color = style.color

      return _style
    }
  }
}
</script>

<style lang="less" scoped>
.grid-preview {
  .grid-item {
    float: left;
    padding: 10px 0;
    text-align: center;
    &__icon {
      width: 100%;
    }
    &__title {
      text-align: center;
      font-size: 12px;
    }
  }
}
</style>