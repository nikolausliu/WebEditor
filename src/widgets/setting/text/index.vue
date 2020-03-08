<template>
  <div class="text-setting">
    <div class="setting-title">文本组件</div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="组件数据" name="first">
        <form-item label="文本:">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入内容"
            style="width: 100%;"
            v-model="value.data.title"
          ></el-input>
        </form-item>
      </el-tab-pane>
      <el-tab-pane label="组件样式" name="second">
        <form-item label="文本颜色:">
          <el-color-picker v-model="value.style.color"></el-color-picker>
        </form-item>
        <form-item label="背景颜色:">
          <el-color-picker v-model="value.style.backgroundColor"></el-color-picker>
        </form-item>
        <form-item label="对齐:">
          <el-radio-group v-model="value.style.align">
            <el-radio label="left">居左</el-radio>
            <el-radio label="center">居中</el-radio>
            <el-radio label="right">居右</el-radio>
          </el-radio-group>
        </form-item>
        <form-item label="文本大小:">
          <el-input-number
            controls-position="right"
            size="small"
            :min="12"
            :max="50"
            v-model="value.style.fontSize"
          ></el-input-number>
        </form-item>
        <form-item label="文本行高:">
          <el-input-number
            controls-position="right"
            size="small"
            :min="12"
            :max="50"
            v-model="value.style.lineHeight"
          ></el-input-number>
        </form-item>
        <form-item label="内边距:">
          <el-row class="multi-row">
            <el-col :span="12">
              <span class="multi-row__label">上</span>
              <el-input-number
                controls-position="right"
                size="small"
                :min="0"
                :max="100"
                v-model="value.style.paddingTop"
              ></el-input-number>
            </el-col>
            <el-col :span="12">
              <span class="multi-row__label">下</span>
              <el-input-number
                controls-position="right"
                size="small"
                :min="0"
                :max="100"
                v-model="value.style.paddingBottom"
              ></el-input-number>
            </el-col>
          </el-row>
          <el-row class="multi-row">
            <el-col :span="12">
              <span class="multi-row__label">左</span>
              <el-input-number
                controls-position="right"
                size="small"
                :min="0"
                :max="100"
                v-model="value.style.paddingLeft"
              ></el-input-number>
            </el-col>
            <el-col :span="12">
              <span class="multi-row__label">右</span>
              <el-input-number
                controls-position="right"
                size="small"
                :min="0"
                :max="100"
                v-model="value.style.paddingRight"
              ></el-input-number>
            </el-col>
          </el-row>
        </form-item>
        <form-item label="外边距:">
          <el-row class="multi-row">
            <el-col :span="12">
              <span class="multi-row__label">上</span>
              <el-input-number
                controls-position="right"
                size="small"
                :min="0"
                :max="100"
                v-model="value.style.marginTop"
              ></el-input-number>
            </el-col>
            <el-col :span="12">
              <span class="multi-row__label">下</span>
              <el-input-number
                controls-position="right"
                size="small"
                :min="0"
                :max="100"
                v-model="value.style.marginBottom"
              ></el-input-number>
            </el-col>
          </el-row>
          <el-row class="multi-row">
            <el-col :span="12">
              <span class="multi-row__label">左</span>
              <el-input-number
                controls-position="right"
                size="small"
                :min="0"
                :max="100"
                v-model="value.style.marginLeft"
              ></el-input-number>
            </el-col>
            <el-col :span="12">
              <span class="multi-row__label">右</span>
              <el-input-number
                controls-position="right"
                size="small"
                :min="0"
                :max="100"
                v-model="value.style.marginRight"
              ></el-input-number>
            </el-col>
          </el-row>
        </form-item>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { FormItem } from '@/widgets/form/index'
export default {
  name: 'text-setting',
  components: {
    [FormItem.name]: FormItem
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  props: {
    value: {
      type: Object
    }
  }
}
</script>

<style lang="less" scoped>
@import '../setting.less';
</style>