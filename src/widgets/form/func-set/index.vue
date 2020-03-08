<template>
  <div class="func-set">
    <form-item label="功能:">
      <el-select size="mini" style="width: 100%;" placeholder="请选择功能" v-model="selected">
        <el-option v-for="func in functional" :key="func.id" :label="func.name" :value="func.id"></el-option>
      </el-select>
    </form-item>
    <form-item label="链接地址:" v-if="selected === 'link'">
      <el-input size="mini" placeholder="请输入链接地址" v-model="val.url"></el-input>
    </form-item>
  </div>
</template>

<script>
import functional from '../../config/functional'
import FormItem from '../form-item/index'
export default {
  name: 'func-set',
  components: {
    [FormItem.name]: FormItem
  },
  data() {
    return {
      functional
    }
  },
  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    selected: {
      get() {
        return this.value.id || ''
      },
      set(value) {
        const functional = JSON.parse(JSON.stringify(this.value || {}))
        functional.id = value
        switch (value) {
          // 无功能 {id: 'none'}
          case 'none':
            if ('value' in functional) {
              this.$delete(functional, 'value')
            }
            break
          // 链接 {id: 'functional', value: {url: ''}}
          case 'link':
            this.$set(functional, 'value', { url: '' })
            break
        }

        // v-model
        this.$emit('input', functional)
      }
    },
    val() {
      return this.value.value || {}
    }
  }
}
</script>

<style lang="less" scoped>
</style>