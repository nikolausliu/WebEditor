<template>
  <div
    class="products-preview clearfix"
    :class="[`layout-${layout}`, borderTypeClass]"
    :style="style"
  >
    <div class="products-item" v-for="(item, index) in value.data" :key="index">
      <div class="products-item__pic">
        <img :src="item.img || defaultImageUrl" :alt="item.title" />
      </div>
      <div class="products-item__content">
        <div class="products-item__title text-ellipsis">{{ item.title }}</div>
        <div class="products-item__subtitle text-ellipsis">{{ item.subtitle }}</div>
        <div class="products-item__pricebar clearfix">
          <div class="products-item__price">
            <span class="products-item__price-prefix">￥</span>
            {{ item.price }}
          </div>
          <div class="products-item__buyicon">
            <img :src="item.buyicon || defaultBuyIcon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defaultImageUrl, defaultBuyIcon } from '../../config/base'
export default {
  name: 'products-preview',
  data() {
    return {
      defaultImageUrl,
      defaultBuyIcon
    }
  },
  props: {
    value: {
      type: Object
    }
  },
  computed: {
    layout() {
      return this.value.style.layout
    },
    borderTypeClass() {
      const map = {
        border: 'has-border',
        shadow: 'has-shadow-border',
        none: 'no-border'
      }
      return map[this.value.style.borderType]
    },
    style() {
      let { style } = this.value,
        _style = {}
      _style.backgroundColor = style.backgroundColor || 'transparent'
      _style.marginTop = `${style.marginTop}px`
      _style.marginRight = `${style.marginRight}px`
      _style.marginBottom = `${style.marginBottom}px`
      _style.marginLeft = `${style.marginLeft}px`
      _style.paddingLeft = `${style.paddingLeft}px`
      _style.paddingRight = `${style.paddingRight}px`
      _style.paddingTop = `${style.paddingTop}px`
      _style.paddingRight = `${style.paddingRight}px`
      _style.paddingBottom = `${style.paddingBottom}px`
      _style.paddingLeft = `${style.paddingLeft}px`

      return _style
    }
  }
}
</script>

<style lang="less" scoped>
.products-preview {
  .products-item {
    box-sizing: border-box;
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
    &__pic {
      img {
        display: block;
        width: 100%;
        border-radius: 5px 5px 0 0;
      }
    }
    &__content {
      padding: 15px;
      border-radius: 0 0 5px 5px;
      background: #fff;
    }
    &__title {
      margin-top: 10px;
      font-size: 16px;
    }
    &__subtitle {
      margin: 5px 0 10px;
      font-size: 12px;
      color: #666;
    }
    &__price {
      float: left;
      font-size: 16px;
      color: #f0453e;
    }
    &__price-prefix {
      font-size: 12px;
    }
    &__buyicon {
      float: right;
      img {
        display: block;
        width: 18px;
        height: 18px;
      }
    }
  }
  &.has-border {
    .products-item {
      border: 1px solid #dedede;
      border-radius: 5px;
    }
  }
  &.has-shadow-border {
    .products-item {
      &__content {
        box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.3);
      }
    }
  }
  &.no-border {
    border: none;
  }
  &.layout-2 {
    .products-item {
      float: left;
      width: calc((100% - 15px) / 2);
      margin-right: 15px;
      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }
}
</style>