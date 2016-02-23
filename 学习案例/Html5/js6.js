var video,btn_play,timer;
window.onload = function(){
	video = document.getElementsByTagName('video')[0];
	btn_play = document.getElementById('btn_play');
	var btn_pause = document.getElementById('btn_pause');
	var btn_mute = document.getElementById('btn_mute');
	var btn_volume = document.getElementById('volume');
    var seekbar = document.getElementById('seekbar');
    timer = document.getElementById('time');
    addEvent(btn_play,'click',doPlay);
    btn_pause.addEventListener('click',doPause,false);
    btn_mute.addEventListener('click',doMute,false);
    video.addEventListener('durationchange',initSeekBar,false);
    seekbar.addEventListener('change',changeTime,false);
    btn_volume.addEventListener('change',function(e){
    	var e = e || window.event;
    	myVol = e.target.value;
    	video.volume = myVol;
    	if(myVol==0){
            video.muted = true;
    	}else{
    		video.muted = false;
    	}
    	return false;
    },true);
    video.addEventListener('timeupdate',updateTime,false);
}
function addEvent(element,type,handler){
	if(element.addEventListener){
                 element.addEventListener(type,handler,false);
               }else if(element.attachEvent){
                 element.attachEvent('on'+type,handler);
               }else{
                 element['on'+type]=handler;
               }
}
function doPlay(){
	if(video.paused){
		video.play();
	}else if(video.play){
		video.currentTime = 0;
		video.play();
	}
}
function doPause(){
	if(video.play){
		video.pause();}
}
function doMute(){
	document.getElementById('volume').value = 0;
	video.muted = true;
}
function updateTime(){
    var sec = video.currentTime;
    var h = Math.floor(sec/3600);
    sec = sec%3600;
    var min = Math.floor(sec/60);
    sec = Math.floor(sec%60);
    if(sec.toString().length < 2){
        sec = '0' + sec;
    }
    if(min.toString().length < 2){
        min = '0' + min;
    }
    timer.innerHTML = h + ':' + min + ':' + sec;
    var bufferPosition = video.buffered.end(video.buffered.length-1);
    seekbar.min = video.startTime;
    seekbar.max = bufferPosition;
    seekbar.value = video.currentTime;
}
function initSeekBar(){
    seekbar.min = video.startTime;
    seekbar.max = video.duration + video.startTime;
}
function changeTime(){
    video.currentTime = seekbar.value;
}