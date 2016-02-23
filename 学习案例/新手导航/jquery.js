$(document).ready(function(){
	$('#mask,#searchTip,#searchTip div:eq(0)').show();
	$('#searchTip div a').click(function(){
		var current = $(this).parent();
		current.hide();
		current.next().show();
	});
	$('#searchTip div span,#searchTip div a:last').click(function(){
		$('#mask,#searchTip').hide();
	});
})