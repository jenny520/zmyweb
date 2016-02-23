$(document).ready(function(){
	var scrolltop = 0;
    var tops=[];
    var r_tops = [];
    $('.first').each(function(index,value){
    	tops.push($(value).offset().top);
    });
    $.each(tops,function(index){
        r_tops.push(tops[index]-50);
    })
    console.log(r_tops);
    $(window).scroll(function(){
    	scrolltop = $('html,body').scrollTop()||$(document).scrollTop();
    	if(scrolltop > r_tops[0]){
            // $('#first').addClass('hideAni');
            if(scrolltop > r_tops[2]){
                $('.third').addClass('hideAni');
            }
            if(scrolltop > r_tops[3]){
                $('.four').addClass('hideAni');
            }
            if(scrolltop > r_tops[4]){
                $('.five').addClass('hideAni');
            }
            if(scrolltop > r_tops[5]){
                $('.six').addClass('hideAni');
            }
            if(scrolltop > r_tops[6]){
                $('.seven').addClass('hideAni');
            }
            if(scrolltop > r_tops[7]){
                $('.eight').addClass('hideAni');
            }
            if(scrolltop > r_tops[8]-200){
                $('.nine').addClass('hideAni');
            }
    	}
    })
})