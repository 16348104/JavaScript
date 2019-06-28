// document.documentElement.scrollTop = 10000;  //将滚动条移动到页面的底部
// document.documentElement.scrollTop=0  //将滚动条移动到页面的顶部
document.getElementById('nrStr').value = new Date().toLocaleString();
// document.getElementById('nrStr').value = ('11233');
// document.getElementsByTagName("p").value = ('11233');
// setTimeout(function () {
//     alert("Hello");
// }, 3000);
function f(Max) {
    return Math.floor(Math.random() * Max)
}
var audio = document.getElementsByTagName('audio').length;
console.log('audio个数：', audio);
var video = document.getElementsByTagName('video').length;
console.log('video个数：', video);
console.log("随机", f(video));
console.log("随机", f(audio));
var v = document.getElementsByTagName('video')[f(video)];
var a = document.getElementsByTagName('audio')[f(audio)];
v.play();
a.play();

// alert(video);

// video.play();
var b = document.getElementsByClassName('vjs-big-play-button')[0];
// b.play();
// document.getElementsByClassName('playli')[0].scrollTop = 1000;
document.getElementsByClassName('')
