/**
 * Created by zb on 2017/2/10.
 */
/*

 var box = 0;
 if (typeof box=='number') {
 alert(box);
 }
 */


/*
function getstring(url) {
    if (typeof url=='string') {
        var r = url.indexOf('?');        //indexOf返回符号所在字符串中的位置
        return r;                       //返回-1表示不存在
    } else {
        return '数据类型错误'
    }
}
//alert(getstring('fdghjk'));
alert(getstring('demo2.html?id=5'));
*/

var box = [6, 4, 9];
var a = null;

function sortArray(arr){
    if (arr instanceof Array) {
        arr.sort();
        return arr;
    } else {
        return'数据错误'
    }
}

//alert(sortArray(box));
alert(sortArray(a));

