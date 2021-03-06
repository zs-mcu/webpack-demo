// 1.导入HTML插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin')

// 2. 创建HTML 插件的实例对象
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',
    filename: './index.html',
  })
  
const path = require('path')//导入 node.js 中专门操作路径的模块

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
  
module.exports = {
    devtool: 'eval-source-map',
    mode: 'production', // mode 用来指定构建模式。 可选值有 development 和 production
    //development : 开发使用，打包速度快
    //production: 上线时使用
    entry: path.join(__dirname,'./src/index.js'),
    output:{
        path: path.join(__dirname,'dist'),
        filename: 'js/main.js'
    },
    plugins: [htmlPlugin,new CleanWebpackPlugin(),],
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


