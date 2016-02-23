// window.onload=function(){
// 	var ulnode = document.getElementsByTagName('ul')[0];
// 	var anode = ulnode.getElementsByTagName('a');
// 	for(var i = 0;i<anode.length;i++){
// 		anode[i].onmouseover=function(){
// 			clearInterval(this.time);
// 			var This =this;
// 			this.time=setInterval(function(){
// 			   This.style.width = This.offsetWidth+8+'px';
// 				if(This.offsetWidth>=140){
// 					clearInterval(this.time);
// 				}
// 			},30)
// 		}
// 		anode[i].onmouseout=function(){
// 			clearInterval(this.time);
// 			var This = this;
// 			This.time=setInterval(function(){
// 				This.style.width = This.offsetWidth-8+'px';
// 				if(This.offsetWidth<=120){
// 					This.style.width = '120px';
// 					clearInterval(This.time);
// 				}
// 			},30)
// 		}
// 	}
// }

