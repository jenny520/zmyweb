window.onload = function(){
	 var imgs = document.getElementsByTagName('img');
	 var wrap = document.getElementById('wrap');
	 document.onmouseover = function(e){
         var e = e||window.event;
         for(var i = 0;i<imgs.length;i++){
         	var x = imgs[i].offsetLeft + (imgs[i].offsetWidth)/2;
         	var y = imgs[i].offsetTop + wrap.offsetTop + (imgs[i].offsetHeight)/2;
         	var a = e.clientX - x;
         	var b = e.clientY - y;
         	var dis = Math.sqrt(a*a +b*b);
         	var scale = 1-dis/200;
         	if(scale<0.5){
         		scale = 0.5;
         	}
         	imgs[i].width = scale * 128;
         }
	 }
}