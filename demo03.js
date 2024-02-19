//es5之前定义变量var(variable)
var i = 10;
var j = 1.2;
var k = "adj好滴ahd";
document.write(i);
document.write(j);
document.write(k);

//用var定义变量具有作用域问题，es6之后改用let
let l = `张三`;
document.write(l);
document.write(typeof(l));
//定义常量
const PI = 3.1415926;
document.write(PI);
document.write(typeof(PI));