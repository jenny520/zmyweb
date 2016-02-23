window.onload = function(){
	var area = document.getElementById('moocBox');
	var con1 = document.getElementById('con1');
	con1.innerHTML+=con1.innerHTML;
    area.scrollTop =0;
	var liHeight = 24;
	var myScroll = null;
	var speed = 50;
	var delay = 2000;
	function startMove(){
        area.scrollTop++;
		myScroll = setInterval(scroll,speed);
	}
	function scroll(){
		if(area.scrollTop % liHeight == 0){
            clearInterval(myScroll);
            setTimeout(startMove,delay);
	}else{
		area.scrollTop++;
		if(area.scrollTop >= area.scrollHeight/2){
			area.scrollTop = 0;
		}
	}
}
	setTimeout(startMove,delay);
}