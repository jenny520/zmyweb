$(document).ready(function(){
	$('.nav li').hover(function(){
		$(this).css('background-color','#74A01C');
	},function(){
		$(this).css('background-color','#96BF43');
	});
		var index = 0;
		var maximg = 5;
		var myTimer = null;
		//滑动导航改变内容
		$('#myjquery').mouseover(function(){
			$('#myjquery').find('.nav').show();
		});
		$('#myjquery').mouseout(function(){
			$('#myjquery').find('.nav').hide();
		});
		$('#myjquery .rightNav').click(function(){
	         moveImg('next');
		});
		$('#myjquery .leftNav').click(function(){
		     moveImg('prev');
		})
		$('#myjqueryNav li').hover(function(){
			if(myTimer){
				clearInterval(myTimer);
			}
			index = $('#myjqueryNav li').index(this);
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
		//滑入停止动画，滑出开始
		$('#jqueryContent').hover(function(){
			if(myTimer){
				clearInterval(myTimer);
			}
		},function(){
			myTimer = setInterval(function(){
				showJqueryFlash(index);
				index++;
				if(index == maximg){
					index = 0;
				}
			},2000);
		});
		//自动播放
		myTimer = setInterval(function(){
			showJqueryFlash(index);
			index++;
			if(index==maximg){
				index=0;
			}
		},2000);
		
		//展示图片
		function showJqueryFlash(i){
			$('#jqueryContent div').eq(i).animate({'opacity':1},1000).css('z-index',1);
			$('#jqueryContent div').eq(i).siblings().animate({'opacity':0},1000).css('z-index',0);
			$('#myjqueryNav li').eq(i).addClass('current').siblings().removeClass('current');
		}
		function moveImg(obj){
	        if(obj=='next'){
	        	if(myTimer){
	         	clearInterval(myTimer);
	         }
	         index++;
	         if(index==maximg){
	         	index = 0;
	         	}
	        }else if(obj=='prev'){
	        	if(myTimer){
	        		clearInterval(myTimer);
	        	}
	        	index--;
	        	console.log(index);
	        	if(index == -1){
	        		index = 4;
	        	}
	        }
	         showJqueryFlash(index);
	         $('#jqueryContent').stop();
		}
})