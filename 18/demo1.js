function hasplugin(name) {
    var name = name.toLowerCase();

    for (var i = 0; i < navigator.plugins.length; i++) {
        if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
            return true;
        }
    }
    return false;
}

alert(hasplugin('java'));
alert(hasplugin('Flash'));