const color = {
  color: '#333333',
}

const background = {
  backgroundColor: null,
  background: null,
}

const margin = {
  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
}

const padding = {
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
  paddingLeft: 0,
}

const align = {
  align: 'left', // left | center | right
}

const fontSize = {
  fontSize: 12,
}

const lineHeight = {
  lineHeight: 16,
}

const widgets = {
  // 文本组件
  text: {
    id: 'text',
    data: {
      title: '文本组件',
    },
    style: Object.assign(
      {},
      color,
      background,
      align,
      fontSize,
      lineHeight,
      margin,
      {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
      }
    ),
  },
  // 辅助空白
  blank: {
    id: 'blank',
    style: {
      height: 10,
      backgroundColor: null,
    },
  },
  // 辅助线
  line: {
    id: 'line',
    style: {
      borderWidth: 1,
      borderColor: '#ccc',
      // 边框样式: solid | dashed | dotted
      borderStyle: 'solid',
      marginLeft: 0,
      marginRight: 0,
    },
  },
  // 搜索栏
  searchbar: {
    id: 'searchbar',
    data: {
      placeholder: '搜索商品',
    },
    style: {
      ...margin,
      // 形状: {square: '方形', round: '圆形'}
      shape: 'square',
      // 框体高度: 28~40
      inputHeight: 40,
      // 背景颜色
      backgroundColor: '#f9f9f9',
      // 框体颜色
      inputBackgroundColor: '#ffffff',
    },
  },
  // 轮播图
  swiper: {
    id: 'swiper',
    data: Array(3).fill({
      // 标题
      title: '标题',
      // 图片url
      picUrl: null,
      // 功能
      functional: {
        id: 'none',
      },
    }),
    style: {
      ...margin,
    },
  },
  // 功能入口
  grid: {
    id: 'grid',
    data: Array(3).fill({
      title: '标题',
      icon: null,
      functional: {
        id: 'none',
      },
    }),
    style: {
      ...margin,
      color: color.color,
      backgroundColor: null,
      // 列数
      cols: 3,
      iconWidth: 50,
      iconHeight: 50,
    },
  },
  // 标题
  title: {
    id: 'title',
    data: {
      title: '标题',
      icon: null,
      moreTitle: '更多',
      moreIcon: null,
      functional: {
        id: 'none',
      },
    },
    style: {
      ...margin,
      paddingLeft: 10,
      paddingRight: 10,
      // 布局: {spaceBetween: '两端可显示标题与更多（更多为可选项）', center: '只居中显示标题'}
      layout: 'spaceBetween',
      height: 44,
      backgroundColor: null,
      fontSize: 14,
      color: '#333',
      moreFontSize: 12,
      moreColor: '#999',
    },
  },
  // 图片组
  pictures: {
    id: 'pictures',
    data: Array(1).fill({
      title: '标题',
      img: null,
      functional: {
        id: 'none',
      },
    }),
    style: {
      ...margin,
      backgroundColor: null,
      cols: 1,
      // 图片之间间距
      space: 5,
    },
  },
  // 工具栏
  toolbar: {
    id: 'toolbar',
    data: {},
    style: {
      ...margin,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      backgroundColor: null,
      color: '#333',
    },
  },
  // 商品列表
  products: {
    id: 'products',
    data: Array(2).fill({
      title: '标题',
      subtitle: '副标题',
      img: null,
      buyicon: null,
      price: '0.00',
      functional: {
        id: 'none',
      },
    }),
    style: {
      ...margin,
      paddingTop: 0,
      paddingBottom: 0,
      paddingTop: 15,
      paddingRight: 15,
      paddingBottom: 15,
      paddingLeft: 15,
      backgroundColor: null,
      // 布局: {1: 一行1个, 2: 一行2个}
      layout: 1,
      // 边框类型: {'border': '边框', 'shadow': '阴影', 'none': '无边框' }
      borderType: 'border',
    },
  },
}

export default widgets
