/**
 * Created by dell on 2017/1/25.
 * 函数本身作为参数传递
 */
function box(sum, num) {
    return sum(num);
}
function sum(num) {
    return num + 10;
}
var r = box(sum, 10);
alert(r);
