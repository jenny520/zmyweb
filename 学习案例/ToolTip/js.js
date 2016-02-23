//obj-ToolTip超链接元素
//id-ToolTip提示框id
//提示框内容
// var isIE=navigator.userAgent.indexOf('MSIE')>-1;
var getEl=function(id){
	return document.getElementById(id);
}
var demo=getEl('demo');
function showToolTip(obj, id, html, width, height){
	if(getEl(id)==null){
		var toolTipBox;
		toolTipBox = document.createElement("div");
		toolTipBox.className ='tooltip-box';
		toolTipBox.id = id;
		toolTipBox.innerHTML = html;
		obj.appendChild(toolTipBox);
		toolTipBox.style.width = width? width+"px":"auto";
		toolTipBox.style.height = height? height+"px":"auto";
		
		if(!width && isIE){
		   toolTipBox.style.width = toolTipBox.offsetWidth;
		}
		
		toolTipBox.style.position = "absolute";
		// toolTipBox.style.display = "block";
		
		var left = obj.offsetLeft;
		var top = obj.offsetTop + obj.offsetHeight;
		
		//left，不让ToolTip提示框超出浏览器
		if(left + toolTipBox.offsetWidth > document.body.clientWidth){ 
		    var demoLeft = demo.offsetLeft;
			left = document.body.clientWidth - toolTipBox.offsetWidth - demoLeft;
			if (left < 0) left = 0;
		}
		// console.log(document.body.clientX);
		toolTipBox.style.left = left + "px";
		toolTipBox.style.top = top + "px";
        addEvent(obj,'mouseleave',function(){
        	setTimeout(function(){
        		toolTipBox.style.display='none';
        	},300);
        })
}
	else{ 
	    //显示
		getEl(id).style.display = "block";
	}	
}
window.onload=function(){
	function addEvent(element,event,callbackFunction){
	if(element.addEventListener){
		element.addEventListener(event,callbackFunction,false);
	}else if(element.attachEvent){
		element.attachEvent('on'+event,callbackFunction);
	}
}
	addEvent(demo, "mouseover", function(e){
	var event = e || window.event; 
	var target = event.target || event.srcElement;
	console.log(target);
	if(target.className == "tooltip"){ 
	    var _html;
		var _id;
		var _width = 200;
		
            switch (target.id) {
                case "tooltip1":
                    _id = "t1";
                    _html = "中华人民共和国";
                    break;
                case "tooltip2":
                    _id = "t2";
                    _html = "美国篮球职业联赛";
                    break;
                case "tooltip3":
                    _id = "t3";
                    _html = "<h2>春晓</h2><p>春眠不觉晓，</p><p>处处闻啼鸟。</p><p>夜来风雨声，</p><p>花落知多少。</p>";
                    _width = 100;
                    break;
                case "tooltip4":
                    _id = "t4";
                    _html = '<img src="1.jpg" width="500" />';
                    _width = 520;
                    break;
                case "tooltip5":
                    _id = "t5";
                    _html = '<div id="mycard"><img src="2.jpg" alt=""/><p><strong>昵称一定要长</strong></p><p>我的简介我的简介</p></div>';
                    _width = 300;
                    break;
                case "tooltip6":
                    _id = "t6";
                    _html = '<iframe src="http://www.imooc.com/" width="480" height="300"></iframe>';
                    _width = 500;
                    break;
                default:
                    return false;
            }

            showToolTip(target, _id, _html, _width);
	
	}

});
   //  addEvent(demo,'mouseover',function(e){
   //      var event=e||window.event;
   //      var target=event.target||event.srcElement;
   //      if(target.className == 'tooltip'){
   //      	var _html;
   //      	var _id;
   //      	var _width = 200;
   //      	switch(target.id){
   //      		case 'tooltip1':
   //      		_id='t1';
   //      		_html='中华人民共和国';
   //      		break;
   //      	}
   //      	showToolTip(target,_id,_html,_width);
   //      }
   //  })
   //  var t1=getEl('tooltip1'),
   //     t2=getEl('tooltip2'),
   //     t3=getEl('tooltip3'),
   //     t4=getEl('tooltip4'),
   //     t5=getEl('tooltip5'),
   //     t6=getEl('tooltip6');
   // t1.onmouseenter=function(){
   // 	showToolTip(this,'t1','中华人民共和国','120','10');
   // }
   // t2.onmouseenter=function(){
   // 	showToolTip(this,'t2','美国职业球赛','120','10');
   // }
   // t3.onmouseenter=function(){
   // 	showToolTip(this,'t3','<h2>春晓</h2><p>春眠不觉晓，</p><p>处处闻啼鸟。</p><p>夜来风雨声，</p><p>花落知多少。</p>','100','220');
   // }
   // t4.onmouseenter=function(){
   // 	showToolTip(this,'t4','<img src="images/1.jpg" width="500" />','500','370');
   // }
  }
