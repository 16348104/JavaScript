/**
 * Created by xyzhang on 2017/1/23.
 */
function box(obj) {
    if (obj.name != undefined)
        alert(obj.name);

    if (obj.age != undefined)
        alert(obj.age);

    if (obj.height != undefined)
        alert(obj.height);
    
    if (obj.love != undefined) {
        alert(obj.love);
    }
}
var obj = {            //对象
    name: "赵雪",
    age: 34,
    height: 160,
    addres: "南长街"

};

box(obj);