const state = {
  // 模板中的组件数据
  // 数据结构: [{id<String>, data<Object|Object Array>, style<Object>}]
  list: [],
  // 模板中当前选中的组件索引
  active: -1,
  // 模板右侧编辑面板是否处于'添加组件'状态(两种状态：添加 | 编辑)
  dialogIsAdd: false,
  // 模板右侧编辑面板top值
  dialogTop: 0,
  // 将要向模板中添加组件的位置索引
  addIndex: 0,
}

const getters = {
  list: state => state.list,
  active: state => state.active,
  dialogIsAdd: state => state.dialogIsAdd,
  dialogTop: state => state.dialogTop,
  addIndex: state => state.addIndex,
  dialogTop: state => state.dialogTop,
}

const mutations = {
  /**
   * 设置模板中的组件数据
   */
  SET_LIST(state, list) {
    state.list = list
  },

  /**
   * 设置模板中当前选中的组件索引
   */
  SET_ACTIVE(state, active) {
    state.active = active
  },

  /**
   * 设置模板右侧编辑面板是否显示
   */
  SET_DIALOG_IS_ADD(state, dialogIsAdd) {
    state.dialogIsAdd = dialogIsAdd
  },

  /**
   * 设置模板右侧编辑面板top值
   */
  SET_DIALOG_TOP(state, dialogTop) {
    state.dialogTop = dialogTop || 0
  },

  /**
   * 设置将要向模板中添加组件的位置索引
   */
  SET_ADD_INDEX(state, addIndex) {
    state.addIndex = addIndex
  },

  /**
   * 向模板尾部添加组件
   */
  ADD_WIDGET(state, widget) {
    state.list.push(widget)
    // extra:
    // 添加新组件后，把选中索引设为新组件的索引
    state.active = state.list.length - 1
    // 把面板状态设为 编辑
    state.dialogIsAdd = false
  },

  /**
   * 向模板中插入组件（指定位置）
   * data.index: 要插入的位置
   * data.widget: 要插入的组件
   */
  INSERT_WIDGET(state, data) {
    if (!data.hasOwnProperty('index') || !data.hasOwnProperty('widget')) {
      return
    }
    state.list.splice(data.index, 0, data.widget)
    // extra:
    // 插入新组件后，把选中索引设为新组件的索引
    state.active = data.index
    // 把面板状态设为 编辑
    state.dialogIsAdd = false
  },

  /**
   * 从模板中删除组件
   */
  DELETE_WIDGET(state, index) {
    if (!index in state.list) {
      return
    }
    state.list.splice(index, 1)
    // extra:
    // 如果删除组件的索引大于等于当前选中组件的索引，需要把当前选中索引-1
    if (state.active >= index) {
      state.active = state.active - 1
    }
  },

  /**
   * 给某组件添加一条数据
   * data: {
   *   key,   // 组件索引
   *   value  // 组件data中的初始项
   * }
   */
  ADD_WIDGET_DATA(state, data) {
    let { key, value } = data
    let widget = state.list[key]
    if (widget) {
      widget.data.push(value)
    }
  },

  /**
   * 修改某组件的某条数据
   * data: {
   *   key,  // 组件索引
   *   value: {
   *     key,  // 组件data中某个属性的key
   *     value // 组件data中某个属性的value
   *  }
   * }
   */
  SET_WIDGET_DATA(state, data) {
    let { key, value } = data
    let widget = state.list[key]
    if (widget) {
      widget[value.key] = value
    }
  },

  /**
   * 删除某组件的某条数据
   * data: {
   *   key,   // 组件索引
   *   value  // 组件中要被删除的数据的索引
   * }
   */
  DELETE_WIDGET_DATA(state, data) {
    let { key, value } = data
    let widget = state.list[key]
    if (widget) {
      widget.data.splice(value, 1)
    }
  },
}

const actions = {
  setList({ commit }, list) {
    commit('SET_LIST', list)
  },

  setActive({ commit }, active) {
    commit('SET_ACTIVE', active)
  },

  setDialogIsAdd({ commit }, dialogIsAdd) {
    commit('SET_DIALOG_IS_ADD', dialogIsAdd)
  },

  setDialogTop({ commit }, dialogTop) {
    commit('SET_DIALOG_TOP', dialogTop)
  },

  setAddIndex({ commit }, addIndex) {
    commit('SET_ADD_INDEX', addIndex)
  },

  addWidget({ commit }, widget) {
    commit('ADD_WIDGET', widget)
  },

  insertWidget({ commit }, data) {
    commit('INSERT_WIDGET', data)
  },

  deleteWidget({ commit }, index) {
    commit('DELETE_WIDGET', index)
  },

  addWidgetData({ commit }, data) {
    commit('ADD_WIDGET_DATA', data)
  },

  setWidgetData({ commit }, data) {
    commit('SET_WIDGET_DATA', data)
  },

  deleteWidgetData({ commit }, data) {
    commit('DELETE_WIDGET_DATA', data)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
