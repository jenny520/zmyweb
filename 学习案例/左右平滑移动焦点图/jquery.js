$(document).ready(function(){
	var index = 0;
	var maximg = 5;
	var myTimer = null;
	var len =5;
	$('#myjquery').mouseover(function(){
		$(this).find('.nav').show();
	});
	$('#myjquery').mouseout(function(){
		$(this).find('.nav').hide();
	});
	//点击箭头
    $('#myjquery .rightNav').click(function(){
    	nextScroll();
    });
    $('#myjquery .leftNav').click(function(){
    	preScroll();
    });
    $('#myjqueryNav span').hover(function(){
        if(myTimer){
            clearInterval(myTimer);
        }
        index = $('#myjqueryNav span').index(this);
        myTimer = setTimeout(function(){
            showJqueryFlash(index);
            $('#jqueryContent').stop();
        },400);
    },function(){
        clearInterval(myTimer);
        myTimer = setInterval(function(){
            showJqueryFlash(index);
            index++;
            if(index==maximg){
                index=0;
            }
        },2000);
    });
    function showJqueryFlash(i){
        $('#myjqueryNav span').eq(i).addClass('current').siblings().removeClass('current');
    }
    $('#myjquery').hover(function(){
        if(myTimer){
            clearInterval(myTimer);
        }
    },function(){
        myTimer = setInterval(function(){
           nextScroll();
            },3000);
    });
    //自动播放
    myTimer = setInterval(function(){
    	nextScroll();
    },3000);
    //图片滑动展示
    function nextScroll(){
        var offset = $('#jqueryContent li').width()*-1;
        $('#jqueryContent').animate({
            'left':offset
        },300,function(){
            var firstImg = $('#jqueryContent li').first();
            $('#jqueryContent').append(firstImg);
            $('#jqueryContent').css('left','0px');
        });
        index = $('#jqueryContent li').attr('index');
        $('#myjqueryNav span').eq(index).addClass('current').siblings().removeClass('current');
        // if(myTimer){
        //     clearInterval(myTimer);
        // }
    }
    function preScroll(){
        var offset=$("#jqueryContent li").width()*-1;
        var lastImg = $('#jqueryContent li').last();
        $('#jqueryContent').prepend(lastImg);
        $('#jqueryContent').css('left',offset);
        $('#jqueryContent').animate({
            'left':0
        },300);
        index = $('#jqueryContent  li').attr('index')-1;
        $('#myjqueryNav span').eq(index).addClass('current').siblings().removeClass('current');
        // if(myTimer){
        //     clearInterval(myTimer);
        // }
    }
})
