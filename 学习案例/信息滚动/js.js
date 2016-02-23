window.onload = function(){
	var moocBox = document.getElementById('moocBox');
	var con1 = document.getElementById('con1');
	var con2 = document.getElementById('con2');
	con2.innerHTML = con1.innerHTML;
	function scroll(){
		if(moocBox.scrollLeft >=con1.offsetWidth){
			moocBox.scrollLeft = 0;
		}else{
			moocBox.scrollLeft++;
		}  
	}
	var myScroll = setInterval(scroll,20);
	moocBox.onmouseover = function(){
		clearInterval(myScroll);
	}
	moocBox.onmouseout = function(){
		myScroll = setInterval(scroll,20);
	}
}