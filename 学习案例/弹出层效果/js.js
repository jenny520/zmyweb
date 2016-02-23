window.onload = function(){
	var logoBtn = document.getElementById('btn');
	logoBtn.onclick = show;
	function show(){
	//获取页面的宽度和高度
	var sWidth = document.documentElement?document.documentElement.scrollWidth:document.body.scrollWidth;
	var sHeight = document.documentElement?document.documentElement.scrollHeight:document.body.scrollHeight;
	//创造div节点元素并且插入
	var oMask = document.createElement('div');
	oMask.id = 'mask';
    oMask.style.width = sWidth +　'px';
    oMask.style.height = 1000 + 'px';
    document.body.appendChild(oMask);
    //获取可视区域的宽度和高度
    var clientX = document.documentElement?document.documentElement.clientWidth:document.body.clientWidth;
    var clientY = document.documentElement?document.documentElement.clientHeight:document.body.clientHeight;
    var ologo = document.createElement('div');
    ologo.id='logo';
    ologo.innerHTML = "<div id='logoContent' class='logoContent'><div id='close' class='close'></div></div>";
    document.body.appendChild(ologo);
    //获取元素的宽度和高度
    var oHeight = ologo.offsetHeight;
    var oWidth = ologo.offsetWidth;
    ologo.style.offsetLeft = (clientX - oWidth)/2;
    ologo.style.offsetTop = (clientY - oHeight)/2;
    //获取关闭按钮
    var close = document.getElementById('close');
    oMask.onclick = close.onclick = function(){
    	document.body.removeChild(oMask);
    	document.body.removeChild(ologo);
    }
   }
}