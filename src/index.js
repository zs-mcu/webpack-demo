//使用es6的导入语法
import $ from 'jQuery'

//定义jQuery的入口函数
$(function(){
    //实现各行变色
    $('li:odd').css('background-color','red')
    $('li:even').css('background-color','pink')
})