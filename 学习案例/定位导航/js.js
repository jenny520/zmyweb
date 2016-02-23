window.onload = function(){
	function getByClassName(obj,cls){
		var elements = obj.getElementsByTagName('*');
		var els = [];
		for(var i = 0;i<elements.length;i++){
			var e = elements[i];
			if(elements[i].className == cls){
                els.push(e);
			}
		}
		return els;
	}
	function hasClass( obj, cls ){ 
	    return obj.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
	}
	
	function removeClass( obj, cls ){ 
	    if( hasClass( obj, cls )){
			var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
			obj.className = obj.className.replace(reg, "");
		}
	}
	function addClass(obj,cls){
      if(!hasClass(obj, cls)){
            obj.className += " " + cls;
        }
}
	window.onscroll = function(){
		var sTop = document.documentElement?document.documentElement.scrollTop:document.body.scrollTop;
		var menus = document.getElementById('menu').getElementsByTagName('a');
        var items = getByClassName(document.getElementById('content'),'item');
        var currentId = '';
        for(var i = 0;i<items.length;i++){
        	var m = items[i];
        	var dis = m.offsetTop;
        	if(sTop>dis-200){
        		currentId = m.id;
        	}else{
        		break;
        	}
        }
        if(currentId){
        	for(var j = 0;j<menus.length;j++){
        		var _menu = menus[j];
        		var _href = menus[j].href.split('#');
        		if(_href[_href.length-1]!=currentId){
                     removeClass(_menu,'current');
        		}else{
        			addClass(_menu,'current');
        		}
        	}
        }
	}
}