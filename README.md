## Record
目标：对原本的联想官网进行重写，修复一些bug，并还原出一些代码。
技术栈：html + css + js
另外使用的库有swiper.js
### 08.29
修改热门推荐的轮播图，对nav部分的代码进行优化，简化原本的js代码
将原本的css命名重新作了规范，大部分遵从BEM规范。

### 08.30
想要div在增加高度时往上增加高度只需要在最外层的盒子添加`display:flex;align-items:flex-end`即可
`<div class="wrapper">
<div class="up"></div>
</div>` 