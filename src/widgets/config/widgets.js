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
      functional: {
        id: 'none',
      },
    }),
    style: {
      ...margin,
    },
  },
}

export default widgets
