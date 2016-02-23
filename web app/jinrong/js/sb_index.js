$(document).ready(function(){
	var index = 4;
	var time = null;
	function setTime(){
        index--;
        if(index > 0){
        	$('.time').text(index);
        }else{
        	if(time){
        		clearInterval(time);
        	}
        	window.location.href='index.html';
        }
	}
	time = setInterval(function(){
		setTime();
	},1000);
})