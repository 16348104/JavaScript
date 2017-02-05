/**
 * Created by xyzhang on 2017/2/5.
 */
window.onload = function () {
    var sheet = document.styleSheets[0];
    // alert(sheet.cssRules);
    var rules = sheet.cssRules || sheet.rules;
    // alert(rules.length);
    var r1 = rules[0];
    alert(r1.cssText);
    alert(r1.selectorText);
};