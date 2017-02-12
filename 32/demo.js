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
/*
 var json = '[{"title":"a","num":"1"},{"title":"b","num":"1"}]';
 //alert(typeof JSON);
 var box = JSON.parse(json);
 alert(box[0].title);*/

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
        toJSON: function () {                 toJSON//区分大小写
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
var json = JSON.stringify(box, null, 4);
alert(json);