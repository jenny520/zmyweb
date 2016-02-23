$(document).ready(function(){
	$(window).scroll(function(){
		var scrollTop = $('html,body').scrollTop() || $(document).scrollTop();
		if(scrollTop > 100){
	        var returnValue = IsPC();
	        if(returnValue){
	        	$('.toTop').click(function(){
	        		$('html,body').stop().animate({'scrollTop':0});
	        	});
	        }else{
	        	$('.toTop').tap(function(){
	        		$('html,body').stop().animate({'scrollTop':0});
	        	});
	        }
		}
	});
	
	// 判断浏览器是pc端还是移动端
	function IsPC(){  
	    var userAgentInfo = navigator.userAgent;  
	    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
	    var flag = true;  
	    for (var v = 0; v < Agents.length; v++) {  
	        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
	    }  
	    return flag;  
	}
	$('.search .choose-type').click(function(){
		console.log(3);
		$('.panel').removeClass('hide');
		var $listItem = $('.panel').find('.list-group-item');
		$.each($listItem,function(index){
			if(index > 0){
				$listItem.eq(index).click(function(){
					$(this).siblings().find('i').addClass('hide');
					var flag = $(this).find('i').hasClass('hide');
					var text = $(this).find('span').text();
					$('.search .choose-type').find('span').text(text);
					if(flag){
						$(this).find('i').removeClass('hide');
					}
				})
			}
		});
		$('.panel').click(function(){
			$('.panel').addClass('hide');
		})
	})
})