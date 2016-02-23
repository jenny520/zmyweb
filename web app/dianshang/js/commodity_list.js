$(function(){
	$('.menu li').click(function(){
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$('.content .content-item').eq(index).removeClass('hide').siblings('.content-item').addClass('hide');
		return false;
	})
})