var list,btns;
window.onload = function(){
	var container = document.getElementById('container');
    list = document.getElementById('list');
	var btns = document.getElementById('button').getElementsByTagName('span');
	var prev = document.getElementById('pre');
	var next = document.getElementById('next');
	var index = 1;
	next.onclick = function(){
        animate(-600);
	}
	prev.onclick = function(){
		animate(600);
	}
	for(var i = 0;i<btns.length;i++){
		btns[i].onclick = function(){
			var myindex = this.getAttribute('index');
			
		}
	}
}
function showButton(){
	for(var i = 0;i<btns.length;i++){
          if(btns[i].className == 'on'){
          	btns[i].className = '';
          }
	}
	btns[index-1].className = 'on';
}
function animate(offset){
    var curLeft = getStyle(list,'left');
    var newLeft = parseInt(curLeft) + offset;
    if(newLeft<=-3000){
    	offset = 2400;
    }else if(newLeft>=600){
    	offset = -2400;
    }
    list.style.left = parseInt(curLeft) + offset + 'px';
}
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}