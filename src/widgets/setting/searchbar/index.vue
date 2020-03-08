<template>
  <div class="earchbar-setting">
    <div class="setting-title">搜索栏</div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="组件数据" name="first">
        <form-item label="搜索关键词:">
          <el-input size="mini" style="width: 100%;" v-model="value.data.placeholder"></el-input>
        </form-item>
      </el-tab-pane>
      <el-tab-pane label="组件样式" name="second">
        <form-item label="框体样式:">
          <el-radio-group v-model="value.style.shape">
            <el-radio label="square">方形</el-radio>
            <el-radio label="round">圆型</el-radio>
          </el-radio-group>
        </form-item>
        <form-item label="框体颜色:">
          <el-color-picker v-model="value.style.inputBackgroundColor"></el-color-picker>
        </form-item>
        <form-item label="背景颜色:">
          <el-color-picker v-model="value.style.backgroundColor"></el-color-picker>
        </form-item>
        <form-item label="框体高度:">
          <el-input-number
            controls-position="right"
            size="small"
            :min="28"
            :max="40"
            v-model="value.style.inputHeight"
          ></el-input-number>
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
  name: 'searchbar-setting',
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