# 第十三周总结

## 编程与算法训练——Proxy 与双向绑定

这周通过 Proxy 让我们感受到了 Vue3 响应式的精髓，自己也看了之前 Vue2 的响应式原理，并且补在了这周的文件中。

Vue2 主要使用了 Object.defineProperty() 实现了对数据的拦截与监听，但是也存在着一些缺点。

Vue2 主要使用了 Proxy 对象对数据进行拦截与监听，代码有许多没理解的地方，还需继续补一补，后面在对照源码温习一遍。

## 使用 Range 实现 DOM 精准操作，组件化基础

通过 mousedown、mousemove 和 mouseup 事件实现了一个元素的拖拽，并且通过 Range API 让元素拖拽到一段文字的间隙中。

## 组件化基础

组件化方面，了解了一个组件应该如何设计，有什么要素。理清楚了 Property 和 Attribute 这两个概念可以让我们更好地设计好一个组件。

### 组件

- Properties
- Methods
- Inherit
- Attitude
- Config & State
- Event
- Lifecycle
  - created
  - mount
  - JS change/set
  - User Input
  - render/update
  - destroyed
- Children
  - Content 型
  - Template 型

## 写在最后

可能每一周自己作业的完成情况不是最完美的，不过我已经坚持了 13 周，加油！
