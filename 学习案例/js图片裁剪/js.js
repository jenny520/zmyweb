window.onload = function(){
document.onselectstart=new Function('event.returnValue=false;');
$( "#main" ).draggable({ containment: 'parent' ,drag: setChoice,stop:setPreview});
var rightNode = document.getElementById('right');
var upNode = document.getElementById('up');
var downNode = document.getElementById('down');
var leftNode = document.getElementById('left');
var leftUp = document.getElementById('leftUp');
var rightUp = document.getElementById('rightUp');
var leftDown = document.getElementById('leftDown');
var rightDown = document.getElementById('rightDown');
var mainNode = document.getElementById('main');
var ifKeyDown = false;
var contact = '';
//鼠标按下事件
rightNode.onmousedown = function(e){
    e = e || window.event;
    if(e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancelBubble = true;
    }
    ifKeyDown = true;
    contact = 'right';
}
upNode.onmousedown = function(e){
	e = e || window.event;
	if(e.stopPropagation){
    	e.stopPropagation();
    }else{
    	e.cancelBubble = true;
    }
	ifKeyDown = true;
	contact = 'up';
}
leftNode.onmousedown = function(e){
	e = e || window.event;
	if(e.stopPropagation){
    	e.stopPropagation();
    }else{
    	e.cancelBubble = true;
    }
	ifKeyDown = true;
	contact = 'left';
}
downNode.onmousedown = function(e){
	e = e || window.event;
	if(e.stopPropagation){
    	e.stopPropagation();
    }else{
    	e.cancelBubble = true;
    }
	ifKeyDown = true;
	contact = 'down';
}
rightDown.onmousedown = function(e){
	e = e || window.event;
	if(e.stopPropagation){
    	e.stopPropagation();
    }else{
    	e.cancelBubble = true;
    }
	ifKeyDown = true;
	contact = 'rightDown';
}
leftDown.onmousedown = function(e){
	e = e || window.event;
	if(e.stopPropagation){
    	e.stopPropagation();
    }else{
    	e.cancelBubble = true;
    }
	ifKeyDown = true;
	contact = 'leftDown';
}
rightUp.onmousedown = function(e){
	e = e || window.event;
	if(e.stopPropagation){
    	e.stopPropagation();
    }else{
    	e.cancelBubble = true;
    }
	ifKeyDown = true;
	contact = 'rightUp';
}
leftUp.onmousedown = function(e){
	e = e || window.event;
	if(e.stopPropagation){
    	e.stopPropagation();
    }else{
    	e.cancelBubble = true;
    }
	ifKeyDown = true;
	contact = 'leftUp';
}
//鼠标释放
window.onmouseup = function(e){
	e = e || window.event;
	ifKeyDown = false;
}
//鼠标移动事件
window.onmousemove = function(e){
	if(ifKeyDown){
		switch(contact){
			case 'right':
			   rightMove(e);
			   break;
			case 'up':
			   upMove(e);
			   break;
			case 'left':
			   leftMove(e);
			   break;
			case 'down':
			   downMove(e);
			   break;
			case 'rightUp':
			   rightMove(e);
        	   upMove(e);
        	   break;
        	case 'rightDown':
        	   rightMove(e);
        	   downMove(e);
        	   break;
        	case 'leftDown':
        	   leftMove(e);
        	   downMove(e);
        	   break;
        	case 'leftUp':
        	   leftMove(e);
        	   upMove(e);
        	   break;
		}
        setChoice();
        setPreview();
    }
}
//right移动
function rightMove(e){
	e = e || window.event;
    var x = e.clientX;//获取网页的x坐标
    var widthBefore = mainNode.offsetWidth - 2;//元素在移动之前的宽度
    var addWidth = x - widthBefore - getPosition(mainNode).left;//增加的宽度
    mainNode.style.width = widthBefore + addWidth + 'px';
}
//up移动
function upMove(e){
	e = e || window.event;
    var y = e.clientY;//获取网页的y坐标
    var heightBefore = mainNode.offsetHeight -2;//元素在移动之前的高度
    var addHeight = getPosition(mainNode).top-y;//增加的高度
    mainNode.style.height = heightBefore + addHeight + 'px';
    mainNode.style.top = mainNode.offsetTop - addHeight + 'px';
}
//down移动
function downMove(e){
    e = e || window.event;
    var y = e.clientY;
    var heightBefore = mainNode.offsetHeight -2;
    var addHeight = y - heightBefore;
    mainNode.style.height = heightBefore + addHeight + 'px';
}
//left移动
function leftMove(e){
	e = e || window.event;
    var x = e.clientX;
    var widthBefore = mainNode.offsetWidth -2;
    var addWidth = getPosition(mainNode).left - x;
    mainNode.style.width = widthBefore + addWidth + 'px';
    mainNode.style.left = mainNode.offsetLeft - addWidth + 'px';
}
//设置可见区域的宽度和高度
function setChoice(){
	var top = mainNode.offsetTop;
	var left = mainNode.offsetLeft;
	var right = mainNode.offsetLeft + mainNode.offsetWidth;
	var bottom = mainNode.offsetTop + mainNode.offsetHeight;
	var img2 = document.getElementById('img2');
	img2.style.clip = 'rect('+top+'px,'+right+'px,'+bottom+'px,'+left+'px)';
}
//预览函数
function setPreview(){
    var top = mainNode.offsetTop;
    var left = mainNode.offsetLeft;
    var right = mainNode.offsetLeft + mainNode.offsetWidth;
    var bottom = mainNode.offsetTop + mainNode.offsetHeight;
    var img3 = document.getElementById('img3');
    img3.style.top = -top + 'px';
    img3.style.left = -left + 'px';
    img3.style.clip = 'rect('+top+'px,'+right+'px,'+bottom+'px,'+left+'px)';
}
}
//获取元素相对于屏幕左边，顶部的距离，使用offsetLeft,offsetTop
function getPosition(node){
		var left = node.offsetLeft;
		var top = node.offsetTop;
		var parent = node.offsetParent;
		while(parent != null){
			left += parent.offsetLeft;
			top += parent.offsetTop;
			parent=parent.offsetParent;	
		}
		return {"left":left,"top":top};
	}
