$(document).ready(function(){
	var index = 0;
	$('.login-style li').click(function(){
        index = $('.login-style li').index($(this));
        $(this).addClass('active').siblings().removeClass('active');
        $('.register-content').eq(index).removeClass('hide').siblings().addClass('hide');
    });
    var flag = true;
       $('.input-style').focus(function(){
       	$(window).keyup(function(){
       		if(flag){
               var value = $('.input-style').val();
               if(value!=''){
                   $('.btn-big').addClass('red-style');
               }
               flag = false;
       		}
       	});
       });
       $('.btn-big').click(function(){
       	var re = /^1[3|5|8][0-9]{9}$/;
       	var value = $('.input-style').val();
       	if(re.test(value)){
       		// 发送ajax请求
       	}else{
       		$('#user-msg').text('手机号码输入错误');
          return false;
       	}
       });
})