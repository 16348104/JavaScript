/**
 * 使用CSSstyle对象中的CSSrules属性
 * 但是不能是页面元素实际大小
 */
window.onload = function () {
    var box = document.getElementById('box');
    var sheet = document.styleSheets[0];
    var rule = (sheet.cssRules || sheet.rules)[0];
    /*alert(rule.style.width);
    alert(rule.style.height);*/
    alert(box.clientHeight);
    alert(box.clientWidth);
    //返回number类型,不包括外边距,边框,滚动条大小
    //内边距会增加到返回值中
};