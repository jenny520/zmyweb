function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}
window.onload=function(){
	var timer=null;
	var lis=$('notice-tit').getElementsByTagName('li');
	var divs=$('notice-con').getElementsByTagName('div');
	for(var i=0;i<lis.length;i++){
		lis[i].id=i;
		if(lis.length!=divs.length){
			return ;
		}
		lis[i].onmouseover=function(){
			var that = this.id;
			if(timer){
				clearTimeout(timer);
				timer=null;
			}
            timer=setTimeout(function(){
               for(var j=0;j<lis.length;j++){
				lis[j].className='';
				divs[j].style.display='none';
			}
			lis[that].className='select';
			divs[that].style.display='block';
            },500)
		}
	}
}