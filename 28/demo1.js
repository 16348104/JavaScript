
/*
try {
   window.abc();
} catch (e) {
    alert(e.name);
    alert(e.message);
}
*/
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
box();