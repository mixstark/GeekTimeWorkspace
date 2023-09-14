function clickAlert() {
    alert('极客时间');
}

function clickPrint() {
    document.getElementsByTagName('body')[0].appendChild(document.createTextNode(prompt('请随便输入点什么东西吧')));
}
