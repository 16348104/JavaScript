/*
 var box = 'zhao';
 function setbox() {
 return 123;
 }
 alert(window.box);
 alert(window.setbox());*/

/*
if (true) {
    var b = 'Lee';                  //if没有局部作用域
}
alert(b);

for (var i=0;i<10;i++) {
    var p = 'zhao';                 //for没有局部作用域
}
alert(i);
alert(p);*/

var box = 'blue';
function getbox() {
    // var box = 'zhao';      //通过向上搜索作用域，如果加上var box = 'zhao'返回值为zhao
    return box;              //box代表全局
                              //
}
alert(getbox());
