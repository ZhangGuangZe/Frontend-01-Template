# 第八周总结

本周主要讲了CSS中最重要的两个部分，分别是选择器和布局。

## 重学CSS——选择器
CSS选择器可以为页面中的元素制定样式，想要更深入理解选择器，就先从选择器的语法开始吧。

### 选择器语法
在选择器语法中，规定了四类选择器，他们分别是：

#### Simple selectors（简单选择器）

##### 1.类型选择器
也称标签选择器，使用标签名就可以选中相应标签的元素。

##### 2.通用选择器(*)

##### 3.类选择器
以.开头，在class属性中可以有多个值，而且多个元素的class值可以相同。

##### 4.ID选择器
以#开头，在同一个页面中，每个元素的id值不能重复。

##### 5.属性选择器
属性选择器用于选中的拥有某个属性或者符合某种模式的元素。主要包括下列7种：

- [att]
- [att=val]
- [att~=val] 值中有whitespace
- [att|=val] 常用于匹配lang属性
- [att^=val] 开头
- [att$=val] 结尾
- [att\*=val] 包含

##### 6.伪类选择器
伪类选择器用来选中特定状态或者某种结构的元素，以冒号（:）开头。下面是它的几种分类。

- 超链接伪类
:any-link、:link、:visited、:hover、:focus、:active、:target

- 结构化伪类
:root、:empty、:nth-child()、:nth-last-child()、:first-child、:last-child、:only-child、
:nth-of-type()、:nth-last-of-type()、:first-of-type、:last-of-type、:only-of-type

- 表单伪类
:enabled、:disabled 、:checked、:read-only、:read-write、:default、:indeterminate
:blank、:valid、:invalid、:required、:optional

- 逻辑伪类
:not()、:is()、:where()、:has()

这些伪类选择器占了CSS选择器的很大比重，而且还有很多没有浏览器没有实现，就不一一列举了。

##### 7.伪元素选择器
伪元素选择器以双冒号开头(::)，常用于不想添加额外标记的场景。

- ::first-line
- ::first-letter
- ::before
- ::after
- ::selection

#### Compound selectors（复合选择器）
复合选择器就是多种选择器相互连接起来的选择器，选择器之间没有任何分隔符。例如：a.button

#### Combinator selectors（复杂选择器）
以下组合器可以将多个简单的选择器组合成一个复杂的选择器。

- 后代组合器（whitespace）
- 子组合器（>）
- 相邻兄弟组合器（+）
- 后继兄弟组合器（~）


#### Selector lists（选择器列表）
有时候为了能够实现代码的复用，会出现多个选择器匹配同一条规则的情况，这时选择器列表就登场了，使用逗号（,）就可以将这些选择器分组，组成一个选择器列表。

### 选择器优先级
选择器优先级也称特殊性，分别用a、b、c表示他们的级别。

- a——ID选择器；
- b——类选择器、伪类选择器、属性选择器；
- c——类型选择器、伪元素选择器。

其中，:not()、通用选择器没有优先级。计算选择器优先级的时候，可以根据上述列表数各个级别的数量，依次填入[a,b,c]数组中。

## 重学CSS——布局
布局是CSS的一个重要课题，也是CSS中最难深入的一部分知识。

### 盒模型
盒模型描述了一个元素如何显示，以及元素之间如何相互影响。这个元素主要包括content、padding、border、margin。但是网页中的盒子与现实生活中的盒子还是有区别的，默认情况下，我们看到的网页中的盒子只包括content部分，设置它的宽高其实就是在设置content的宽高。

### 正常流
正常流看着正常，其实是一种有点不符合人类直觉的排版。其中的最让人头疼的就是BFC啦！它会让container box中的内容出现外边距折叠的效果，不想让它出现这种行为，就需要在其中添加一个新的BFC。

### 浮动
浮动设计的初衷让文本与元素的环绕，就像word中让文字如何与图片如何环绕一样。不过当时缺乏布局的标准，而且使用浮动来布局比使用表格布局还是香的。

因为设置了浮动的元素会脱离文档流，所以如果包含块中的元素都使用了浮动，那么该包含块就会出现折叠的效果，还可能出现两个浮动元素’卡‘住的效果，想要解决这些问题，就需要使用clear属性清除浮动。

为了不让浮动出现我们不想要的效果，我们可以通过BFC来包括浮动元素，防止文档流围绕文档流排布。

### 定位
定位并不适合总体的布局，但也可以适当使用position中的relative、absolute、fix、sticky来实现一些常用组件，比如模态框，下拉菜单，导航栏等。

### Flex
Flex为布局而生，终于可以脱离使用hack方法布局的苦海，还为前端人民提供了优秀的垂直居中、等高问题、自适应宽的解决方案。

### Grid
Grid布局作为一种二维布局方案，让我们不仅可以控制行，而且还可以同时控制列。不过现在浏览器的支持还不高，不过会是将来的主流布局方案。

## 写在最后
这周总结的也不是很深入，不过想写的深入，一篇文章还是不够的，希望下周CSS部分结束以后好好写一下关于CSS知识体系的博客吧。请大家监督，如果没写出来就。。。。。。
