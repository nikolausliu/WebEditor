<template>
  <div>
    <div class="single-upload">
      <el-upload
        class="uploader"
        :mutiple="false"
        :show-file-list="false"
        :with-credentials="false"
        :action="action"
        :name="name"
        :headers="headers"
        :on-success="handleSuccess"
        :on-error="handleError"
      >
        <img v-if="imageUrl" :src="imageUrl" class="image" />
        <i v-else class="el-icon-plus uploader-icon"></i>
      </el-upload>
      <i class="el-icon-error" v-if="imageUrl" @click="handleRemove"></i>
    </div>
  </div>
</template>

<script>
import request from '@/request/index'
export default {
  name: 'single-upload',
  data() {
    return {
      imageUrl: ''
    }
  },
  props: {
    value: {
      type: [String, null],
      default: ''
    },
    action: {
      type: String,
      default: request.uploadUrl
    },
    name: {
      type: String,
      default: 'file'
    },
    headers: {
      type: Object,
      default: () => ({})
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(newVal) {
        this.imageUrl = newVal
      }
    }
  },
  methods: {
    handleSuccess(res, file) {
      console.log(res, file)
      /*
       * URL.createObjectURL() 静态方法会创建一个 DOMString，其中包含一个表示参数中给出的对象的URL。这个 URL 的生命周期和创建它的窗口中的 document 绑定。这个新的URL 对象表示指定的 File 对象或 Blob 对象
       */
      // this.imageUrl = URL.createObjectURL(file.raw)

      /**
       * base64后的图片url太大了
       */
      // const _this = this
      // const reader = new FileReader()
      // reader.readAsDataURL(file.raw)
      // reader.onload = function(e) {
      //   _this.imageUrl = e.target.result
      //   _this.$emit('input', _this.imageUrl)
      // }

      this.imageUrl = res.data.assets_domain + res.data.path
      this.$emit('input', this.imageUrl)
    },
    handleError() {},
    handleRemove() {
      this.imageUrl = ''
      this.$emit('input', '')
    }
  }
}
</script>

<style lang="less" scoped>
.single-upload {
  position: relative;
  display: inline-block;
  .uploader {
    position: relative;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0;
    &:hover {
      border-color: #409eff;
    }
    .uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 80px;
      height: 80px;
      line-height: 80px;
      text-align: center;
    }
    .image {
      width: 80px;
      height: 80px;
      border-radius: 6px;
    }
  }
  .el-icon-error {
    position: absolute;
    display: none;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.7);
    right: -8px;
    top: -8px;
    cursor: pointer;
  }
  &:hover {
    .el-icon-error {
      display: block;
    }
  }
}
</style>