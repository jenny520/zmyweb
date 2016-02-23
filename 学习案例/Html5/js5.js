var txt,addBtn,num;
window.onload = function(){
	txt = document.getElementById('txt');
	if(sessionStorage.num){
		num = sessionStorage.num;
	}else{
		num = 0;
	}
	addBtn = document.getElementById('addBtn');
    addBtn.onclick = function(){
    	num++;
    	sessionStorage.num = num;
    	showNum();
    }
}
function showNum(){
	txt.innerHTML = num;
}