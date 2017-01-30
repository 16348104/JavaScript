/**
 * Created by xyzhang on 2017/1/29.
 */
//工厂模式
function createObject(name,age) {
    var obj = new Object();
    obj.name = name;
    obj.age =age;
    obj.run = function () {
        return this.name + this.age + 'run......';
    };
    return obj;
}
var a = createObject('lee',28);
var b = createObject('kkk', 66);
// alert(a.run());
// alert(b.run());
/*
alert(typeof a);
alert(typeof b);*/
alert(a instanceof Object);
alert(b instanceof Object);
