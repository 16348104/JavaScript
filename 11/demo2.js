var color = '红的';
var b = {
    color: '绿的'
};
function saycolor() {
    alert(this.color);
}
// saycolor();                //全局的
//使用call实现冒充对象
// saycolor.call(window);
// saycolor.call(this);         //this相当于Window
saycolor.call(b);           //冒充b对象
