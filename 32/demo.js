/*
 /!**
 * Created by dell on 2017/2/12.
 *!/

 //json数组
 '{"name":"lee", "age":100}'

 //json对象
 '["100",true,"lee"]'

 //json常用结构
 [
 {
 "title" : "a",
 "num" : 1
 },
 {
 "title" : "b",
 "num" : 1
 },
 {
 "title" : "c",
 "num" : 1
 }
 ]*/

var json = '[{"title":"a","num":"1"},{"title":"b","num":"5"}]';
//alert(typeof JSON);
var box = JSON.parse(json, function (key, val) {
    if (key == 'num') {
        return val + '岁';
    } else {
        return val;
    }
});
//alert(box[1].num);

var box;
box = [
    {
        title: 'a',
        num: 1,
        height: 166,
        toJSON: function () {
            return this.height;
        }
    },
    {
        title: 'b',
        num: 1,
        height: 123,
        toJSON: function () {
            toJSON//区分大小写
            return this.height;
        }
    }
];
//var json = JSON.stringify(box, null, 4);
//var json = JSON.stringify(box, ['title','height'], 4);
/*var json = JSON.stringify(box, function(k,v)
 {
 if (k == 'title') {
 return 'Mr.' + v;
 } else {
 return v;
 }
 },4);*/
//var json = JSON.stringify(box, null, 4);
//alert(json);

function createXHR() {
    if (typeof XMLHttpRequest != 'undefined') {
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != 'undefined') {
        var version = [
            'MSXML2.XMLHttp.6.0',
            'MSXML2.XMLHttp.3.0',
            'MSXML2.XMLHttp'
        ];
        for (var i = 0; version.length; i ++) {
            try {
                return new ActiveXObject(version[i]);
            } catch (e) {
                //跳过
            }
        }
    } else {
        throw new Error('您的系统或浏览器不支持XHR对象！');
    }
}
addEvent(document, 'click', function () {
    var xhr = createXHR();
    var url = 'demo.json?rand=' + Math.random();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var box = JSON.parse(xhr.responseText);
                alert(box);
            } else {
                alert('获取数据错误')
            }
        }
    };
    xhr.open('get',url,true);
    xhr.send(null);
});