$(document).ready(function(){
	var index = null;
	var _index = null;
	var lindex = 0;
	var curIndex = null;
	var myTimer = null;
	var first_Index = 0;
	var current_Index = new Array(4);
	var first_timer = null;
	var p_index = 0;
	var b_index = 0;
	var length = 0;
	$.each(current_Index,function(index,value){
        current_Index[index]=0;
	});
	// 顶部导航滑过，内容展开
	$('.top-active .close').toggle(function(){
		$('.top-active-wrap').animate({'height':'0px'},'fast');
	    $(this).addClass('open');
	},function(){
		$(this).removeClass('open');
		$('.top-active-wrap').animate({'height':'100px'},'fast');
	});
	$('.toolbar-left').hover(function(){
		$('.toolbar-left .site-content').slideDown(400);
		$('.toolbar-left .site-content .close').click(function(){
			$(this).parent().slideUp('fast');
		})
	},function(){
		$('.toolbar-left .site-content').slideUp('fast');
	});
	$('.toolbar-right .bar-node-box').hover(function(){
		$(this).find('.ng-down-box').slideDown(400);
		$(this).find('.bar-content').slideDown(400);
		$(this).find('.close').click(function(){
			$(this).parent().slideUp('fast');
		})
	},function(){
		$(this).find('.ng-down-box').slideUp('fast');
		$(this).find('.bar-content').slideUp('fast');
	});
	// 商品导航条滑过展开
	$('.sort-list li').hover(function(){
		$(this).css('background-color','#fff');
		
		$(this).find('a').css('color','#333');
		index = $('.sort-list li').index(this);
		$('.content-list').eq(index).show();
	},function(){
		$(this).css('background-color','#333');
		$(this).find('a').css('color','#fff');
		$('.content-list').eq(index).hide();
	});
	$('.content-list').hover(function(){
        _index = $('.content-list').index(this);
		$(this).show();
		$('.sort-list li').eq(_index).css('background-color','#fff');
		$('.sort-list li').eq(_index).find('a').css('color','#333');
	},function(){
		$('.sort-list li').eq(_index).css('background-color','#333');
		$('.sort-list li').eq(_index).find('a').css('color','#fff');
		$(this).hide();
	});
	$('.column-left').hover(function(){
		$(this).css('opacity','0.8');
	},function(){
		$(this).css('opacity','1');
	});
	$('.floor-promote-main').find('img').hover(function(){
		$(this).css('opacity','0.8');
	},function(){
		$(this).css('opacity','1');
	});
	// 按钮点击，切换到不同图片
	$('.btn-next').click(function(event){
		if(myTimer){
			clearInterval(myTimer);
		}
		if(lindex<2){
			lindex++;
		}else{
			lindex = 0;
		}
		event.preventDefault();
        showImg(-600);
        showBtn(lindex);
	});
    $('.btn-prev').click(function(event){
    	if(myTimer){
    		clearInterval(myTimer);
    	}
    	if(lindex>0){
    		lindex--;
    	}else{
    		lindex = 2;
    	}
        event.preventDefault();
        showImg(600);
        showBtn(lindex);
    });
    $('.side-nav li').hover(function(){
    	curIndex = $('.side-nav li').index($(this));
    	var left = (curIndex - lindex)*(-600);
    	lindex = curIndex;
    	showBtn(lindex);
    	showImg(left);
    });
    // 鼠标移入暂停
    $('.side').hover(function(){
    	if(myTimer){
    		clearInterval(myTimer);
    	}
    	$('.side-page a').css('opacity','0.5');
    },function(){
    	myTimer = setInterval(function(){
    		if(lindex<2){
    			lindex++;
    		}else{
    			lindex = 0;
    		}
    		showImg(-600);
            showBtn(lindex);
    	},4000);
    	$('.side-page a').css('opacity','0');
    })
	//展示图片
	function showImg(offset){
       var left = $('.side-main').position().left + offset;
       if(left <= -2400){
       	$('.side-main').animate({'left':'-2400px'},400,function(){
       		$(this).css('left','-600px');
       	});
       }else if(left >=0){
       	$('.side-main').animate({'left':'0px'},400,function(){
       		$(this).css('left','-1800px');
       	});
       }else if(left>-2400&&left<0){
       	$('.side-main').animate({'left':left},400);
       }
	}
	// 展示按钮
	function showBtn(i){
		$('.side-nav li').eq(i).addClass('current').siblings().removeClass('current');
	}
	// 自动轮播
    myTimer = setInterval(function(){
    	if(lindex<2){
    		lindex++;
    	}else{
    		lindex = 0;
    	}
        showBtn(lindex);
        showImg(-600);
    },4000);
    // 所有的图片点击，opacity变化
    $('body').find('img').hover(function(){
    	$(this).css('opacity',0.8);
    },function(){
    	$(this).css('opacity',1);
    });
    // 底部固定区域效果
    $('.ng-sidebar').find('.close').click(function(){
    	$('.ng-sidebar').animate({'right':'-350px'},400);
    	$('.ng-bottom-fixed-sidebar').find('.xing').css('background-color','#fa0');
    });
    $('.ng-bottom-fixed-sidebar').find('.xing').focusin(function(){
    	$(this).css('background-color','#ffaa01');
    	$('.ng-sidebar').css('display','block');
    	$('.ng-sidebar').animate({'opacity':'1','right':'0px'},400);
    });
    $('.ng-bottom-fixed-sidebar').find('.xing').focusout(function(){
    	$('.ng-sidebar').animate({'right':'-350px'},400);
    	$(this).css('background-color','#ffaa01');
    });
    $('.ng-bottom-fixed-btn').find('.life-help-btn').click(function(){
    	$(this).css('background-color','#000');
    	$('.ng-slide-box').css('display','block');
    	$('.ng-slide-box').animate({'height':'275px'},400);
    });
    $('.ng-slide-box').find('.ng-close').click(function(){
    	$('.ng-bottom-fixed-btn').find('.life-help-btn').css('background-color','#292929');
    	$('.ng-slide-box').animate({'height':'0px'},400,function(){
    		$(this).css('display','none');
    	});
    });
    $('.ng-bottom-fixed-btn').find('.backtotop-btn').click(function(){
    	$(this).css('background-color','#000');
    	$('html,body').animate({'scrollTop':'0px'},400);
    });
    //中间商品部分的轮播图效果
    $('#life-floor').find('.btn-next').click(function(){
        if(current_Index[0] == 5){
        	current_Index[0] = 0;
        }else{
        	current_Index[0]++;
        }
        showNImg($('#life-floor'),-1191);
        showTab($('#life-floor'),current_Index[0]);
    });
    $('#electric-floor').find('.btn-next').click(function(){
        if(current_Index[1]<5){
        	current_Index[1]++;
        }else{
        	current_Index[1] = 0;
        }
        showNImg($('#electric-floor'),-1191);
        showTab($('#electric-floor'),current_Index[1]);

    });
    $('#mother-floor').find('.btn-next').click(function(){
        if(current_Index[2]<5){
        	current_Index[2]++;
        }else{
        	current_Index[2] = 0;
        }
        showNImg($('#mother-floor'),-1191);
        showTab($('#mother-floor'),current_Index[2]);

    });
    $('#clothes-floor').find('.btn-next').click(function(){
        if(current_Index[3]<5){
        	current_Index[3]++;
        }else{
        	current_Index[3] = 0;
        }
        showNImg($('#clothes-floor'),-1191);
        showTab($('#clothes-floor'),current_Index[3]);

    });
     $('#life-floor').find('.btn-prev').click(function(){
        if(current_Index[0]==0){
        	current_Index[0] = 5;
        }else{
        	current_Index--;
        }
        showNImg($('#life-floor'),1191);
        showTab($('#life-floor'),current_Index[0]);

    });
    $('#electric-floor').find('.btn-prev').click(function(){
        if(current_Index[1]==0){
        	current_Index[1] = 5;
        }else{
        	current_Index[1]--;
        }
        showNImg($('#electric-floor'),1191);
        showTab($('#electric-floor'),current_Index[1]);

    });
    $('#mother-floor').find('.btn-prev').click(function(){
        if(current_Index[2]==0){
        	current_Index[2]=5;
        }else{
        	current_Index[2]--;
        }
        showNImg($('#mother-floor'),1191);
        showTab($('#mother-floor'),current_Index[2]);

    });
    $('#clothes-floor').find('.btn-prev').click(function(){
        if(current_Index[3]==0){
        	current_Index[3]=5;
        }else{
        	current_Index[3]--;
        }
        showNImg($('#clothes-floor'),1191);
        showTab($('#clothes-floor'),current_Index[3]);

    });
    function showTab(obj,n_index){
    	obj.find('.tab-slide').stop().animate({'left':n_index*119+'px'},200,function(){
    		obj.find('.tab-item li').eq(n_index).addClass('current').siblings().removeClass('current');
    	});
    }
    $('#life-floor').find('.tab-item li').hover(function(){
    	l_index = $('#life-floor').find('.tab-item li').index($(this));
    	var left = (l_index-current_Index[0])*(-1191);
    	current_Index[0] = l_index;
    	setTimeout(function(){
    		 showTab($('#life-floor'),l_index);
    		},100);
    	showNImg($('#life-floor'),left);
    });
    $('#electric-floor').find('.tab-item li').hover(function(){
    	l_index = $('#electric-floor').find('.tab-item li').index($(this));
    	var left = (l_index-current_Index[1])*(-1191);
    	current_Index[1] = l_index;
    	setTimeout(function(){
    		 showTab($('#electric-floor'),l_index);
    		},100);
    	showNImg($('#electric-floor'),left);
    });
    $('#mother-floor').find('.tab-item li').hover(function(){
    	l_index = $('#mother-floor').find('.tab-item li').index($(this));
    	var left = (l_index-current_Index[2])*(-1191);
    	current_Index[2] = l_index;
    	setTimeout(function(){
    		 showTab($('#mother-floor'),l_index);
    		},100);
    	showNImg($('#mother-floor'),left);
    });
    $('#clothes-floor').find('.tab-item li').hover(function(){
    	l_index = $('#clothes-floor').find('.tab-item li').index($(this));
    	var left = (l_index-current_Index[3])*(-1191);
    	current_Index[3] = l_index;
    	setTimeout(function(){
    		showTab($('#clothes-floor'),l_index);
    		},100);
    	showNImg($('#clothes-floor'),left);
    });
    //展示图片
    function showNImg(obj,offset){
        var left = obj.find('.floor-wrap-tab').position().left + offset;
        if(left < -5955){
        	obj.find('.floor-wrap-tab').css('left','0px');
        	obj.find('.floor-wrap-tab').stop().animate({'left':'0px'},200);
        }else if(left>0){
        	obj.find('.floor-wrap-tab').css('left','-5995px');
        	obj.find('.floor-wrap-tab').stop().animate({'left':'-5955px'},200);
        }else if(-5955 <=left&&left<=0){
        	obj.find('.floor-wrap-tab').stop().animate({'left':left+'px'},200);
        }
    }
    // 头部展示区的轮播图展示

    // 点击按钮，展示不同的图片
     $('.first-screen').find('.btn-next').click(function(){
     	if(first_timer){
     		clearInterval(first_timer);
     	}
     	if(first_Index==32){
     		first_Index = 0;
     	}else{
     		first_Index++;
     	}
     	var ul_node = $('.first-screen .banner-pic').find('li').eq(first_Index).parent();
     	var index = $('.first-screen .banner-pic ul').index($(ul_node));
     	var cl_index = $(ul_node).find('li').index($('.first-screen .banner-pic').find('li').eq(first_Index));
     	showFirstImg(index,cl_index);
     	showFirstBtn(index,cl_index);
     });
     $('.first-screen').find('.btn-prev').click(function(){
     	if(first_timer){
     		clearInterval(first_timer);
     	}
     	if(first_Index==0){
     		first_Index = 32;
     	}else{
     		first_Index--;
     	}
     	var ul_node = $('.first-screen .banner-pic').find('li').eq(first_Index).parent();
     	var index = $('.first-screen .banner-pic ul').index($(ul_node));
     	var cl_index = $(ul_node).find('li').index($('.first-screen .banner-pic').find('li').eq(first_Index));
     	showFirstImg(index,cl_index);
     	showFirstBtn(index,cl_index);
     });
     // 图片展示函数
     function showFirstImg(i,j){
     	$('.first-screen .banner-pic').find('ul').eq(i).find('li').eq(j).animate({
     		'opacity':'1'
     	},1000).css('z-index',1);
     	$('.first-screen .banner-pic').find('ul').eq(i).siblings().find('li').animate({
     		'opacity':'0'
     	},1000).css('z-index',0);
     }
     // banner展示函数
     function showFirstBtn(i,k){
        $('.first-screen .banner-ctrl').find('li').eq(i).addClass('current').siblings().removeClass('current');
        $('.first-screen .banner-ctrl').find('li').eq(i).find('.ctrl-dot i').eq(k).addClass('on').siblings().removeClass('on');
     }
     // 自动轮播函数
     first_timer = setInterval(function(){
     	if(first_Index==32){
     		first_Index = 0;
     	}else{
     		first_Index++;
     	}
     	var ul_node = $('.first-screen .banner-pic').find('li').eq(first_Index).parent();
     	var index = $('.first-screen .banner-pic ul').index($(ul_node));
     	var cl_index = $(ul_node).find('li').index($('.first-screen .banner-pic').find('li').eq(first_Index));
     	showFirstImg(index,cl_index);
     	showFirstBtn(index,cl_index);
     },4000);
     // 滑入停止，滑出开始
     $('.first-screen').hover(function(){
     	if(first_timer){
     		clearInterval(first_timer);
     	}
     },function(){
         first_timer = setInterval(function(){
     	if(first_Index==32){
     		first_Index = 0;
     	}else{
     		first_Index++;
     	}
     	var ul_node = $('.first-screen .banner-pic').find('li').eq(first_Index).parent();
     	var index = $('.first-screen .banner-pic ul').index($(ul_node));
     	var cl_index = $(ul_node).find('li').index($('.first-screen .banner-pic').find('li').eq(first_Index));
     	showFirstImg(index,cl_index);
     	showFirstBtn(index,cl_index);
     },4000);
     });
     // 滑过展示title-item
     $('.first-screen .banner-ctrl').find('li').hover(function(){
     	if(first_timer){
     		clearInterval(first_timer);
     	}
     	var self = $(this);
     	b_index = $('.first-screen .banner-ctrl').find('li').index($(this));
     	length = $('.first-screen .banner-pic').find('ul').eq(b_index).prevAll().find('li').size();
     	$(this).siblings().removeClass('current');
     	showFirstImg(b_index,0);
     	showFirstBtn(b_index,0);
     	first_Index = length;
     	$(this).addClass('mouse-hover').siblings().removeClass('mouse-hover');
     	$('.first-screen .banner-ctrl').find('li .title-list p').click(function(event){
     	    event.preventDefault();
     		if(first_timer){
     			clearInterval(first_timer);
     		}
     		$(this).find('i').addClass('now');
     		$(this).siblings().find('i').removeClass('now');
     		var li_parent = $(this).parent();
     		p_index = $(li_parent).find('p').index($(this));
     		first_Index = first_Index + p_index;
     		$('.first-screen .banner-pic').find('ul').eq(b_index).find('li').eq(p_index).animate({
     		'opacity':'1'
     	     },100).css('z-index',1);
     	    $('.first-screen .banner-pic').find('ul').eq(b_index).siblings().find('li').animate({
     		'opacity':'0'
     	     },100).css('z-index',0);
     	    first_Index = length;
            showFirstBtn(b_index,p_index);
            first_Index = length + p_index;
     });
     },function(){
        $(this).removeClass('mouse-hover');
     });
});