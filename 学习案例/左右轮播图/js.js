function $(id){
	return document.getElementById(id);
}
window.onload = function(){
	var prevTop = $('prevTop');
    var nextTop = $('nextTop');
    var picBox = $('picBox');
    // var nav_dis = $('nav_dis');
    var content_des = $('content_des');
    var pic_view = $('pic_view');
    // var span_btn = $('span_btn');
    var mod18 = $('mod18');
    // var anodes = span_btn.getElementsByTagName('a');
    // var lis = nav_dis.getElementsByTagName('li');
    var cf = picBox.getElementsByTagName('ul')[0];
    var listBox = $('listBox');
    var imgs = listBox.getElementsByTagName('img');
    var spans = listBox.getElementsByTagName('span');
    var index = 1;
    var count = 1;
    var curIndex = 1;
    var len = 8;
    var len1 = 4;
    var alpha = 40;
    var animated = false;
    var interval = 3000;
    var timer;
    var curTimer;
    mod18.onmouseover = function(){
        prevTop.style.display = 'block';
        nextTop.style.display = 'block';
    }
    mod18.onmouseout = function(){
        prevTop.style.display = 'none';
        nextTop.style.display = 'none';
    }
    function animate(offset,attr){
      if (offset == 0) {
            return;
                }
        animated = true;
        var time = 300;
        var inteval = 10;
        var speed = offset/(time/inteval);
        var left = parseInt(getStyle(cf,'left')) + offset;
        if(attr=='left'){
        var go = function (){
                    if ((speed > 0 && parseInt(getStyle(cf,'left')) < left) || (speed < 0 && parseInt(getStyle(cf,'left')) > left)) {
                        cf.style.left = parseInt(getStyle(cf,'left')) + speed + 'px';
                        setTimeout(go, inteval);
                    }
                    else {
                        cf.style.left = left + 'px';
                        if(left>-200){
                            cf.style.left = -400 * len + 'px';
                        }
                        if(left<(-400 * len)) {
                            cf.style.left = '-400px';
                        }
                        animated = false;
                    }
                }
                go();
            }
        }
     function showImg() {
                for (var i = 0; i < imgs.length ; i++) {
                    if( imgs[i].className == 'on'){
                        imgs[i].className = '';
                        spans[i].style.zIndex = 3;
                        break;
                    }
                }
                  spans[index-1].style.zIndex = -3;
                  imgs[index - 1].className = 'on';
            }
    function play() {
        timer = setTimeout(function () {
            nextTop.onclick();
            play();
            }, interval);
        }
    function stop() {
        clearTimeout(timer);
    }
    nextTop.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 8) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-400,'left');
                showImg();
            }
    prevTop.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 8;
                }
                else {
                    index -= 1;
                }
                animate(400,'left');
                showImg();
            }
    for (var i = 0; i <spans.length; i++) {
                spans[i].Index = i;
                spans[i].onclick = function () {
                    if (animated) {
                        return;
                    }
                    var myIndex = this.Index;
                    var offset = -400 * (myIndex - index+1);
                    animate(offset,'left');
                    index = myIndex+1;
                    showImg();
                }
                spans[i].onmouseover = function(){
                    var tha = this;
                    curTimer = setInterval(function(){
                      Transition(tha,0);
                    },50)
                }
                spans[i].onmouseout = function(){
                    var tha = this;
                    curTimer = setInterval(function(){
                        Transition(tha,80);
                    },50);
                }
     }
     function Transition(obj,iTarget){
        if(alpha < iTarget){
            speed = 10;
        }else{
            speed = -10;
        }
        if(alpha == iTarget){
            clearInterval(curTimer);
        }else{
            alpha += speed;
            obj.style.filter = 'alpha(opacity:'+alpha+')';
            obj.style.opacity = alpha/100;
        }
     }
    picBox.onmouseover = stop;
    picBox.onmouseout = play;
    play();
}
function getStyle(obj, attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
        }else{
        return getComputedStyle(obj, false)[attr];
        }
}