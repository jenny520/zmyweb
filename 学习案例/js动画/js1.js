window.onload=function(){
	var oDiv = document.getElementById('div2');
	oDiv.onmouseover = function(){
		startMove(100);
	}
	oDiv.onmouseout = function(){
		startMove(10);
	}
}
var alpha = 30;
var timer = null;
function startMove(iTarget){
	var oDiv = document.getElementById('div2');
    clearInterval(timer);
    timer = setInterval(function(){
    	var speed = 0;
    	if(alpha<iTarget){
    		speed = 10;
    	}else{
    		speed = -10;
    	}
    	if(alpha==iTarget){
    		clearInterval(timer);
    	}else{
    		alpha+=speed;
    		oDiv.style.filter = 'alpha(opacity:'+alpha+')';
    		oDiv.style.opacity = alpha/100;
    	}
    },50)
}