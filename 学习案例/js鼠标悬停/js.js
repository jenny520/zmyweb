   //获取元素对象
	function $(id){
		return document.getElementById(id);
	}
	//自动居中函数 登录浮层
	function autoCenter(el){
		var bodyW = document.documentElement.clientWidth;
		var bodyH = document.documentElement.clientHeight;
		var elW = el.offsetWidth;
		var elH = el.offsetHeight;
		el.style.left = (bodyW - elW)/2 + 'px';
        el.style.top = (bodyH - elH)/2 + 'px';
	}
	//自动全屏功能
	function fillToBody(el){
		el.style.width = document.documentElement.clientWidth + 'px';
		el.style.height = document.documentElement.clientHeight + 'px'; 
	}
	//鼠标事件1，在标题栏按下(鼠标相对标题栏左上角的坐标)
	$('dialog-title').onmousedown = function(e){
		var e = e || window.event;
		var mouseoffsetX = e.clientX - $('dialog-ui').offsetLeft;
		var mouseoffsetY = e.clientY - $('dialog-ui').offsetTop;
		isdraggable = true;
		if(isdraggable===true){
		document.onmousemove = function(e){
			var e = e || window.event;
            fnmove(e,mouseoffsetX,mouseoffsetY);
		}
		document.onmouseup = function(e){
			document.onmousemove = null;
			document.onmousedown = null;
		}
	}
	}
	function fnmove(e,disX,disY){
		var moveX = e.clientX - disX;
		var moveY = e.clientY - disY;
		var clientW = document.documentElement.clientWidth;
		var clientH = document.documentElement.clientHeight;
		var maxX = clientW - $('dialog-ui').offsetWidth;
		var maxY = clientH - $('dialog-ui').offsetHeight;
		moveX = Math.min(maxX,Math.max(0,moveX));
		moveY = Math.min(maxY,Math.max(0,moveY));
		$('dialog-ui').style.left = moveX + 'px';
		$('dialog-ui').style.top = moveY + 'px';
	}
	function showdialog(){
		$('dialog-ui').style.display = 'block';
		$('mask').style.display = 'block';
		autoCenter($('dialog-ui'));
		fillToBody($('mask'));
	}
	function hidedialog(){
		$('dialog-ui').style.display = 'none';
		$('mask').style.display = 'none';
	}
	window.onresize = function(){
	    autoCenter($('dialog-ui'));
	    fillToBody($('mask'));
	}
