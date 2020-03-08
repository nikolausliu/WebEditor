import { FormItem } from '@/widgets/form/index'
export default {
  components: {
    [FormItem.name]: FormItem,
  },
  data() {
    return {
      activeName: 'first',
    }
  },
  props: {
    value: {
      type: Object,
    },
    widgetIndex: {
      type: Number,
    },
  },
}
