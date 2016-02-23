;(function($){
   var Carousel = function(poster){
   	//默认配置参数
      var self = this;
   	  this.poster = poster;
      this.posterItem = this.poster.find('.poster-list');
      this.prevBtn = this.poster.find('.prev-btn');
      this.nextBtn = this.poster.find('.next-btn');
      this.posterItems = this.poster.find('li.poster-item1');
      console.log(this.posterItems);
      if(this.posterItems.size()%2==0){
        console.log(3);
        this.posterItem.append(this.posterItems.eq(0));
        this.posterItems = this.posterItem.children('li.poster-item1');
      }
      this.posterFirst = this.posterItems.first();
      this.posterLast = this.posterItems.last();
      this.posterFlag = true;
   	  this.setting = {
   	  	'width':1000,   //幻灯片的宽度
   	  	'height':270,   //幻灯片的高度 
   	  	'posterWidth':640,   //第一帧的宽度
   	  	'posterHeight':270,   //第一帧的高度
   	  	'speed':500,
   	  	'scale':0.9,
        'delay':2000,
         'autoplay':true,
   	  	'verticalAlign':'middle'//默认排列方式
   	  }
   	  $.extend(this.setting,this.getSetting());
      this.setSettingValue();
      this.setPosterPos();
      this.nextBtn.click(function(){
        if(self.posterFlag){
          self.carouselRotate('left');
          self.posterFlag = false;
        }
      });
      this.prevBtn.click(function(){
        if(self.posterFlag){
          self.carouselRotate('right');
          self.posterFlag = false;
        }
      });
      //是否开启自动播放
      if(this.setting.autoplay){
        this.autoplay();
        this.poster.hover(function(){
          window.clearInterval(self.timer);
        },function(){
          self.autoplay();
        });
      }
   };
   Carousel.prototype = {
    //设置自动播放函数
    autoplay:function(){
      var self = this;
      this.timer = window.setInterval(function(){
           self.nextBtn.click();
       },this.setting.delay);
    },
    //设置左旋转
    carouselRotate:function(dir){
      var _this_ = this;
      var zIndexs = [];
      if(dir === 'left'){
        this.posterItems.each(function(){
            var self = $(this),
                prev = self.prev().get(0)?self.prev():_this_.posterLast,
                width = prev.css('width'),
                height = prev.css('height'),
                zIndex = prev.css('z-index'),
                opacity = prev.css('opacity'),
                left = prev.css('left'),
                top = prev.css('top');
            zIndexs.push(zIndex);
            self.stop().animate({
              'width':width,
              'height':height,
              'opacity':opacity,
              'left':left,
              'top':top
            },_this_.setting.speed,function(){
              _this_.posterFlag = true;
            });  
        });
        this.posterItems.each(function(i){
           $(this).css('z-index',zIndexs[i]);
        });
      }
      else if(dir==='right'){
        this.posterItems.each(function(){
            var self = $(this),
                next = self.next().get(0)?self.next():_this_.posterFirst,
                width = next.css('width'),
                height = next.css('height'),
                zIndex = next.css('z-index'),
                opacity = next.css('opacity'),
                left = next.css('left'),
                top = next.css('top');
            zIndexs.push(zIndex);
            self.stop().animate({
              'width':width,
              'height':height,
              'opacity':opacity,
              'left':left,
              'top':top
            },_this_.setting.speed,function(){
              _this_.posterFlag = true;
            });  
        });
        this.posterItems.each(function(i){
           $(this).css('z-index',zIndexs[i]);
        });
      }
    },
    //设置剩余帧的位置
    setPosterPos:function(){
      var self = this;
      var sliceItems = this.posterItems.slice(1),
          sliceSize = sliceItems.size()/2,
          leftItems = sliceItems.slice(sliceSize),
          rightItems = sliceItems.slice(0,sliceSize);
          level = Math.floor(this.posterItems.size()/2);
      var rw = this.setting.posterWidth,
          rh = this.setting.posterHeight,
          gap = (this.setting.width - rw)/2/level;
      //设置右边帧的位置
      var firstleft = (this.setting.width - this.setting.posterWidth)/2;
      var fixOffset = firstleft + rw;
          rightItems.each(function(i){
            rw = rw*self.setting.scale;
            rh = rh*self.setting.scale;
            level--;
            $(this).css({
              'z-index':level,
              'width':rw,
              'height':rh,
              'opacity':1/level,
              'left':fixOffset+(++i)*gap-rw,
              'top':self.setPosterTop(rh)
            });
          });
      //设置左边帧的位置
      var lw = rightItems.last().width(),
          lh = rightItems.last().height(),
          oloop = Math.floor(this.posterItems.size()/2);
      leftItems.each(function(i){
        $(this).css({
          'z-index':i,
          'width':lw,
          'height':lh,
          'opacity':1/oloop,
          'left':gap*i,
          'top':self.setPosterTop(lh)
        });
        oloop--;
        lw = lw/self.setting.scale;
        lh = lh/self.setting.scale;
      });
    },
    //通过排列方式去获取不同的top
    setPosterTop:function(height){
      var top = 0;
      var moddle = this.setting.verticalAlign;
      if(moddle === 'middle'){
        top = (this.setting.height - height)/2;
      }else if(moddle === 'top'){
        top = 0;
      }else if(moddle === 'bottom'){
        top = (this.setting.height - height);
      }else{
        top = (this.setting.height - height)/2;
      }
      return top;
    },
    //设置配置参数值去控制基本参数值
    setSettingValue:function(){
      this.poster.css({
        'width':this.setting.width,
        'height':this.setting.height
      });
      this.posterItem.css({
        'width':this.setting.width,
        'height':this.setting.height
      });
      var w = (this.setting.width - this.setting.posterWidth)/2;
      this.prevBtn.css({
        'width':w,
        'height':this.setting.height,
        'z-index':Math.ceil(this.posterItems.size()/2)
      });
      this.nextBtn.css({
        'width':w,
        'height':this.setting.height,
        'z-index':Math.ceil(this.posterItems.size()/2)
      });
      this.posterFirst.css({
        'left':w,
        'z-index':Math.floor(this.posterItems.size()/2)
      })
      this.posterItems.css({
        'width':this.setting.posterWidth,
        'height':this.setting.posterHeight,
        // 'left':w
      })
    },
   	//获取人工配置参数
   	getSetting:function(){
       var setting = this.poster.attr('data-setting');
       return setting;
   	}
   };
   Carousel.init = function(posters){
   	   var _this_ = this;
       posters.each(function() {
       	  new _this_($(this));
       });
   };
   window['Carousel'] = Carousel;
})(jQuery);