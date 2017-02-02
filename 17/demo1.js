/*
// confirm('qing');
/!*

if(confirm('请选择!')) {
    alert('确定');
}else {
    alert('取消');
}*!/
var b = prompt('请输入一个数字', 0);

if (b!=null) {
    alert(b);

}
*/
// open('http://www.163.com','_parent);//_parent本窗口打开

//open本身返回Window对象
// var box=open('http://www.163.com','163');

// box.alert('open返回子窗口的Window对象,表示子窗口对象');

open('opener.html','_blank','height=200,width=200,top=400,left=500');