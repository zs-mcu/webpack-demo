//使用es6的导入语法
import $ from 'jQuery'

//导入样式
//如果某个模块中接收到的结果为undefined，就不需要接收了 
import './css/index.css'

import './css/index.less'

//导入图片: 获取到的logo是一个base64的字符串
import logo from './images/logo.jpg'
//讲这个字符串放到属性中
$('.box').attr('src',logo)

//定义jQuery的入口函数
$(function(){
    //实现各行变色
    $('li:odd').css('background-color','red')
    $('li:even').css('background-color','pink')
})





//定义名为info的装饰器
function info(target){
    //为目标加静态属性 info
    target.info = 'Person info'
  }
  
  // 为 Person 类应用info装饰器
  @info
  class Person{}
  
  // 打印 Person 的静态属性 info
  conole.log(Person.info)

