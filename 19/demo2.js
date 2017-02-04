/**
 * Created by xyzhang on 2017/2/4.
 */
window.onload= function () {
    var box = document.getElementById("box");
    alert(box.childNodes);
    alert(box.childNodes.length);
    alert(box.childNodes[1].nodeValue);


    alert(box.firstChild.nodeValue);
    alert(box.lastChild.nodeValue);
    // alert(box.ownerDocument);
};