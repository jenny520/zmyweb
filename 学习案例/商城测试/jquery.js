$(document).ready(function(){
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
})