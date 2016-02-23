// window.onload=function(){
// 	var lis = document.getElementsByTagName('li');
// 	for(var i = 0;i<lis.length;i++){
// 		lis[i].timer = null;
// 		lis[i].onmouseover = function(){
// 			// startMove(this,400,'height');
// 			startMove(this,100,'opacity');
// 		}
// 		lis[i].onmouseout = function(){
// 			// startMove(this,100,'height');
// 			startMove(this,30,'opacity');
// 		}
// 	}
// }
function startMove(obj,json,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        for(var attr2 in json){
        var flag;
    	var speed = 0;
    	var icurr = 0;
    	if(attr2 == 'opacity'){
    		icurr = Math.round(parseFloat(getStyle(obj,attr2))*100);
    	}else{
    		icurr = parseInt(getStyle(obj,attr2));
    	}
    	speed = (json[attr2] - icurr)/8;
    	speed = speed>0?Math.ceil(speed):Math.floor(speed);
    	if(icurr!=json[attr2]){
    		// clearInterval(obj.timer);
      //       if(fn){
      //           fn();
      //       }
         flag = false;
    	}
        if(attr2 == 'opacity'){
    			obj.style.filter = 'alpha(opacity:'+(icurr+speed)+')';
    			obj.style.opacity = (icurr+speed)/100;
    		}
        else{
    		obj.style[attr2] = icurr+speed+'px';
        }
    }
    },50)
}
function getStyle(obj,arr){
	if(obj.currentStyle){
		return obj.currentStyle[arr];
	}else{
		return getComputedStyle(obj,false)[arr];
	}
}