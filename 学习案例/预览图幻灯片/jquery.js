$(document).ready(function(){
	var data = [
	{img:1,h1:'Creative',h2:'DUET'},
	{img:2,h1:'Friendly',h2:'DELVE'},
	{img:3,h1:'Tranquilent',h2:'COMPATRION'},
	{img:4,h1:'Insecure',h2:'HUSSLER'},
	{img:5,h1:'Loving',h2:'RESEL'},
	{img:6,h1:'Passionate',h2:'SEEKER'},
	{img:7,h1:'Crazy',h2:'FRIEND'}
		];
	function addSlider(){
		// 获取模板
		var tplmain = $('#template-main').html().replace(/^\s*/,'').replace(/\s*$/,'');
		var tplctrl = $('#template-ctrl').html().replace(/^\s*/,'').replace(/\s*$/,'');
		// 定义最终输出的变量
		var out_main = [];
		var out_ctrl = [];
		//遍历所有数据，构建最终输出的HTML
		for(i in data){
			var _main = tplmain.replace(/{{index}}/g,data[i].img)
			                    .replace(/{{h1}}/g,data[i].h1)
			                    .replace(/{{h2}}/g,data[i].h2)
			                    .replace(/{{css}}/g,['','main-i-right'][i%2]);
			var _ctrl = tplctrl.replace(/{{index}}/g,data[i].img);
			out_main.push(_main);
			out_ctrl.push(_ctrl);
		}
		// 增加一个背景图片
		var main_bg = tplmain.replace(/{{index}}/g,'{{index}}')
		                     .replace(/{{h1}}/g,data[1].h1)
		                     .replace(/{{h2}}/g,data[1].h2);
		out_main.push(main_bg);
		//把html会写到DOM里面
		$('#template-main').html(out_main.join(' '));
		$('#template-ctrl').html(out_ctrl.join(' '));
	    $('.main-i').last().attr('id','main-bg');
	    // 设置幻灯片的margin-top
		$('.pic').each(function(){
			var pHeight = $(this).height()/2;
			$(this).css('margin-top',-pHeight);
		});
	}
	addSlider();
	switchSlider(1);
	// 清空所有幻灯片的样式
	$('.ctrl-i').each(function(i){
		$(this).click(function(){
			switchSlider(i+1);
		});
	});
	// 幻灯片切换
	function switchSlider(n){
	   $('.main-i').each(function(){
	   	 $(this).removeClass('main-i-active');
	   });
	   $('.ctrl-i').each(function(){
	   	$(this).removeClass('ctrl-i-active');
	   });
       $('#main-'+n).addClass('main-i-active');
       $('#ctrl-'+n).addClass('ctrl-i-active');
       var curhtml = $('#main-'+n).html();
       setTimeout(function(){
          $('#main-bg').html(curhtml);
       },1000)
	}
})