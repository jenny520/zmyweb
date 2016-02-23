$(document).ready(function(){
		var defaultWidth = 180;
		var defaultHeight = 100;
		$('.jiugong li').each(function(){
			$(this).hover(function(){
				$(this).css('z-index',20);
				$('a',this).css({'z-index':40,'margin':'-1px 0px 0px -1px'});
				$('.top',this).stop().animate({'top':-defaultHeight+'px'},200);
				$('.right',this).stop().animate({'left':-defaultWidth+'px'},200);
				$('.bottom',this).stop().animate({'top':defaultHeight+'px'},200);
				$('.left',this).stop().animate({'left':defaultWidth+'px'},200);
			},function(){
				$(this).css('z-index',10);
				$('a',this).css({'z-index':10,'margin':'0px'});
				$('img').animate({'top':'0px','left':'0px'},300);
			});
		});
})