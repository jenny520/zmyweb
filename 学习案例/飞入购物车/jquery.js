$(document).ready(function(){
	$('.btn-buy').click(function(){
         var img = $(this).parent().find('img');
         var fixImg = img.clone().css('opacity',0.75);
         $('body').append(fixImg);
         fixImg.css({
         	'z-index':900,
         	'display':'block',
         	'position':'absolute',
         	'left':img.offset().left+'px',
         	'top':img.offset().top+'px',
         });
         fixImg.animate({
         	'top':$('.fixBox').offset().top + 'px',
         	'left':$('.fixBox').offset().left + 'px',
         	'width':'20px',
         	'height':'32px'
         },'slow',function(){
         	fixImg.remove();
         })
	});
})