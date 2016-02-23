window.onload = function(){
	var ta = document.getElementById('ta');
	if(localStorage.text){
		ta.value = localStorage.text;
	}
	var btn = document.getElementById('btn');
	btn.onclick = function(){
		localStorage.text = ta.value;
	}
}