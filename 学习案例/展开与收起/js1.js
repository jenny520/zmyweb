var h=0;
function addH(){
	if(h<300){
		h+=5;
		document.getElementById('pn').style.height=h+'px';
	}else{
		return ;
	}
	setTimeout('addH()',30);
}
window.onload=function showAds(){
	addH();
	setTimeout('subH()',5000);
}
function subH(){
	if(h>0){
		h-=5;
		document.getElementById('pn').style.height=h+'px';
	}else{
		document.getElementById('pn').style.display='none';
		return ;
	}
	setTimeout('subH()',30);
}