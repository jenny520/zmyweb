(function($){
   
})(jQuery);
/*左右划开始*/
var sw,sh;
function setSlide(a){
	sw = document.documentElement.clientWidth;
	sh = sw*a;
	$(".slide,.slide ul,.slide li").css({"height":sh});
	$(".slide ul").css("width",sw*$(".slide li").length);
	$(".slide li").css("width",sw);
	if($(".slide p").length<1){
		var con = "<p>";
		for(i=0;i<$(".slide li").length;i++){
			con+="<i></i>";
		}
		con+="</p>";
		$(".slide").append(con).find("i").eq(0).addClass("sel");
	}
}

function slideNext(){
	if($(".slide .sel").next().is("i")){
		$(".slide .sel").next().addClass("sel").siblings().removeClass("sel");
		$(".slide ul").stop().animate({"margin-left":-sw*$(".slide .sel").index()},500)
	}
}
function slidePrev(){
	if($(".slide .sel").prev().is("i")){
		$(".slide .sel").prev().addClass("sel").siblings().removeClass("sel");
		$(".slide ul").stop().animate({"margin-left":-sw*$(".slide .sel").index()},500)
	}
}
/*左右划结束*/

