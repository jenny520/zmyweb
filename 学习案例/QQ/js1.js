var data=['Phone5','Ipad','三星笔记本','佳能相机','惠普打印机','谢谢参与','50元充值卡','1000元超市购物券'],
    timer=null,
    flag=0;
window.onload=function(){
	var play=document.getElementById('play'),
	    stop=document.getElementById('stop');

	//开始抽奖
	play.onclick=playFun;
	stop.onclick=stopFun;
	//开始键盘事件
	document.onkeyup=function(event){
		event=event||window.event;
       if(event.keyCode==13){
          if(flag==0){
             playFun();
             flag=1;
          }else{
             stopFun();
             flag=0;
          }
       }
	}
}
function playFun(){
	var play=document.getElementById('play');
	var title=document.getElementById('title');
	clearInterval(timer);
	timer=setInterval(function(){
      var random=Math.floor(Math.random()*data.length);
      title.innerHTML=data[random];
	},50);
    play.style.background='#8B8B8B';
}
function stopFun(){
	var play=document.getElementById('play');
	clearInterval(timer);
	timer=null;
	play.style.background='#0080FF';
}
