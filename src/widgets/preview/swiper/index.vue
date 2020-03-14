<template>
  <div class="swiper-preview" :style="style">
    <el-carousel arrow="never" :height="height" v-if="value.data.length">
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
    <no-data-tips v-if="!value.data.length">请点击该区域并在右侧面板添加数据</no-data-tips>
  </div>
</template>

<script>
import { defaultImageUrl } from '../../config/base'
import { NoDataTips } from '../../form/index'
export default {
  name: 'swiper-preview',
  components: {
    [NoDataTips.name]: NoDataTips
  },
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