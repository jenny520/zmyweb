$(document).ready(function(){
	var index;
	var curIndex=0;
	var maxImg = 6;
	var mytimer = null;
	var newindex;
	var curIndex1 = 0;
	var timer; 
    var Ctimer = new Array(12);
    var cIndex = new Array(12);
    var eIndex = 0;
    $.each(cIndex,function(index,value){
        cIndex[index]=0;
    })
    $.each(Ctimer,function(index,value){
          Ctimer[index]=null;
    })
	//滑入左右箭头显示
	$('.slider').mouseover(function(){
		if(mytimer){
			clearInterval(mytimer);
		}
		$('.slider-exact a').show();
	});
	//滑出左右箭头隐藏
	$('.slider').mouseout(function(){
		if(mytimer){
			clearInterval(mytimer);
		}
		$('.slider-exact a').hide();
	});
    $('.right-nav').click(function(){
    	if(mytimer){
    		clearInterval(mytimer);
    	}
        moveImg(1);
    });
    $('.left-nav').click(function(){
    	if(mytimer){
    		clearInterval(mytimer);
    	}
    	moveImg(-1);
    });
	//滑入停止播放,滑出继续
	$('.slider').hover(function(){
		// console.log(3);
		if(mytimer){
			clearInterval(mytimer);
		}
	},function(){
		mytimer = setInterval(function(){
			showImg(curIndex);
			curIndex++;
			if(curIndex==maxImg){
				curIndex = 0;
			}
		},4500);
	});
	//滑过显示不同的图片
	$('.slider-nav li').hover(function(){
		if(mytimer){
			clearInterval(mytimer);
		}
        curIndex = $('.slider-nav li').index(this);
        showImg(curIndex);
        $('.slider-main').stop();
	},function(){
		if(mytimer){
			clearInterval(mytimer);
		}
        mytimer = setInterval(function(){
        	showImg(curIndex);
        	curIndex++;
        	if(curIndex==maxImg){
        		curIndex = 0;
        	}
        },4500);
	});
	//自动播放
	mytimer = setInterval(function(){
        showImg(curIndex);
        curIndex++;
        if(curIndex==maxImg){
        	curIndex = 0;
        }
    },4500);
    //点击鼠标翻一张图片
    function moveImg(num){
    	if(num==1){
    		curIndex++;
    		if(curIndex==maxImg){
    			curIndex=0;
    		}
    		showImg(curIndex);
    	}else if(num ==-1){
    		curIndex--;
    		if(curIndex == -1){
    			curIndex = maxImg -1;
    		}
    		showImg(curIndex);
    	}
    }
    //显示图片函数
    function showImg(i){
        $('.slider-main li').eq(i).animate({'opacity':1},1000).css('z-index',1);
        $('.slider-main li').eq(i).siblings().animate({'opacity':0},1000).css('z-index',0);
        $('.slider-nav li').eq(i).addClass('select-item1');
        $('.slider-nav li').eq(i).siblings().removeClass('select-item1');
    }
    //顶部滑过显示详细内容
	$('.dropdown').hover(function(){
		$(this).css({'background-color':'#ffffff','border-left':'1px solid #f1f1f1','border-right':'1px solid #f1f1f1'});
		$('.area-content').css('z-index',10).show();
		$(this).find('.item').hover(function(){
			$(this).children('a').addClass('mouse');
		},function(){
            $(this).children('a').removeClass('mouse');
		});
		$(this).find('.item').each(function(index,value){
             $(value).click(function(){
             	$(this).find('a').removeClass('mouse').addClass('selected');
             	var vs = $(this).find('a').text();
             	$('.area-text').text(vs);
             	if($(this).siblings().find('a').hasClass('selected')){
             		$(this).siblings().find('a').removeClass('selected');
             	}
             });
		})
	},function(){  
		$(this).css({'background-color':'#f1f1f1','border':'none'});
		$('.area-content').css('z-index',0).hide();
	});
	//商品种类导航条，通过滑过显示不同商品种类的详细信息
	$('.down').hover(function(){
		$(this).css({'border':'1px solid #f1f1f1','background-color':'#ffffff','border-top':'none','padding':'0px 1px'});
		$(this).children('.dd').css({'z-index':10,'display':'block'});
	},function(){
		$(this).css({'border':'none','background-color':'#f1f1f1','padding':'0px 2px'});
		$(this).children('.dd').css({'z-index':1,'display':'none'});
	});
	$('.citem').hover(function(){
		$(this).css('background-color','#f7f7f7');
		$(this).find('a').css('color','#c81623');
		index = $('.citem').index(this);
		$('.cdd-content').eq(index).show();
	},function(){
		$(this).css('background-color','#c81623');
		$(this).find('a').css('color','#ffffff');
		$('.cdd-content').eq(index).hide();
	});
	$('.cdd-content').hover(function(){
		var _index = $('.cdd-content').index($(this));
		$('.citem').eq(_index).css('background-color','#f7f7f7');
		$('.citem').eq(_index).find('a').css('color','#C81623');
		$(this).show();
	},function(){
        $(this).hide();
        $('.citem').css('background-color','#C81623');
        $('.citem').find('a').css('color','#ffffff');
	});
	//生活服务区
    $('.mc-li1,.mc-li2,.mc-li3,.mc-li4').mouseover(function(){
        $('.mc-li4').bind('mouseover',function(){
            $('.ul1 li').each(function(index){
            if(index<4){
                $(this).find('i').stop().animate({'top':'-25px'},100);
            }
        });
        $('.mc-inner').stop().animate({'top':'28px'},'fast');
        $('.txt').focusin(function(){
            $(this).val("");
        });
        $('.txt').focusout(function(){
            $(this).val("请输入手机号");
        })
        $('.ul1 li').find('a').stop().animate({'padding-top':'0px'},'fast');
        $(this).css({'border-bottom':'none','border-top':'2px solid #c81623','margin-bottom':'-1px'}).siblings().css({'border-bottom':'1px solid #E4E2E2','border-top':'none','margin-bottom':'0px'});
        $('.ul1 li').stop().animate({'height':'27px'},'fast');
        nexindex = $('.ul1 li').index(this);
        $('.mc-list').eq(nexindex).removeClass('hide').siblings().addClass('hide');
        $('.mc-content li').hover(function(){
            $(this).find('a').addClass('select-item');
            $(this).siblings().find('a').removeClass('select-item');
            var liindex = $('.mc-content li').index(this);
            $('.content-valid').eq(liindex).removeClass('hide').siblings().addClass('hide');
        });
        })
        $('.ul1 li').each(function(index){
            if(index<4){
                $(this).find('i').stop().animate({'top':'-25px'},100);
            }
        });
        $('.mc-inner').stop().animate({'top':'28px'},'fast');
        $('.txt').focusin(function(){
            $(this).val("");
        });
        $('.txt').focusout(function(){
            $(this).val("请输入手机号");
        })
        $('.ul1 li').find('a').stop().animate({'padding-top':'0px'},'fast');
        $(this).css({'border-bottom':'none','border-top':'2px solid #c81623','margin-bottom':'-1px'}).siblings().css({'border-bottom':'1px solid #E4E2E2','border-top':'none','margin-bottom':'0px'});
        $('.ul1 li').stop().animate({'height':'27px'},'fast');
        nexindex = $('.ul1 li').index(this);
        $('.mc-list').eq(nexindex).removeClass('hide').siblings().addClass('hide');
        $('.mc-content li').hover(function(){
            $(this).find('a').addClass('select-item');
            $(this).siblings().find('a').removeClass('select-item');
            var liindex = $('.mc-content li').index(this);
            $('.content-valid').eq(liindex).removeClass('hide').siblings().addClass('hide');
        });
    });
    $('.mc-inner .close').click(function(){
        $('.mc-inner').stop().animate({'top':'199px'},'slow');
        	$('.mc-inner').stop().animate({'top':'199px'},50);
        	$('.ul1 li').each(function(index){
			         if(index<4){
				       $(this).find('i').stop().animate({'top':'9px'},100);
			        }
		        });
            $('.mc-li4').unbind('mouseover');
        	$('.cnontent-valid').eq(0).removeClass('hide').siblings().addClass('hide');
        	$('.mc-content li').eq(0).find('a').addClass('select-item').siblings().find('a').removeClass('select-item');
        	$('.mc-list').addClass('hide');
        	$('.ul1 li').css({'border-bottom':'1px solid #E4E2E2','border-top':'none','margin-bottom':'0px'});
        	$('.ul1 li').stop().animate({'height':'70px'},100);
        	$('.ul1 li').find('a').stop().animate({'padding-top':'36px'},100);
        	});
    $('.tmc').mouseover(function(){
    	$('.tmc .a').show();
    });
    $('.tmc').mouseout(function(){
    	$('.tmc .a').hide();
    })
    $('.tmc .left-nav').click(function(){
    	showImg1(1000,6);
    });
    $('.tmc .right-nav').click(function(){
    	showImg1(-1000,6);
    });
    function showImg1(offset,num){
    	var left = $('.jqueryContent').position().left + offset;
        var absOffset = Math.abs(offset);
        var labsOffset = absOffset * num;
        var court = -absOffset*num;
    	if(left<court){
    		left = -7000;
    		$('.jqueryContent').animate({'left':left+'px'},1000,function(){
    			$('.jqueryContent').css('left',-absOffset+'px');
    		});
    	}else if(left >=0){
    		left = 0;
    		$('.jqueryContent').animate({'left':left + 'px'},1000,function(){
    			$('.jqueryContent').css('left',-labsOffset+'px');
    		})
    	}else if(court<=left&&left<0){
            $('.jqueryContent').animate({'left':left+'px'},1000);
    	}
    }
    //返回顶部
    $('.top-text').click(function(){
        $('html,body').stop().animate({'scrollTop':'0px'},100);
    });
    //右边可以滑动的icon
    $('.research a').hover(function(){
        $(this).parent('.research').css('width','91px');
        $('.research .research-text').show();
    },function(){
        $('.research .research-text').hide();
        $(this).parent('.research').css('width','31px');
    });
    //左边导航条
    $('#elevator li').hover(function(){
        $(this).addClass('hoverLi');
    },function(){
        $(this).removeClass('hoverLi');
    });
    //通过滑动控制左边导航和右边的返回顶部显示
    var scrolltop = 0;
    var tops=[];
    $('#fn-wrap .floor').each(function(index,value){
              tops.push($(value).offset().top);
         });
    $(window).scroll(function(){
        scrolltop =  $('html,body').scrollTop()||$(document).scrollTop();
        if(scrolltop>300){
            $('.go-top').show();
            if(scrolltop>1550){
                $('#elevator').show();
                $.each(tops,function(index,value){
                   if(tops[index]-scrolltop<120){
                     $('#fn-wrap .floor').eq(index).addClass('floor-current').siblings().removeClass('floor-current');
                    $('#elevator li').eq(index).addClass('currentLi').siblings().removeClass('currentLi');
                   }
                })
            }
        }else if(scrolltop<1550){
            $('#elevator').hide();
            if(scrolltop<300){
                $('.go-top').hide();
            }
        }
    });
    $('#elevator li').click(function(){
        eIndex = $('#elevator li').index(this);
        $('#fn-wrap .floor').eq(eIndex).addClass('floor-current').siblings().removeClass('floor-current');
        $(this).addClass('currentLi').siblings().removeClass('currentLi');
        $('html,body').stop().animate({'scrollTop':tops[eIndex]+'px'},1000);
    });
    //轮播图的设置
    function showImg2(obj,offset,num){
        var left = obj.find('.slide-main').position().left + offset;
        var absOffset = Math.abs(offset);
        var labsOffset = absOffset * num;
        var court = -absOffset*num;
        if(left<court){
            left = -(num+1)*absOffset;
            obj.find('.slide-main').animate({'left':left+'px'},350,function(){
                obj.find('.slide-main').css('left',-absOffset+'px');
            });
        }else if(left >=0){
            left = 0;
             obj.find('.slide-main').animate({'left':left + 'px'},350,function(){
                 obj.find('.slide-main').css('left',-labsOffset+'px');
            })
        }else if(court<=left&&left<0){
             obj.find('.slide-main').animate({'left':left+'px'},350);
             // console.log(left);
        }
    }
    function showImg3(obj,offset){
        var left = obj.find('.slide-main').position().left + offset;
        obj.find('.slide-main').animate({'left':left+'px'},350);
    }
    function showBtn(obj,i){
        // console.log(i);
        obj.find('.slide-nav li').eq(i).addClass('current-item').siblings().removeClass('current-item');
    }
    function cmoveImg(obj,i,offset){
         if (cIndex[i] == 0){
            cIndex[i] = 3;
        }
        else{
            cIndex[i] -= 1;      
        }
        showImg2(obj,offset,4);
        showBtn(obj,cIndex[i]);
    }
    function cmoveImg2(obj,i,offset){
        if (cIndex[i] == 3){
            cIndex[i] = 0;
        }
        else{
           cIndex[i] += 1;
        }
        showImg2(obj,offset,4);
        showBtn(obj,cIndex[i]);
    }
    $('#clothes .slide').mouseover(function(){
        $(this).find('.slide-page a').show();
    });
    $('#cosmetics .slide').mouseover(function(){
        $(this).find('.slide-page a').show();
    });
    $('#electronics .slide').mouseover(function(){
        $(this).find('.slide-page a').show();
    })
    $('#digitals .slide').mouseover(function(){
        $(this).find('.slide-page a').show();
    })
    $('#mobiles .slide').mouseover(function(){
        $(this).find('.slide-page a').show();
    })
    $('#sports .slide').mouseover(function(){
        $(this).find('.slide-page a').show();
    })
    $('#livings .slide').mouseover(function(){
        $(this).find('.slide-page a').show();
    })
    $('#babys .slide').mouseover(function(){
        $(this).find('.slide-page a').show();
    })
    $('#foods .slide').mouseover(function(){
        $(this).find('.slide-page a').show();
    })
     $('#books .slide').mouseover(function(){
        $(this).find('.slide-page a').show();
    })
     $('#slide1').mouseover(function(){
        $(this).find('.slide-page a').show();
    })
     $('#slide2').mouseover(function(){
        $(this).find('.slide-page a').show();
    })
    $('#clothes .slide').mouseout(function(){
        $(this).find('.slide-page a').hide();
    });
     $('#cosmetics .slide').mouseout(function(){
        $(this).find('.slide-page a').hide();
    });
    $('#electronics .slide').mouseout(function(){
        $(this).find('.slide-page a').hide();
    })
    $('#digitals .slide').mouseout(function(){
        $(this).find('.slide-page a').hide();
    })
    $('#mobiles .slide').mouseout(function(){
        $(this).find('.slide-page a').hide();
    })
    $('#sports .slide').mouseout(function(){
        $(this).find('.slide-page a').hide();
    })
    $('#livings .slide').mouseout(function(){
        $(this).find('.slide-page a').hide();
    })
    $('#babys .slide').mouseout(function(){
        $(this).find('.slide-page a').hide();
    })
    $('#foods .slide').mouseout(function(){
        $(this).find('.slide-page a').hide();
    })
     $('#books .slide').mouseout(function(){
        $(this).find('.slide-page a').hide();
    })
     $('#slide1').mouseout(function(){
        $(this).find('.slide-page a').hide();
    })
     $('#slide2').mouseout(function(){
        $(this).find('.slide-page a').hide();
    })
    $('#clothes .slide').hover(function(){
        if(Ctimer[0]){
            clearInterval(Ctimer[0]);
        }
    },function(){
        Ctimer[0] = setInterval(function(){
        cmoveImg2($('#clothes'),0,-439);
    },4000);
    });
    $('#cosmetics .slide').hover(function(){
        if(Ctimer[1]){
            clearInterval(Ctimer[1]);
        }
    },function(){
        Ctimer[1] = setInterval(function(){
        cmoveImg2($('#cosmetics'),1,-339);
    },4000);
    });
    $('#electronics .slide').hover(function(){
        if(Ctimer[2]){
            clearInterval(Ctimer[2]);
        }
    },function(){
        Ctimer[2] = setInterval(function(){
        cmoveImg2($('#electronics'),2,-439);
    },4000);
    });
     $('#digitals .slide').hover(function(){
        if(Ctimer[3]){
            clearInterval(Ctimer[3]);
        }
    },function(){
        Ctimer[3] = setInterval(function(){
        cmoveImg2($('#digitals'),3,-439);
    },4000);
    });
     $('#mobiles .slide').hover(function(){
        if(Ctimer[4]){
            clearInterval(Ctimer[4]);
        }
    },function(){
        Ctimer[4] = setInterval(function(){
        cmoveImg2($('#mobiles'),4,-439);
    },4000);
    });
     $('#sports .slide').hover(function(){
        if(Ctimer[5]){
            clearInterval(Ctimer[5]);
        }
    },function(){
        Ctimer[5] = setInterval(function(){
        cmoveImg2($('#sports'),5,-339);
    },4000);
    });
    $('#livings .slide').hover(function(){
        if(Ctimer[6]){
            clearInterval(Ctimer[6]);
        }
    },function(){
        Ctimer[6] = setInterval(function(){
        cmoveImg2($('#livings'),6,-339);
    },4000);
    });
    $('#babys .slide').hover(function(){
        if(Ctimer[7]){
            clearInterval(Ctimer[7]);
        }
    },function(){
        Ctimer[7] = setInterval(function(){
        cmoveImg2($('#babys'),7,-339);
    },4000);
    });
    $('#foods .slide').hover(function(){
        if(Ctimer[8]){
            clearInterval(Ctimer[8]);
        }
    },function(){
        Ctimer[8] = setInterval(function(){
        cmoveImg2($('#foods'),8,-339);
    },4000);
    });
    $('#books .slide').hover(function(){
        if(Ctimer[9]){
            clearInterval(Ctimer[9]);
        }
    },function(){
        Ctimer[9] = setInterval(function(){
        cmoveImg2($('#books'),9,-439);
    },4000);
    });
    $('#slide1 .slide').hover(function(){
        if(Ctimer[10]){
            clearInterval(Ctimer[10]);
        }
    },function(){
        Ctimer[10] = setInterval(function(){
        cmoveImg2($('#slide1'),10,-395);
    },4000);
    });
    $('#slide2 .slide').hover(function(){
        if(Ctimer[11]){
            clearInterval(Ctimer[11]);
        }
    },function(){
        Ctimer[11] = setInterval(function(){
        cmoveImg2($('#slide2'),11,-395);
    },4000);
    });
    $('#clothes .rightNav').click(function(){
        if(Ctimer[0]){
            clearInterval(Ctimer[0]);
        }
        cmoveImg2($('#clothes'),0,-439);
    });
    $('#cosmetics .rightNav').click(function(){
        if(Ctimer[1]){
            clearInterval(Ctimer[1]);
        }
        cmoveImg2($('#cosmetics'),1,-339);
    });
    $('#electronics .rightNav').click(function(){
        if(Ctimer[2]){
            clearInterval(Ctimer[2]);
        }
        cmoveImg2($('#electronics'),2,-439);
    });
    $('#digitals .rightNav').click(function(){
        if(Ctimer[3]){
            clearInterval(Ctimer[3]);
        }
        cmoveImg2($('#digitals'),3,-439);
    });
    $('#mobiles .rightNav').click(function(){
        if(Ctimer[4]){
            clearInterval(Ctimer[4]);
        }
        cmoveImg2($('#mobiles'),4,-439);
    });
    $('#sports .rightNav').click(function(){
        if(Ctimer[5]){
            clearInterval(Ctimer[5]);
        }
        cmoveImg2($('#sports'),5,-339);
    });
    $('#livings .rightNav').click(function(){
        if(Ctimer[6]){
            clearInterval(Ctimer[6]);
        }
        cmoveImg2($('#livings'),6,-339);
    });
    $('#babys .rightNav').click(function(){
        if(Ctimer[7]){
            clearInterval(Ctimer[7]);
        }
        cmoveImg2($('#babys'),7,-339);
    });
    $('#foods .rightNav').click(function(){
        if(Ctimer[8]){
            clearInterval(Ctimer[8]);
        }
        cmoveImg2($('#foods'),8,-339);
    });
    $('#books .rightNav').click(function(){
        if(Ctimer[9]){
            clearInterval(Ctimer[9]);
        }
        cmoveImg2($('#books'),9,-439);
    });
    $('#slide1 .rightNav').click(function(){
        if(Ctimer[10]){
            clearInterval(Ctimer[10]);
        }
        cmoveImg2($('#slide1'),10,-395);
    });
    $('#slide2 .rightNav').click(function(){
        if(Ctimer[11]){
            clearInterval(Ctimer[11]);
        }
        cmoveImg2($('#slide2'),11,-395);
    });
    $('#clothes .leftNav').click(function(){
        if(Ctimer[0]){
            clearInterval(Ctimer[0]);
        }
        cmoveImg($('#clothes'),0,439);
    });
    $('#cosmetics .leftNav').click(function(){
        if(Ctimer[1]){
            clearInterval(Ctimer[1]);
        }
        cmoveImg($('#cosmetics'),1,339);
    });
    $('#electronics .leftNav').click(function(){
        if(Ctimer[2]){
            clearInterval(Ctimer[2]);
        }
        cmoveImg($('#electronics'),2,439);
    });
    $('#digitals .leftNav').click(function(){
        if(Ctimer[3]){
            clearInterval(Ctimer[3]);
        }
        cmoveImg($('#digitals'),3,439);
    });
    $('#mobiles .leftNav').click(function(){
        if(Ctimer[4]){
            clearInterval(Ctimer[4]);
        }
        cmoveImg($('#mobiles'),4,439);
    });
    $('#sports .leftNav').click(function(){
        if(Ctimer[5]){
            clearInterval(Ctimer[5]);
        }
        cmoveImg($('#sports'),5,339);
    });
    $('#livings .leftNav').click(function(){
        if(Ctimer[6]){
            clearInterval(Ctimer[6]);
        }
        cmoveImg($('#livings'),6,339);
    });
    $('#babys .leftNav').click(function(){
        if(Ctimer[7]){
            clearInterval(Ctimer[7]);
        }
        cmoveImg($('#babys'),7,339);
    });
    $('#foods .leftNav').click(function(){
        if(Ctimer[8]){
            clearInterval(Ctimer[8]);
        }
        cmoveImg($('#foods'),8,339);
    });
    $('#books .leftNav').click(function(){
        if(Ctimer[9]){
            clearInterval(Ctimer[9]);
        }
        cmoveImg($('#books'),9,439);
    });
    $('#slide1 .leftNav').click(function(){
        if(Ctimer[10]){
            clearInterval(Ctimer[10]);
        }
        cmoveImg($('#slide1'),10,395);
    });
    $('#slide2 .leftNav').click(function(){
        if(Ctimer[11]){
            clearInterval(Ctimer[11]);
        }
        cmoveImg($('#slide2'),11,395);
    });
    $('#clothes .slide-nav').find('li').hover(function(){
        if(Ctimer[0]){
            clearInterval(Ctimer[0]);
        }
        var cloCurIndex;
        cloCurIndex = $('#clothes .slide-nav').find('li').index(this);
        var offset = (cloCurIndex - cIndex[0])*-439;
        cIndex[0] = cloCurIndex;
        console.log(offset);
        showImg3($('#clothes'),offset);
        showBtn($('#clothes'),cloCurIndex);
    });
    $('#cosmetics .slide-nav').find('li').hover(function(){
        if(Ctimer[1]){
            clearInterval(Ctimer[1]);
        }
        var cloCurIndex;
        cloCurIndex = $('#cosmetics .slide-nav').find('li').index(this);
        var offset = (cloCurIndex - cIndex[1])*-339;
        cIndex[1] = cloCurIndex;
        showImg3($('#cosmetics'),offset);
        showBtn($('#cosmetics'),cloCurIndex);
    });
     $('#electronics .slide-nav').find('li').hover(function(){
        if(Ctimer[2]){
            clearInterval(Ctimer[2]);
        }
        var cloCurIndex;
        cloCurIndex = $('#electronics .slide-nav').find('li').index(this);
        var offset = (cloCurIndex - cIndex[2])*-439;
        cIndex[2] = cloCurIndex;
        showImg3($('#electronics'),offset);
        showBtn($('#electronics'),cloCurIndex);
    });
     $('#digitals .slide-nav').find('li').hover(function(){
        if(Ctimer[3]){
            clearInterval(Ctimer[3]);
        }
        var cloCurIndex;
        cloCurIndex = $('#digitals .slide-nav').find('li').index(this);
        var offset = (cloCurIndex - cIndex[3])*-439;
        cIndex[3] = cloCurIndex;
        showImg3($('#digitals'),offset);
        showBtn($('#digitals'),cloCurIndex);
    });
      $('#mobiles .slide-nav').find('li').hover(function(){
        if(Ctimer[4]){
            clearInterval(Ctimer[4]);
        }
        var cloCurIndex;
        cloCurIndex = $('#mobiles .slide-nav').find('li').index(this);
        var offset = (cloCurIndex - cIndex[4])*-439;
        cIndex[4] = cloCurIndex;
        showImg3($('#mobiles'),offset);
        showBtn($('#mobiles'),cloCurIndex);
    });
       $('#sports .slide-nav').find('li').hover(function(){
        if(Ctimer[5]){
            clearInterval(Ctimer[5]);
        }
        var cloCurIndex;
        cloCurIndex = $('#sports .slide-nav').find('li').index(this);
        var offset = (cloCurIndex - cIndex[5])*-339;
        cIndex[5] = cloCurIndex;
        showImg3($('#sports'),offset);
        showBtn($('#sports'),cloCurIndex);
    });
        $('#livings .slide-nav').find('li').hover(function(){
        if(Ctimer[6]){
            clearInterval(Ctimer[6]);
        }
        var cloCurIndex;
        cloCurIndex = $('#livings .slide-nav').find('li').index(this);
        var offset = (cloCurIndex - cIndex[6])*-339;
        cIndex[6] = cloCurIndex;
        showImg3($('#livings'),offset);
        showBtn($('#livings'),cloCurIndex);
    });
        $('#babys .slide-nav').find('li').hover(function(){
        if(Ctimer[7]){
            clearInterval(Ctimer[7]);
        }
        var cloCurIndex;
        cloCurIndex = $('#babys .slide-nav').find('li').index(this);
        var offset = (cloCurIndex - cIndex[7])*-339;
        cIndex[7] = cloCurIndex;
        showImg3($('#babys'),offset);
        showBtn($('#babys'),cloCurIndex);
    });
        $('#foods .slide-nav').find('li').hover(function(){
        if(Ctimer[8]){
            clearInterval(Ctimer[8]);
        }
        var cloCurIndex;
        cloCurIndex = $('#foods .slide-nav').find('li').index(this);
        var offset = (cloCurIndex - cIndex[8])*-339;
        cIndex[8] = cloCurIndex;
        showImg3($('#foods'),offset);
        showBtn($('#foods'),cloCurIndex);
    });
        $('#books .slide-nav').find('li').hover(function(){
        if(Ctimer[9]){
            clearInterval(Ctimer[9]);
        }
        var cloCurIndex;
        cloCurIndex = $('#books .slide-nav').find('li').index(this);
        var offset = (cloCurIndex - cIndex[9])*-439;
        cIndex[9] = cloCurIndex;
        showImg3($('#books'),offset);
        showBtn($('#books'),cloCurIndex);
    });
      $('#slide1 .slide-nav').find('li').hover(function(){
        if(Ctimer[10]){
            clearInterval(Ctimer[10]);
        }
        var cloCurIndex;
        cloCurIndex = $('#slide1 .slide-nav').find('li').index(this);
        var offset = (cloCurIndex - cIndex[10])*-395;
        cIndex[10] = cloCurIndex;
        showImg3($('#slide1'),offset);
        showBtn($('#slide1'),cloCurIndex);
    }); 
    $('#slide2 .slide-nav').find('li').hover(function(){
        if(Ctimer[11]){
            clearInterval(Ctimer[11]);
        }
        var cloCurIndex;
        cloCurIndex = $('#slide2 .slide-nav').find('li').index(this);
        var offset = (cloCurIndex - cIndex[11])*-395;
        cIndex[11] = cloCurIndex;
        showImg3($('#slide2'),offset);
        showBtn($('#slide2'),cloCurIndex);
    });   
    Ctimer[0] = setInterval(function(){
        cmoveImg2($('#clothes'),0,-439);
    },4500);
    Ctimer[1] = setInterval(function(){
        cmoveImg2($('#cosmetics'),1,-339);
    },4500);
    Ctimer[2] = setInterval(function(){
        cmoveImg2($('#electronics'),2,-439);
    },4500); 
    Ctimer[3] = setInterval(function(){
        cmoveImg2($('#digitals'),3,-439);
    },4500); 
     Ctimer[4] = setInterval(function(){
        cmoveImg2($('#mobiles'),4,-439);
    },4500);
    Ctimer[5] = setInterval(function(){
        cmoveImg2($('#sports'),5,-339);
    },4500);
    Ctimer[6] = setInterval(function(){
        cmoveImg2($('#livings'),6,-339);
    },4500);
    Ctimer[7] = setInterval(function(){
        cmoveImg2($('#babys'),7,-339);
    },4500);
    Ctimer[8] = setInterval(function(){
        cmoveImg2($('#foods'),8,-339);
    },4500);
    Ctimer[9] = setInterval(function(){
        cmoveImg2($('#books'),9,-439);
    },4500);
    Ctimer[10] = setInterval(function(){
        cmoveImg2($('#slide1'),10,-395);
    },4500);
     Ctimer[11] = setInterval(function(){
        cmoveImg2($('#slide2'),11,-395);
    },4500);
    //通过点击切换到不同的版面
    $('#clothes .mt-tab').find('li').hover(function(){
        var aIndex = $('#clothes .mt-tab').find('li').index(this);
        $('#clothes .main').eq(aIndex).show().siblings().hide();
        $(this).addClass('select-tab').siblings().removeClass('select-tab');
    });
    $('#cosmetics .mt-tab').find('li').hover(function(){
        var aIndex = $('#cosmetics .mt-tab').find('li').index(this);
        $('#cosmetics .main').eq(aIndex).show().siblings().hide();
        $(this).addClass('select-tab').siblings().removeClass('select-tab');
    });
    $('#electronics .mt-tab').find('li').hover(function(){
        var aIndex = $('#electronics .mt-tab').find('li').index(this);
        $('#electronics .main').eq(aIndex).show().siblings().hide();
        $(this).addClass('select-tab').siblings().removeClass('select-tab');
    });
    $('#digitals .mt-tab').find('li').hover(function(){
        var aIndex = $('#digitals .mt-tab').find('li').index(this);
        $('#digitals .main').eq(aIndex).show().siblings().hide();
        $(this).addClass('select-tab').siblings().removeClass('select-tab');
    });
    $('#mobiles .mt-tab').find('li').hover(function(){
        var aIndex = $('#mobiles .mt-tab').find('li').index(this);
        $('#mobiles .main').eq(aIndex).show().siblings().hide();
        $(this).addClass('select-tab').siblings().removeClass('select-tab');
    });
    $('#sports .mt-tab').find('li').hover(function(){
        var aIndex = $('#sports .mt-tab').find('li').index(this);
        $('#sports .main').eq(aIndex).show().siblings().hide();
        $(this).addClass('select-tab').siblings().removeClass('select-tab');
    });
    $('#livings .mt-tab').find('li').hover(function(){
        var aIndex = $('#livings .mt-tab').find('li').index(this);
        $('#livings .main').eq(aIndex).show().siblings().hide();
        $(this).addClass('select-tab').siblings().removeClass('select-tab');
    });
    $('#babys .mt-tab').find('li').hover(function(){
        var aIndex = $('#babys .mt-tab').find('li').index(this);
        $('#babys .main').eq(aIndex).show().siblings().hide();
        $(this).addClass('select-tab').siblings().removeClass('select-tab');
    });
    $('#foods .mt-tab').find('li').hover(function(){
        var aIndex = $('#foods .mt-tab').find('li').index(this);
        $('#foods .main').eq(aIndex).show().siblings().hide();
        $(this).addClass('select-tab').siblings().removeClass('select-tab');
    });
    $('#books .mt-tab').find('li').hover(function(){
        var aIndex = $('#books .mt-tab').find('li').index(this);
        $('#books .main').eq(aIndex).show().siblings().hide();
        $(this).addClass('select-tab').siblings().removeClass('select-tab');
    });
    //分享区的轮播图
    var sIndex = 0;
    var sTimer = setInterval(function(){
         if(sIndex==5){
            sIndex = 0;
         }else{
            sIndex++;
         }
         showImg4(120);
    },3000);
    $('#share .sw').hover(function(){
        if(sTimer){
            clearInterval(sTimer);
        }
    },function(){
        sTimer = setInterval(function(){
            if(sIndex==5){
            sIndex = 0;
         }else{
            sIndex++;
         }
         showImg4(120);
        },3000);
    });
    function showImg4(offset){
        var top = $('#share .sw ul').position().top + offset;
        if(top<=-720){
            top = -720;
            $('#share .sw ul').animate({'top':top+'px'},1000,function(){
                $('#share .sw ul').css('top',-120+'px');
            });
        }else if(top>=0){
            top=0;
            $('#share .sw ul').animate({'top':top+'px'},1000,function(){
                $('#share .sw ul').css('top',-600+'px');
            });
        }else if(-720<top&&top<0){
            $('#share .sw ul').animate({'top':top+'px'},1000);
    }
}
})