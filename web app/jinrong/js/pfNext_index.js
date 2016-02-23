$(document).ready(function(){
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
})