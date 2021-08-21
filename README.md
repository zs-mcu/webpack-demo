① 新建项目空白目录，并运行 npm init –y 命令，初始化包管理配置文件 package.json

② 新建 src 源代码目录

③ 新建 src -> index.html 首页和 src -> index.js 脚本文件

④ 初始化首页基本的结构

⑤ 运行 npm install jquery –S 命令，安装 jQuery

​	--save    -S 

​	install     i

​	-S: 明确告诉npm将jquery放到dependencies下

⑥ 通过 ES6 模块化的方式导入 jQuery，实现列表隔行变色效果





**3. 在项目中安装 webpack**   

https://www.npmjs.com/

在终端运行如下的命令，安装 webpack 相关的两个包：

npm install webpack@5.42.1 webpack-cli@4.7.2 -D 

​	-save-dev	-D

​	-D: 将节点信息放入dev节点下

​	dependencies: 开发和上线使用

​	devDependencies：开发阶段使用





**4. 在项目中配置 webpack**

① 在项目根目录中，创建名为 webpack.config.js 的 webpack 配置文件，并初始化如下的基本配置：

```js
module.exports = {
  mode: 'development' // mode 用来指定构建模式。 可选值有 development 和 production
}
```

② 在 package.json 的 scripts 节点下，新增 dev 脚本如下：

```js
"scripts": {
  	"dev": "webpack" //script 节点下得脚本，可以通过 npm run 执行。 例如npm run dev
}
```

③ 在终端中运行 npm run dev 命令，启动 webpack 进行项目的打包构建



**4.3 webpack 中的默认约定**

在 webpack 4.x 和 5.x 的版本中，有如下的默认约定：

① 默认的打包入口文件为 src -> index.js

② 默认的输出文件路径为 dist -> main.js

注意：可以在 webpack.config.js 中修改打包的默认约定



**4.4 自定义打包的入口与出口**

在 webpack.config.js 配置文件中，通过 entry 节点指定打包的入口。通过 output 节点指定打包的出口。

示例代码如下：

```js
const path = require('path') //导入 node.js 中专门操作路径的模块

module.exports = {
  //指定要处理哪个文件， __dirname: 当前文件所在目录
  entry: path.join(__dirname,'./src/index.js'),
  output: {
    path: path.join(__dirname,'./dist'),
    filename: 'bundle.js' //默认为main.js
  }
}
```





**webpack 中的插件**



**1. webpack 插件的作用**

通过安装和配置第三方的插件，可以拓展 webpack 的能力，从而让 webpack 用起来更方便。最常用的

webpack 插件有如下两个：

① webpack-dev-server

类似于 node.js 阶段用到的 nodemon 工具

每当修改了源代码，webpack 会自动进行项目的打包和构建

② html-webpack-plugin

webpack 中的 HTML 插件（类似于一个模板引擎插件）

可以通过此插件自定制 index.html 页面的内容



**2.1 安装 webpack-dev-server**

```npm install webpack-dev-server@3.11.2 -D```

**2.2 配置 webpack-dev-server**

① 修改 package.json -> scripts 中的 dev 命令如下：

```
"script": {
"dev": "webpack serve",
}
```



② 再次运行 npm run dev 命令，重新进行项目的打包

③ 在浏览器中访问 http://localhost:8080 地址，查看自动打包效果

