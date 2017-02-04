/*window.onload = function () {
    if (document.getElementById) {
        var box = document.getElementById('box');
        alert(box);
        alert(box.tagName);   //获取元素节点的标签名
        alert(box.innerHTML);  //获取元素节点的文本内容,包括标签

    }
    else {
        alert('请更换浏览器');
    }
};*/

window.onload=function () {
    var box = document.getElementById('d');
    alert(box.id);
    alert(box.className);
    alert(box.title);
    alert(box.style);
    alert(box.style.color);


}