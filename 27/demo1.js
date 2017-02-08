/**
 * Created by dell on 2017/2/7.
 */
//跨浏览器添加事件
/*
function addEvent(obj,type,fn) {
    if (obj.addEventListener) {
        obj.addEventListener(type, fn,false);
    } else if(obj.attachEvent) {
        obj.attachEvent('on' + type, fn);
    }
}

//跨浏览器移除事件
function removeEvent(obj,type,fn) {
    if (obj.removeEventListener) {
        obj.removeEventListener(type, fn,false);
    } else if(obj.detachEvent) {
        obj.detachEvent('on' + type, fn);
    }
}
 addEvent(window, 'load', function () {
 // var fm = document.getElementById('myform');
 var fm = document.getElementsByTagName('form')[0];
 alert(fm);

 });*/

function addEvent(obj,type,fn) {
    if (obj.addEventListener) {
        obj.addEventListener(type, fn,false);
    } else if(obj.attachEvent) {
        obj.attachEvent('on' + type, fn);
    }
    
}

addEvent(window, 'load', function () {
    var fm = document.getElementById('myform');
    var city = fm.elements['city'];
    var info = fm.elements['info'];
    addEvent(city, 'click', function () {
        info.appendChild(this.options[city.selectedIndex]);
    });
});
