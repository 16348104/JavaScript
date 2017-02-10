/*

/!*
try {
   window.abc();
} catch (e) {
    alert(e.name);
    alert(e.message);
}
*!/
function box() {
    try {
        var a = {};
        window.ahjhjhjh();
    } catch (e) {
        alert(e);
    } finally {
        alert('始终执行！');
        a = null;
    }
}
box();*/
try {
    //new 10;
} catch (e) {
    if (e instanceof TypeError) {
        alert('错误类型：' + e.message);
    } else {
        alert('未知错误'+e);
    }
}