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

```js
const path = require('path')// 导入 node.js 中专门操作路径的模块

  
module.exports = {
    mode: 'production', // mode 用来指定构建模式。 可选值有 development 和 production
    //development : 开发使用，打包速度快
    //production: 上线时使用
    entry: path.join(__dirname,'./src/index.js'),
    output:{
        path: path.join(__dirname,'dist'),
        filename: 'js/main.js'
    },
    plugins: [htmlPlugin],
    devServer: {
        open: true,
        port: 8081,
        host: '127.0.0.1',


    },
    module: {
        rules: [
            {test: /\.css$/ , use:['style-loader','css-loader']},
            {test: /\.less$/ , use:['style-loader','css-loader','less-loader']},
            {test: /\.jpg|png|gif$/ , use:'url-loader?limit=300&outputPath=images'},
            {test: /\.js$/ , use:'babel-loader',exclude: /node_modules/}
          ]
    }
}
```



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





**3.1 安装 html-webpack-plugin**

```npm install html-webpack-plugin@5.3.2 -D```



**3.2 配置 html-webpack-plugin**

```js
// 1.导入HTML插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin')

// 2. 创建HTML 插件的实例对象
const htmlPlugin = new HtmlPlugin({
  template: './src/index.html',
  filename: './index.html',
})


module.exports = {
  mode: 'development',
  plugins: [htmlPlugin]
}

```





**4. devServer 节点**

在 webpack.config.js 配置文件中，可以通过 devServer 节点对 webpack-dev-server 插件进行更多的配置，

示例代码如下：

```j
devServer:{
	open: true,
	host: '127.0.0.1',
	port: 80
}
```



**webpack 中的 loader**

webpack默认只能打包处理.js文件，处理不了其他后缀的文件

**3. 打包处理 css 文件**

① 运行 npm i style-loader@3.0.0 css-loader@5.2.6 -D 命令，安装处理 css 文件的 loader

② 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：

```js
module: {
  rules: [
    //前后顺序不能反，loader调用的时候是从后往前调用的
    {test: /\.css$/,use:['style-loader','css-loader']}
  ]
}
```

webpack -->css --> css loader --> style loader





**4. 打包处理 less 文件**

① 运行 npm i less-loader@10.0.1 less@4.1.1 -D 命令     //less-loader 内部依赖于less

② 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：



```js
module: {
  rules: [
    {tests: /\.less/,use:['style-loader',css-loader,'less-loader']}
  ]
}
```



**5. 打包处理样式表中与** **url 路径相关****的文件**

① 运行 npm i url-loader@4.1.1 file-loader@6.2.0 -D 命令

② 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：

```js
    module: {
        rules: [
            {test: /\.jpg|png|gif$/ , use:'url-loader?limit=22229'}
          ]
    }
```



其中 ? 之后的是 loader 的参数项： 

⚫ limit 用来指定图片的大小，单位是字节（byte） 

⚫ 只有 ≤ limit 大小的图片，才会被转为 base64 格式的图片



**6. 打包处理 js 文件中的高级语法**

webpack 只能打包处理一部分高级的 JavaScript 语法。对于那些 webpack 无法处理的高级 js 语法，需要借

助于 babel-loader 进行打包处理。例如 webpack 无法处理下面的 JavaScript 代码：

```js
//定义名为info的装饰器
function info(target){
  //为目标加静态属性 info
  target.info = 'Person info'
}

// 为 Person 类应用info装饰器
@info
class Person{}

// 打印 Person 的静态属性 info
console.log(Person.info)
```

**6.1 安装 babel-loader 相关的包**

npm i babel-loader@8.2.2 @babel/core@7.14.6 @babel/plugin-proposal-decorators@7.14.5 -D 

在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：

```js
{test: /\.js$/ , use:'babel-loader',exclude: /node_modules/},
```



https://babeljs.io/docs/en/babel-plugin-transform-runtime

在项目根目录下，创建名为 babel.config.js 的配置文件，定义 Babel 的配置项如下

```js
module.exports = {
    
    plugins: [['@babel/plugin-proposal-decorators',{legacy: true}]]
}
```









**打包发布**

**2. 配置 webpack 的打包发布**

在 package.json 文件的 scripts 节点下，新增 build 命令如下：

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack serve",
    "build": "webpack --mode production"
  },
```

--model 是一个参数项，用来指定 webpack 的运行模式。production 代表生产环境，会对打包生成的文件

进行代码压缩和性能优化。

注意：通过 --model 指定的参数项，会覆盖 webpack.config.js 中的 model 选项。





**3. 把 JavaScript 文件统一生成到 js 目录中**

在 webpack.config.js 配置文件的 output 节点中，进行如下的配置：

```js
  
const path = require('path')//导入 node.js 中专门操作路径的模块
module.exports = {
	output:{
        path: path.join(__dirname,'dist'),
        filename: 'js/main.js'
    },
}
```



**4. 把图片文件统一生成到 image 目录中**

修改 webpack.config.js 中的 url-loader 配置项，新增 outputPath 选项即可指定图片文件的输出路径：
```js
{test: /\.jpg|png|gif$/ , use:'url-loader?limit=300&outputPath=images'},
  
{test: /\.jpg|png|gif$/ , use:{loader: 'url-loader',options:{limit=300,outputPath='images'}}},
```

**5. 自动清理 dist 目录下的旧文件**

为了在每次打包发布时自动清理掉 dist 目录中的旧文件，可以安装并配置 clean-webpack-plugin 插件

```js
npm install --save-dev clean-webpack-plugin

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackConfig = {
    plugins: [
        /**
         * All files inside webpack's output.path directory will be removed once, but the
         * directory itself will not be. If using webpack 4+'s default configuration,
         * everything under <PROJECT_DIR>/dist/ will be removed.
         * Use cleanOnceBeforeBuildPatterns to override this behavior.
         *
         * During rebuilds, all webpack assets that are not used anymore
         * will be removed automatically.
         *
         * See `Options and Defaults` for information
         */
        new CleanWebpackPlugin(),
    ],
};

module.exports = webpackConfig;
```





**Source Map**

**3. webpack** **开发环境下的** **Source Map**

在开发环境下，webpack 默认启用了 Source Map 功能。当程序运行出错时，可以直接在控制台提示错误行

的位置，并定位到具体的源代码：

**3.1 默认 Source Map 的问题**

开发环境下默认生成的 Source Map，记录的是生成后的代码的位置。会导致运行时报错的行数与源代码的行

数不一致的问题。示意图如下：

**3.2 解决默认 Source Map 的问题**

开发环境下，推荐在 webpack.config.js 中添加如下的配置，即可保证运行时报错的行数与源代码的行数

保持一致：

```js
module.exports = {
  mode: 'development',
  //eval-source-map 仅限在“开发模式”下使用，不建议在“生产模式”下使用。
  //此选项生成的Source Map 能保证 “运行时报错的行数” 与 “源代码的行数” 保持一致
  devtool: 'eval-source-map',
}
```

**5. Source Map 的最佳实践**

① 开发环境下： 

​	devtool 设置为 eval-source-map

②生产环境

​	devtool 设置为 nosources-source-map

注意： 不建议使用devtool: source-map



