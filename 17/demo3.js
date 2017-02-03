/**
 * Created by dell on 2017/2/3.
 */
/*setTimeout(function () {
 alert('lee');
 },3000);*/
/*var b=setTimeout(function () {                 //返回值是
 alert('lee');
 },3000);*/
//clearTimeout(b);

/*
 setInterval(function () {
 alert('lee');
 },1000);*/
// alert(history.length);
function back(){
    history.back();
}
function forward() {
    history.forward()
}
alert(forward());
//使用超时调用模拟定时器
/*
var num=0;
var max = 5;
function b() {
    ++num;
    document.getElementById('a').innerHTML += num;
    if (num == max) {
        alert('5秒到了!');
    } else {
        setTimeout(b, 1000);
    }
}
setTimeout(b, 1000);
*/
