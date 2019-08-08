// document.documentElement.scrollTop = 10000;  //将滚动条移动到页面的底部
// document.documentElement.scrollTop=0  //将滚动条移动到页面的顶部
document.getElementById('nrStr').value = new Date().toLocaleString();
// document.getElementById('nrStr').value = ('11233');
// document.getElementsByTagName("p").value = ('11233');
// setTimeout(function () {
//     alert("Hello");
// }, 3000);
var aud = document.getElementsByTagName('audio').length;
console.log('audio个数：', aud);
var vid = document.getElementsByTagName('video').length;
console.log('video个数：', vid);
function f_Ran(Max) {
    return Math.floor(Math.random() * Max)
}
console.log("视频随机", f_Ran(vid));
console.log("音频随机", f_Ran(aud));
var v = document.getElementsByTagName('video')[f_Ran(vid)];
v.play();
var a = document.getElementsByTagName('audio')[f_Ran(aud)];
a.play();



// video.play();
var b = document.getElementsByClassName('vjs-big-play-button')[0];
// b.play();
// document.getElementsByClassName('playli')[0].scrollTop = 1000;
document.getElementsByClassName('')
