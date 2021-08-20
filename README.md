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

在终端运行如下的命令，安装 webpack 相关的两个包：

npm install webpack@5.42.1 webpack-cli@4.7.2 -D 

​	-D: 将节点信息放入dev节点下

​	dependencies: 开发和上线使用

​	devDependencies：开发阶段使用