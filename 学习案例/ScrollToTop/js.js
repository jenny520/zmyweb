window.onload=function(){

	var anode = document.getElementById("top");
    var timer = null;
    var toScroll = true;
    var clientHeight = document.documentElement.clientHeight;
    
    window.onscroll=function(){
    	var soTop = document.documentElement.scrollTop||document.body.scrollTop;
    	if(soTop>=clientHeight){
    		anode.style.display = "block";
    	}else{
    		anode.style.display = "none";
    	}
    	if(!toScroll){
    		clearInterval(timer);
    	}
    	toScroll=false;
    }
	anode.onclick=function(){

        timer = setInterval(function(){

        	var soTop = document.documentElement.scrollTop||document.body.scrollTop;
        	var speed = Math.floor(-soTop/5);
		    document.documentElement.scrollTop=document.body.scrollTop=soTop+speed;
		     toScroll=true;
		    console.log(soTop+speed);
		    if(soTop==0){
		    	clearInterval(timer);
		    }
        },50);
		   
	}
}