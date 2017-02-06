/**
 * 使用CSSstyle对象中的CSSrules属性
 * 但是不能是页面元素实际大小
 */
window.onload = function () {
    var box = document.getElementById('box');
    var sheet = document.styleSheets[0];
    var rule = (sheet.cssRules || sheet.rules)[0];
    alert(rule.style.width);
    alert(rule.style.height);
};