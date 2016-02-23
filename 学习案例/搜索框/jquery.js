$(document).ready(function(){
	$('#search_text').bind('click',function(){
		var searchText = $('#search_text').val();
		$.get('http://api.bing.com/qsonhs.aspx?q='+searchText,function(d){
             var d = d.AS.Results[0].Suggests;
             var html = '';
             for(var i = 0;i<d.length;i++){
             	html+='<li>'+d[i].Txt+'</li>';
             }
             $('#search_result').html(html);
             $('#search_list').show().css({
			top:$('#search_box').offset().top+$('#search_box').height()-17,
			left:$('#search_box').offset().left+127
		});
		})
	})
})