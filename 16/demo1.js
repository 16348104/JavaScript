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
alert((function () {
    return 'lee';
})());
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
