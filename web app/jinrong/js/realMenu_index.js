$(function(){
	$('.current').click(function(){
		var flag = $('.panel').hasClass('hide');
		if(flag){
			$('.panel').removeClass('hide');
			$('.panel').click(function(){
				$(this).addClass('hide');
			});
			$('.panel').on('click','.sure',function(){
                // 发送ajax请求
			});
		}
	})
})