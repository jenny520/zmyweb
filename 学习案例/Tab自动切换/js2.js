function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}

window.onload=tab;

function tab(){
	var index=0;
    var timer=null;
    var lis=$('notice-tit').getElementsByTagName('li');
    var divs=$('notice-con').getElementsByTagName('div');
    //添加定时器，改变当前的位置
    for(var i=0;i<lis.length;i++){
    	lis[i].id=i;
    	lis[i].onmouseover=function(){
           clearInterval(timer);
           changeOption(this.id);
    	}
        lis[i].onmouseout=function(){
    	index=this.id;
        timer=setInterval(autoPlay,1000);
       }
     }
  if(timer){
    clearInterval(timer);
    timer=null;
  } 
   timer=setInterval(autoPlay,1000);
   function autoPlay(){
           index++;
           if(index>=lis.length){
       	   index=0;
         }
        changeOption(index);
   }
}
function changeOption(curIndex){
	var lis=$('notice-tit').getElementsByTagName('li');
    var divs=$('notice-con').getElementsByTagName('div');
   for(var j=0;j<lis.length;j++){
       	   lis[j].className='';
       	   divs[j].style.display='none';
        }
    lis[curIndex].className='select';
    divs[curIndex].style.display='block';
}