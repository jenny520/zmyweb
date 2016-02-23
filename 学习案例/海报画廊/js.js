
    //通用函数
    function g(el){
    	var method = el.substr(0,1) == '.'?'getElementsByClassName':'getElementById';
    	return document[method](el.substr(1));
    }
    //翻面控制
    function turn(obj){
		var cls = obj.className;
		var n = obj.id.split('_')[1];
    if(!(/photo-center/.test(cls)){
      rsort(n);
    }
		if(/photo-front/.test(cls)){
			cls = cls.replace(/photo-front/,'photo-back');
			g('#nav_'+n).className += ' i_back';
		}else{
			cls = cls.replace(/photo-back/,'photo-front');
			g('#nav_'+n).className = g('#nav_'+n).className.replace(/\s*i_back\s*/,' ');
		}
		return obj.className = cls;
    }

    //输出所有的海报
    var data = data;
    function random(range){
    	var min = Math.min(range[0],range[1]);
    	var max = Math.max(range[0],range[1]);
    	var diff = max - min;
    	var number = Math.round(Math.random()*diff)+min;
    	return number;
    }
    function addPhotos(){
    	var template = g('#wrap').innerHTML;
    	var html = [];
    	var nav = [];
    	for(s in data){
    		var _html = template.replace('{{index}}',s)
    		                    .replace('{{img}}',data[s].img)
    		                    .replace('{{caption}}',data[s].caption)
    		                    .replace('{{desc}}',data[s].desc);
    		html.push(_html);  
    		nav.push('<span id="nav_' + s + '" onclick="turn(g(\'#photo_' + s + '\'))" class="i"></span>');
    	}           
    	g('#wrap').innerHTML = html.join('')+'<div class="nav">' + nav.join('') + '</div>';
    	rsort(random([0,data.length-1]));
    }

    addPhotos()
    function Range(){
        var range = {'left':{'x':[],'y':[]},'right':{'x':[],'y':[]}};
        var wrap = {
            'w': g('#wrap').clientWidth,
            'h': g('#wrap').clientHeight
        };
        var photo = {
            'w': g('.photo')[0].clientWidth,
            'h': g('.photo')[0].clientHeight
        }
        range.wrap = wrap;
        range.photo = photo;
        range.left.x = [0 - photo.w / 4 + 130, wrap.w / 2 - photo.w * 5 / 4 + 130];
        range.left.y = [0 - photo.h / 4, wrap.h - photo.h * 3 / 4 + 160];
        range.right.x = [wrap.w / 2 + photo.w / 4 + 130, wrap.w - photo.w / 4 + 130];
        range.right.y = range.left.y;
        return range;
    }
    //排序海报
    function rsort(n){
        var photos = g('.photo');
        var _photos = [];
        for(var s = 0;s < photos.length;s++){
            photo[s].className = 'photo photo_front';
            /*重排序之前去除所有图片样式*/
            photo[s].style.left = '';
            photo[s].style.top = '';
            /*一般来说，访问对象属性时使用的都是点表示法，不过，在 JavaScript 中也可以使用方括号表示法来访问
             *对象的属性。在使用方括号语法时，应该将要访问的属性以字符串的形式放在方括号中，如下面的例子所示:
                alert(person["name"]); //"Nicholas"
                alert(person.name); //"Nicholas"
             *方括号语法的主要优点是可以通过变量来访问属性，如果属性名中包含会导致语法错误的字符，或者属性名
             *使用的是关键字或保留字，也可以使用方括号表示法。例如：
                person["first name"] = "Nicholas";
             *通常，除非必须使用变量来访问属性，否则建议使用点表示法。(《JavaScript 高级程序设计》P85)
             */
            photo[s].style['transform'] = photo[s].style['-webkit-transform'] = 'scale(1.3)';
            photos.push(photos[s]);
        }
       var photo_center = g('#photo_'+n);
       photo_center.className +=" photo-center";
       photo_center = _photos.splice(n,1);
       var photo_left = _photos.splice(0,Math.ceil(_photos.length/2));
       var photo_right = _photos;
      
       var range = Range();
       for(var s = 0;s<photo_left.length;s++){
          photo_left[s].style.left = random(range.left.x) + 'px';
          photo_left[s].style.top = random(range.left.y) + 'px';
          photo_left[s].style['-webkit-transform'] = 'rotate(' + random([-150,150]) + 'deg)';
       }
       for(var i = 0;i<photo_right.length;i++){
          photo_right[i].style.left = random(range.right.x) + 'px';
          photo_right[i].style.top = random(range.right.y) + 'px';
          photo_right[i].style['-webkit-transform'] = 'rotate(' + random([-150,150]) + 'deg)';
       }
       var navs = g('.i');
       for(var j = 0;j < navs.length;j++){
       	  navs[j].className = navs[j].className.replace(/\s*i_current\s*/,' ');
       	  navs[j].className = navs[j].className.replace(/\s*i_back\s*/,' ');
       }
       g('#nav_'+n).className += " i_current";
    }
