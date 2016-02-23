var setting_con,username_con;
function $(id){
	return document.getElementById(id);
}
function addEvent(element,event,callbackFunction){
	if(element.addEventListener){
		element.addEventListener(event,callbackFunction,false);
	}else if(element.attachEvent){
		element.attachEvent('on'+event,callbackFunction);
	}
}

window.onload = function(){
    var title1 = $('title1');
    var title2 = $('title2');
    var title3 = $('title3');
    var title4 = $('title4');
    var prevTop = $('prevTop');
    var nextTop = $('nextTop');
    var picBox = $('picBox');
    var nav_dis = $('nav_dis');
    var content_des = $('content_des');
    var pic_view = $('pic_view');
    var span_btn = $('span_btn');
    var mod18 = $('mod18');
    var anodes = span_btn.getElementsByTagName('a');
    var lis = nav_dis.getElementsByTagName('li');
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
    var channel_con = $('channel_con');
    var ChangP = $('ChangP');
    var snodes = channel_con.getElementsByTagName('span');
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
        function move(offset){
        if (offset == 0) {
            return;
                }
        var time = 300;
        var inteval = 10;
        var speed = offset/(time/inteval);
        var top = parseInt(getStyle(content_des,'top')) + offset;
            var moveto = function (){
                    if ((speed > 0 && parseInt(getStyle(content_des,'top')) < top) || (speed < 0 && parseInt(getStyle(content_des,'top')) > top)) {
                        content_des.style.top = parseInt(getStyle(content_des,'top')) + speed + 'px';
                        setTimeout(moveto, inteval);
                    }
                    else {
                        content_des.style.top = top + 'px';
                        if(top>200){
                            content_des.style.top = -300 * len1 + 'px';
                        }
                        if(top<(-300 * len1)) {
                            content_des.style.top = '0px';
                        }
                    }
                }
                moveto();
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
                    nextImg();
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }
            function nextImg(){
                var shopC = $('shop_content'+count);
                $('shop_content1').style.left = -480+'px';
                $('shop_content2').style.left = -480+'px';
                $('shop_content3').style.left = -480 + 'px';
                $('shop_content4').style.left = -480 + 'px';
                $('shop_content5').style.left = -480 + 'px';
                shopC.style.left = 0;
                for(var i = 0;i<anodes.length;i++){
                    if(anodes[i].className = 'big_btn'){
                        anodes[i].className = '';
                    }
                }
                anodes[count-1].className = 'big_btn';
                count++;
                if(count>5){
                    count = 1;
                }
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
     for(var i = 0;i<lis.length;i++){
          lis[i].myindex = i;
          lis[i].onclick = function(){
            var Index = this.myindex;
            var offset = -300*(Index - curIndex+1);
            move(offset);
            curIndex = Index+1;
            for(var j = 0;j<lis.length;j++){
                lis[j].className = '';
            }
            this.className = 'menu';
          }
     }

      picBox.onmouseover = stop;
      picBox.onmouseout = play;
      play();

    addEvent(title1, "mouseover", function(){
    	setTimeout(function(){
           showToolTip(title1,'宝箱',35,14);
    	},150);
});
    addEvent(title2, "mouseover", function(){
    	setTimeout(function(){
    		showToolTip(title2,'换肤',35,14);
    	},150);
});
    addEvent(title3, "mouseover", function(){
    	setTimeout(function(){
    		showToolTip(title3,'设为首页',50,14);
    	},150);
});
    addEvent(title4, "mouseover", function(){
    	setTimeout(function(){
    		showToolTip(title4,'消息',35,14);
    	},150);
});
    var setting = $('setting');
    setting_con = $('setting_con');
    var username = $('username');
    username_con = $('username_con');
    setting.onmouseover = function(){
    	show(setting_con);
    }
    setting.onmouseout = function(){
    	hide(setting_con);
        setting_con.onmouseover = function(){
            show(this);
        }
        setting_con.onmouseout = function(){
            hide(this);
        }
        setting.onmouseout = function(){
            hide(setting_con);
        }
    }
    username.onmouseover = function(){
    	show(username_con);
    }
    username.onmouseout = function(){
        username_con.onmouseover = function(){
            show(this);
        }
        username_con.onmouseout = function(){
            hide(this);
        }
        username.onmouseout = function(){
            hide(username_con);
        }
    }
}
function getStyle(obj, attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
        }else{
        return getComputedStyle(obj, false)[attr];
        }
}
function show(obj){
      obj.style.display = 'block'; 
}
function hide(obj){
	obj.style.display = 'none';
}
function showToolTip(obj, html, width, height){
	if(obj!==null){
		var toolTipBox;
		toolTipBox = document.createElement("div");
		toolTipBox.className ='toolTip';
		toolTipBox.innerHTML = html;
		obj.appendChild(toolTipBox);
		toolTipBox.style.width = width? width+"px":"auto";
		toolTipBox.style.height = height? height+"px":"auto";
		toolTipBox.style.position = 'absolute';
	    var left = obj.offsetLeft;
		var top = obj.offsetTop + obj.offsetHeight + 13;
		toolTipBox.style.left = left + 'px';
		toolTipBox.style.top = top +'px';
		addEvent(obj,'mouseout',function(){
        		toolTipBox.style.display='none';
        });
}
}