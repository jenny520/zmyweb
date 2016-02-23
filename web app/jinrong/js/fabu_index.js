$(document).ready(function(){
	var alist = $('.list .li1').find('a');
	var clist = $('.list .li2').find('.content');
	var a2list = $('.list .li2').find('a');
	$.each(alist,function(index,value){
		alist.eq(index).click(function(){
			a2list.removeClass('current');
			$('.new').removeClass('current');
			$(this).siblings().removeClass('current');
			$(this).addClass('current');
			clist.eq(index).removeClass('hide').siblings().addClass('hide');
		})
		clist.find('a').click(function(){
			$(this).addClass('current').siblings().removeClass('current');
			$('.new').addClass('current');
		})
	})
})