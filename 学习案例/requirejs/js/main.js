require.config({
	paths:{
		jquery:'jquery-1.7.2'
	}
});
require(['jquery','scrollTo'],function($,scrollTo){

	var scroll = new scrollTo.ScrollTop({
          dest:0,
          speed:200
    });

    $('#toTop').on('click',$.proxy(scroll.move,scroll));

    $(window).on('scroll',function(){
    	checkPosition($(window).height());
    });
    checkPosition($(window).height());
    function move(){
    	$('body,html').animate({'scrollTop':'0px'},300);
    }
    function checkPosition(pos){
        if($(window).scrollTop() > pos){
        	$('#toTop').fadeIn('normal');
        }else{
        	$('#toTop').fadeOut('normal');
        }
    }

})
