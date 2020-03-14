<template>
  <div class="line-setting">
    <div class="setting-title">
      辅助线
      <el-tooltip
        effect="dark"
        placement="bottom"
        content="为了方便显示与操作，这里给辅助线组件加了额外高度(不会影响手机端实际显示效果)"
      >
        <i class="el-icon-question" style="cursor: pointer;"></i>
      </el-tooltip>
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="组件样式" name="first">
        <form-item label="线条样式:">
          <el-radio-group v-model="value.style.borderStyle">
            <el-radio label="solid">实线</el-radio>
            <el-radio label="dashed">虚线</el-radio>
            <el-radio label="dotted">点线</el-radio>
          </el-radio-group>
        </form-item>
        <form-item label="线条颜色:">
          <el-color-picker v-model="value.style.borderColor"></el-color-picker>
        </form-item>
        <form-item label="线条宽度:">
          <el-input-number
            controls-position="right"
            size="small"
            :min="1"
            :max="5"
            v-model="value.style.borderWidth"
          ></el-input-number>
        </form-item>
        <form-item label="外边距:">
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
export default {
  name: 'line-setting',
  mixins: [mixins]
}
</script>

<style lang="less" scoped>
@import '../setting.less';
</style>