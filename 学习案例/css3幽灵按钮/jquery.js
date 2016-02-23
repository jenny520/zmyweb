$(document).ready(function(){
	$('.link .button').hover(function(){
		var title = $(this).attr('data');
		$('.tip em').text(title);
	    var pos = $(this).position().left;
	    var dis = ($('.tip').outerWidth() - $(this).outerWidth())/2;
	    $('.tip').css({'left':pos-dis+'px'}).stop().animate({'top':'150px','opacity':1},300);
	},function(){
		if(!$('.tip').is(':animated');
		$('.tip').stop().animation({'top':'130px','opacity':0},300);
	});
})