$(function(){
	 var beforeShowCls = 'beforeShow'

    $('.section1').removeClass(beforeShowCls);
    
    $(window).scroll(function(){
        $('.section').each(function(){
            var section = $(this);
            var bound = section.offset().top - $(window).scrollTop();
            if(bound < 50){
                section.removeClass(beforeShowCls).siblings('.section').addClass(beforeShowCls);
            }
        });
    });
})