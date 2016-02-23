// var div1=document.getElementById('pic1');
// div1.onmousemove=function(){
// 	Hmouseove(this);
// 	// console.log(this);
// }
// div1.onmouseout=function(){
// 	Hmouseout(this);
// }
// function Hmouseove(element){
// 	var anode=element.getElementsByTagName('a')[0];
// 	anode.style.top=0+'px';
// }
// function Hmouseout(element){
// 	var anode=element.getElementsByTagName('a')[0];
// 	anode.style.top=160+'px';
// }
// function showMeg(index){
// var Div = document.getElementById('pic'+index);
// Div.onmouseover=showAtop;
// Div.onmouseout=hideAtop;
// function showAtop(){
//     Div.getElementsByTagName('a')[0].style.top=0+'px';
//    }
// function hideAtop(){
// 	Div.getElementsByTagName('a')[0].style.top=160+'px';
// }
// }
// showMeg(1);
// showMeg(2);
// showMeg(3);
function showDetail(){
	var Divs = document.getElementById('picList').getElementsByTagName('div');
	var divHeight=160;
	for(var i = 0;i < Divs.length;i++){
		Divs[i].onmouseover=showAtop;
		Divs[i].onmouseout=hideAtop;
	}
	function showAtop(){
		this.getElementsByTagName('a')[0].style.top=0+'px';
	}
	function hideAtop(){
		this.getElementsByTagName('a')[0].style.top=divHeight+'px';
	}
}
showDetail();

