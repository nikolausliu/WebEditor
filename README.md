# web-editor

仿有赞微商城可视化拖拽生成页面。

项目分为 管理端 + H5端 + 服务端，本仓库为 **管理端** 源码仓库。管理端和H5端部署在github pages。服务端部署在阿里云服务器，功能比较简单，源码没有放在github。

- [管理端源码](https://github.com/nikolausliu/WebEditor)
- [管理端在线访问](https://nikolausliu.top/WebEditor)
- [H5端源码](https://github.com/nikolausliu/WebEditorH5)
- [H5端在线访问](https://nikolausliu.top/WebEditorH5)

主要原理就是管理端和移动端同时维护一组自定义组件，管理端通过可视化界面拖拽组件、改变组件顺序、编辑组件的数据和属性，并生成一段json来描述这些组件的信息，并通过接口把json存储在服务端。H5端通过接口请求到json后，把json渲染成对应的组件。我们来看一个简单的json示例：

```json
[{
  "id": "pictures",
  "data": [
    {
      "title": "标题",
      "img": "",
      "functional": {
        "id": "link",
        "value": {
          "url": "http://www.baidu.com"
        }
      }
    }
  ],
  "style": {
    "marginTop": "0",
    "marginRight": "15",
    "marginBottom": "0",
    "marginLeft": "15",
    "backgroundColor": "",
    "cols": "1",
    "space": "5"
  },
  "hash": "85f79de2c8e3946f72f63d7c5dd999e6"
}]
```

上面的json示例表示，我们有一个pictures自定义组件，`data.img`是一个图片url使我们可以在组件中渲染图片，`functional.value.url`使我们可以对这个组件添加点击跳转链接的事件，style里定义了一些css属性，我们可以通过在标签上动态绑定`:style={}`来改变我们自定义组件的样式。