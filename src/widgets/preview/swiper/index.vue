<template>
  <div class="swiper-preview" :style="style">
    <el-carousel arrow="never" :height="height" v-show="value.data.length">
      <el-carousel-item v-for="(item, index) in value.data" :key="index">
        <img
          ref="img"
          class="pic"
          :src="item.picUrl || defaultImageUrl"
          :alt="item.title"
          @load="imgLoad"
        />
      </el-carousel-item>
    </el-carousel>
    <div class="no-data-tips" v-show="!value.data.length">请点击并添加轮播图片</div>
  </div>
</template>

<script>
import { defaultImageUrl } from '../../config/base'
export default {
  name: 'swiper-preview',
  data() {
    return {
      defaultImageUrl,
      height: '100px'
    }
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
      _style.marginTop = `${style.marginTop}px`
      _style.marginRight = `${style.marginRight}px`
      _style.marginBottom = `${style.marginBottom}px`
      _style.marginLeft = `${style.marginLeft}px`

      return _style
    }
  },
  watch: {
    'value.data': {
      deep: true,
      handler(newVal) {
        if (!newVal.length) {
          this.height = '100px'
        }
      }
    }
  },
  methods: {
    imgLoad(e) {
      const img = e.path[0]
      this.height = window.getComputedStyle(img).height
    }
  }
}
</script>

<style lang="less" scoped>
.swiper {
  min-height: 100px;
}
.pic {
  width: 100%;
}
.el-carousel__item.is-active {
  z-index: 1;
}
.no-data-tips {
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: #ebf8fd;
  color: #88c4dc;
}
</style>
<style lang="less">
.swiper-preview {
  .el-carousel__button {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #ebedf0;
  }
  .el-carousel__indicator.is-active button {
    background: #fff;
  }
}
</style>