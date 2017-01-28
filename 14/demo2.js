function select(start, end) {
    var total = end - start + 1;
    return Math.floor(Math.random() * total + start);
}
for (var i = 0; i < 10; i++) {
    document.write(select(5, 10));     //5~10之间的随机数
    document.write('<br>');
}