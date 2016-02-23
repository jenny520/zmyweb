$(document).ready(function(){
	$('#a-btn').button();
	$('#dragger').draggable();
	$('#droppable').droppable();
	$('#droppable').on('drop',function(event,ui){
		$(this).text('success');
	})
	$('#resizable').resizable();
	$('#submit').button();
	$('#selectable').selectable();
	$('#submit').on('click',function(){
		if($('#right').hasClass('ui-selected')){
			alert('回答正确');
		}
	});
	$('#sortable').sortable();
	$('#accordion').accordion();
	var avialableTags=['css','html','js','c++','java','android','ios','appla'];
	$('#tags').autocomplete({
		source:avialableTags
	});
	$('#datepicker').datepicker();
	$('#btn3').button().on('click',function(){
         $('#btn1').button();
         $('#btn2').button();
         $('#dialog').dialog();
         $('#btn1').click(function(){
         	$('#dialog').hide();
         });
	});
	var max =100;
	var current = 0;
	$('#progressbar').progressbar({
		max:100
	})
	setInterval(change,1000);
	function change(){
		current++;
		if(current>100){
			current = 0;
		}
		$('#progressbar').progressbar(
			'option','value',current
		);
	}
	$('#menu').menu({
		 position: {at: "left bottom" }
		});
	$('#slider').slider({
		slide:function(event,ui){
			$('#span-Value').text($('#slider').slider('option','value'));
		}
	})
})