$(document).ready(function() {
  var flag = true;
  $('.input-user').focus(function() {
    $(window).keyup(function() {
      if (flag) {
        var value = $('.input-user').val();
        if (value != '') {
          $('.btn-big').addClass('red-style');
        }
        flag = false;
      }
    });
  });
  $('.btn-big').click(function() {
     var boolean = true;
     var obj = new Object();
     if(TINY.box().required($('.input-user'))!==''){
        var text = TINY.box().required($('.input-user'));
        $('.input-user').parents('p').next().text(text);
        boolean = false;
     }else{
        obj.name = $('.input-user').val();
     }
     if(TINY.box().verfiyLength($('.input-psw'),6)!=''){
        var text = TINY.box().verfiyLength($('.input-psw'),6);
        $('.input-psw').parents('p').next().text(text);
        boolean = false;
     }else{
        obj.psw = $('.input-psw').val();
     }
     if(TINY.box().repeatPwd($('.input-psw'),$('.input-confirm'))!=''){
      var text = TINY.box().repeatPwd($('.input-psw'),$('.input-confirm'));
      $('.input-confirm').parents('p').next().text(text);
      boolean = false;
     }else{
      obj.rePsw = $('.input-confirm').val();
     }
     if(TINY.box().checkEmail($('.input-email'))!=''){
      var text = TINY.box().checkEmail($('.input-email'));
      $('.input-email').parents('p').next().text(text);
      boolean = false;
     }else{
      obj.email = $('.input-email').val();
     }
     if(boolean){
      //发送ajax请求
     }else{
      return false;
     }
  });
  $('.btn-code').click(function() {
    $('.panel').removeClass('hide');
    $('.panel .btn').click(function() {
      $('.panel').addClass('hide');
    })
  })
})