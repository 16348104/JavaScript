/**
 * Created by xdx on 2017/1/26.
 */
/*
function b(num) {
     num += 10;
    return num;
}
var num = 50;
alert(b(num));
alert(num);*/

/*
function box(obj) {
    obj.name = 'lee';

}
var p = new Object();
box(p);
// var p = new Object();
// p.name = 'k';
alert(p.name);                     //ECMAscript函数的参数都是局部变量，没有按引用传递
*/

var p = [1, 2, 3];
alert(p instanceof(Array));
var p2 = {};
alert(p2 instanceof (Object));
var p3 = /jk/ig;
alert(p3 instanceof (RegExp));
var str = new String("赵雪");      //当使用instanceof检查基本类型时会返回false
alert(str instanceof (String));