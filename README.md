
### 京东首页
*练习CSS布局，以及jQuery的使用*

[效果预览](https://zbhgit.github.io/StaticPage-JD/dist/)

##### 简单介绍

* 使用Gulp搭建开发环境，实现开发时自动刷新功能，完成项目文件的压缩、合并、替换等功能

* 基本实现京东首页的动态交互功能
  * banner轮播图，以及部分产品模块的轮播效果
  * 商品列表tab选项卡
  * 简单封装倒计时函数，实现倒计时功能的服用
  * 返回顶部功能
  * 搜索栏吸顶效果
  * 左侧导航的自动消失于隐藏，可控制页面的滚动位置
  * 图片的懒加载，减少网络请求，提高性能
  * 利用函数节流，减少DOM操作，提高性能
  * 使用jQuery完成部分动画
* 页面布局，为了兼容不同浏览器，使用了浮动加定位布局
* 通过SASS预编译器书写CSS样式，为写CSS添加了一定乐趣



#### 项目总结

1. 命名有待改进，无论CSS中类名还是JS中变量名，都很有可能发生命名冲突。深刻认识到CMD，AMD规范重要。另外还可以为JS变量添加命名空间如
    ```
      // 原来的方式
      var fn = function() { console.log('fn') }
      fn()
      // 命名空间的方式
      var myFoo = {}
      myFoo.fn = function() { console.log('fn') }
      myFoo.fn()
    ``` 
    还有一种方式是使用立即执行函数，利用闭包实现私有变量
2. 首页中有很多出商品列表，使用了轮播图功能，这次编写未能很好的实现代码的服用，有待改进，后续添加面向对象的写法，实现代码复用
3. CSS的组织方式应向模块化靠拢，实现代码复用和减少代码量
4. 还需注意JS的加载顺序问题

#### clone该项目
```
  $ git clone https://github.com/zbhgit/StaticPage-JD.git

  $ cd StaticPage-JD
  $ npm install 
```
* 使用gulp搭建开发环境，完成文件压缩、合并、替换等功能
```
  $ gulp build // 完成上述功能，生成上线文件
```
* 开发时运行下面的命令，实现浏览器实时更新

```
  $ gulp server // 打开 http://localhost:8080 即可看到效果
```