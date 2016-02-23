// JavaScript Document
function dragFalse(){return false;}
for(i in document.images)document.images[i].ondragstart=dragFalse;
for(i in document.links)document.links[i].ondragstart=dragFalse;

$(function(){
	if($(".bar10").length>0){
		$(".bar10 ul").each(function(){
			$(this).find("li").each(function(){
				$(this).click(function(){
					$(this).addClass("sel").addClass("num").prevAll().removeClass("num").addClass("sel").end().nextAll().removeClass("sel").removeClass("num");
					var con="";
					for(i=0;i<$(this).parent().parent().find("ul").length;i++){
						con+=$(this).parent().parent().find("ul").eq(i).find(".num").html();
						if(i!=$(this).parent().parent().find("ul").length-1){
							con+=",";
						}
					}
					$(".bar10con").val(con);
				});
			});
		});
	}
});

function atr(pass,num,time){
	var con = '<div class="cover"></div><div class="atrWindow"><b>'+pass+'</b><p>您的得分：<i>'+num+'分</i></p><span>答题时间：<em>'+time+'</em></span><strong class="btn" onclick="$(this).parent().prev().remove();$(this).parent().remove();">　　确 定　　</strong></div>';
	$(".cover,.atrWindow").remove();
	$("body").append(con);
	$(".cover,.atrWindow").show();
}