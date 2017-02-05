window.onload = function () {
    // alert(Node.ELEMENT_NODE);
    // alert(Node.TEXT_NODE);
    // alert(document);
    // alert(document.documentElement);
    // alert(document.nodeType);
    // alert(document.title);
    // alert(document.URL);
/*    var box = document.createElement('div');
    var t1 = document.createTextNode('Mr.');
    var t2 = document.createTextNode('Lee!');
    box.appendChild(t1);
    box.appendChild(t2);
    document.body.appendChild(box);
    box.normalize();
   */
    // alert(box.childNodes.length);
    document.getElementById('li').scrollIntoView();
    // var box= document.getElementById('d');
    // alert(box.children.length);
    var box= document.getElementById('box');
    alert(box.contains(box.firstChild));
    alert(box.compareDocumentPosition(box.firstChild));



};