<template>
  <div class="pictures-preview" :class="`cols-${cols}`" :style="style">
    <div class="clearfix" v-if="value.data.length">
      <div
        class="pictures-item"
        v-for="(item, index) in value.data"
        :key="index"
        :style="itemStyle"
      >
        <img :src="item.img || defaultImageUrl" :alt="item.title" />
      </div>
    </div>
    <no-data-tips v-if="!value.data.length">请点击该区域并在右侧面板添加数据</no-data-tips>
  </div>
</template>

<script>
import { NoDataTips } from '../../form/index'
import { defaultImageUrl } from '../../config/base'
export default {
  name: 'pictures-preview',
  components: {
    [NoDataTips.name]: NoDataTips
  },
  data() {
    return {
      defaultImageUrl,
      height: 0
    }
  },
  props: {
    value: {
      type: Object
    }
  },
  computed: {
    cols() {
      return this.value.style.cols || 1
    },
    style() {
      let { style } = this.value,
        _style = {}
      _style.backgroundColor = style.backgroundColor || 'transparent'
      _style.marginTop = `${style.marginTop}px`
      _style.marginRight = `${style.marginRight}px`
      _style.marginBottom = `${style.marginBottom}px`
      _style.marginLeft = `${style.marginLeft}px`

      return _style
    },
    itemStyle() {
      let { style } = this.value,
        _style = {},
        cols = style.cols || 1,
        len = this.value.data.length
      _style.marginRight = `${style.space}px`
      _style.marginBottom = `${style.space}px`
      // (屏宽 - 图片总间隔数 - 左右margin) / 列数
      _style.width = `${(375 -
        style.space * (cols - 1) -
        style.marginLeft -
        style.marginRight) /
        cols}px`

      return _style
    }
  }
}
</script>

<style lang="less" scoped>
.pictures-preview {
  .pictures-item {
    float: left;
    img {
      display: block;
      width: 100%;
    }
  }
  &.cols-1 {
    .pictures-item {
      &:last-child {
        margin-bottom: 0 !important;
      }
    }
  }
  &.cols-2 {
    .pictures-item {
      &:nth-child(2n) {
        margin-right: 0 !important;
      }
    }
  }
  &.cols-3 {
    .pictures-item {
      &:nth-child(3n) {
        margin-right: 0 !important;
      }
    }
  }
}
</style>