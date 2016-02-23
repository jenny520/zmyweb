$(document).ready(function(){
	var index = 0;
	var myTimer = null;
	$('#myjquery').mouseover(function(){
		$('#myjquery').find('.nav').show();
	});
	$('#myjquery').mouseout(function(){
		$('#myjquery').find('.nav').hide();
	});
	$('#myjquery').hover(function(){
		clearInterval(myTimer);
	},function(){
		myTimer = setInterval(function(){
    	if(index==3){
    		index = 0;
    	}else{
    		index++;
    	}
    	showImg(-439);
    	showBtn(index);
    },4000);
	});
	$('#myjqueryNav span').hover(function(){
		if(myTimer){
			clearInterval(myTimer);
		}
		curIndex = $('#myjqueryNav span').index(this);
		var offset = (curIndex - index)*-439;
		index = curIndex;
		showImg(offset);
		showBtn(index);
	});
	$('#myjquery .rightNav').click(function(){
	 	if(myTimer){
	 		clearInterval(myTimer);
	 	}
	 	if (index == 3){
            index = 0;
        }
        else{
            index += 1;
        }
    	showImg(-439);
    	showBtn(index);
    });
    $('#myjquery .leftNav').click(function(){
    	if(myTimer){
    		clearInterval(myTimer);
    	}
    	if(index==0){
    		index = 3;
    	}else{
    		index--;
    	}
    	showImg(439);
    	showBtn(index);
    });
    myTimer = setInterval(function(){
    	if(index==3){
    		index = 0;
    	}else{
    		index++;
    	}
    	showImg(-439);
    	showBtn(index);
    },4000);
    function showBtn(i){
    	$('#myjquery span').eq(i).addClass('current').siblings().removeClass('current');
    }
	function showImg(offset){
		var left = $('#jqueryContent').position().left+offset;
		if(left<-1756){
			left = -2195;
			$('#jqueryContent').animate({
				'left':left+'px'
			},'normal',function(){
				$('#jqueryContent').css('left','-439px');
			});
		}else if(left>-439){
			left = 0;
			$('#jqueryContent').animate({
				'left':left + 'px'
			},'normal',function(){
				$('#jqueryContent').css('left','-1756px');
			});
		}else if(-1765<=left&&left<0){
			$('#jqueryContent').animate({'left':left+'px'},'normal');
		}
	}
})