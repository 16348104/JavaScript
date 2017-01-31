/*
 //把匿名函数赋值给变量
 var b = function () {
 return 'lee';
 };
 alert(b());*/

/*
 (function () {                         //通过自我执行匿名函数
 alert('lee');
 })();
 */
/*var  box= (function () {                 //自我执行匿名函数返回值给变量
 return 'lee';
 })();
 alert(box);*/
/*alert((function () {
 return 'lee';
 })());*/
/*(function (age) {                     //自我执行匿名函数的传参
 alert(age);
 })(100);*/
/*function box() {
 return function () {             //闭包
 return 'lee';
 }
 }
 alert(box()());*/
function box() {                 //通过闭包返回局部变量
    var age = 100;
    return function () {
        return age;
    };
}
// alert(box()());
/*var b = box();                  //另一种调用匿名函数的方式
alert(b());


var age = 100;                   //使用全局变量累加，使用局部变量不能实现累加
function b() {
    age++;
}
alert(age);
b();
alert(age);
b();
alert(age);*/

//使用闭包从而累加
function box() {
    var age = 100;
    return function () {
        age++;
        return age;
    };
}
var b = box();
alert(b());
alert(b());
alert(b());
alert(b());
alert(b());




/*
 function counter() {
 var n = 0;
 return {
 count: function () {
 return n++;
 },
 reset: function () {
 n = 0;
 }
 };
 }
 var c = counter(), d = counter();
 alert(c.count());
 alert(d.count());
 c.reset();
 alert(c.count());
 alert(d.count());
 */
