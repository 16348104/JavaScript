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

var box = [
    {
        title: 'a',
        num: 1
    },
    {
        title: 'b',
        num: 1
    }
];
var json = JSON.stringify(box);
alert(json);