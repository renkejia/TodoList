//获取窗口内部高度和宽度
var h = window.innerHeight;
var w = window.innerWidth;
//获取新建事件的标签
var addWindow = document.getElementsByClassName('add-window')[0];
var cancel = document.getElementById('cancel');
//获取新建窗口后的背景
var background = document.getElementsByClassName('background')[0];
background.style.height = h + 'px';
background.style.width = w + 'px';

background.onclick = function(){
    addWindow.classList.remove('show');
    addWindow.classList.add('hide');
}
cancel.onclick = function(){
    addWindow.classList.remove('show');
    addWindow.classList.add('hide');
}
window.onload = function(){
    var btnAdd = document.querySelector('#header__nav__btn-add');
    btnAdd.onclick = function(){
        createNew();
    }
}
//使add-window设置为显示
function createNew(){
    addWindow.classList.remove('hide');
    addWindow.style = '';
    addWindow.classList.add('show');
}
