/**
 * Created by dell on 2017/2/3.
 */
/*
 alert(window.innerWidth);
 //alert(window.innerHeight);*/
//alert(document.compatMode);
//alert(typeof document.compatMode);

//取得各自浏览器可是窗口的大小
var width = window.innerWidth;
var height = window.innerHeight;

if (typeof width !== 'number') {
    if (document.compatMode == 'CSS1Compat') {                             //返回CSS1Compat为标准摸式
        width = document.documentElement.clientWidth;
        height = document.documentElement.clientHeight;
    } else {                                                              //非标准模式采用body
        width = document.body.clientWidth;
        height = document.body.clientHeight;
    }
}
alert(width);
alert(height);