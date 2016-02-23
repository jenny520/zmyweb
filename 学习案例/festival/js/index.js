var music = document.getElementById('music');
var rotate = document.getElementById('rotate');
var audio = document.getElementsByTagName('audio')[0];
audio.addEventListener('ended',function(){
	rotate.setAttribute('class','');
},false);
music.addEventListener('touchstart',function(){
	if(audio.paused){
		audio.play();
        rotate.setAttribute('class','play');
        rotate.style.animationPlayState = 'running';
        rotate.style.webkitAnimationPlayState = 'running';
	}else{
        audio.pause();
        // rotate.setAttribute('class','');
        rotate.style.animationPlayState = 'paused';
        rotate.style.webkitAnimationPlayState = 'paused';
	}
},false);