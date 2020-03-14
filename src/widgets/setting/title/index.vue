<template>
  <div class="title-setting">
    <div class="setting-title">标题组件</div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="组件数据" name="first">
        <form-item label="标题:">
          <el-input size="mini" placeholder="请输入标题" style="width: 100%;" v-model="value.data.title"></el-input>
        </form-item>
        <form-item label="更多:">
          <el-input
            size="mini"
            placeholder="请输入更多"
            style="width: 100%;"
            v-model="value.data.moreTitle"
          ></el-input>
        </form-item>
        <func-set v-model="value.data.functional"></func-set>
      </el-tab-pane>
      <el-tab-pane label="组件样式" name="second">
        <form-item label="背景颜色:">
          <el-color-picker v-model="value.style.backgroundColor"></el-color-picker>
        </form-item>
        <form-item label="标题颜色:">
          <el-color-picker v-model="value.style.color"></el-color-picker>
        </form-item>
        <form-item label="更多颜色:">
          <el-color-picker v-model="value.style.moreColor"></el-color-picker>
        </form-item>
        <form-item label="布局:">
          <el-radio-group v-model="value.style.layout">
            <el-radio label="center">居中</el-radio>
            <el-radio label="spaceBetween">两端对齐</el-radio>
          </el-radio-group>
        </form-item>
        <form-item label="标题大小:">
          <el-input-number
            controls-position="right"
            size="small"
            :min="12"
            :max="24"
            v-model="value.style.fontSize"
          ></el-input-number>
        </form-item>
        <form-item label="更多大小:">
          <el-input-number
            controls-position="right"
            size="small"
            :min="12"
            :max="24"
            v-model="value.style.moreFontSize"
          ></el-input-number>
        </form-item>
        <form-item label="高度:">
          <el-input-number
            controls-position="right"
            size="small"
            :min="30"
            :max="60"
            v-model="value.style.height"
          ></el-input-number>
        </form-item>
        <form-item label="内边距:">
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
import mixins from '../mixins'
import { FuncSet } from '@/widgets/form/index'
export default {
  name: 'title-setting',
  mixins: [mixins],
  components: {
    [FuncSet.name]: FuncSet
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
@import '../setting.less';
</style>