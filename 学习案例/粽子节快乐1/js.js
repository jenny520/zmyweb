;(function($){
	// 获取dom对象函数
	// var $ = function (id){
	// 	return document.getElementById(id);
	// };
	// 时间轴函数
   var Timerliner = function(){
   	this.order = [];
   	this.add = function(timerout,fn,log){
   		this.order.push({
   			timerout:timerout,
   			fn:fn,
   			log:log
   		});
   	};
   	this.start=function(ff){
        for(s in this.order){
        	(function(ms){
                var timerout = ms.timerout;
                var fn = ms.fn;
                var log = ms.log;
                timerout =Math.max(timerout -(ff||0),0);
                setTimeout(fn,timerout);
                setTimeout(function(){
                	console.log('timer->',timerout,'log->',log);
                },timerout);
        	})(this.order[s])
        }
   	};
   }
   // 初始场景
   var s = new Timerliner();
   // 粽子展开场景
   var s1 = new Timerliner();
   // 粽子旋转场景
   var s2 = new Timerliner();
   s.add(10,function(){
   	$('.zongziBox').addClass('zongzi-rock');
   	$('.cShengzi').click(function(){
   		s1.start();
   		$('.cShengzi').click(function(event) {
   			/* Act on the event */
   		});
   	});
   });
   s.start();
   // 定义，粽子展开的动画
   s1.add(50,function(){
   	$('.zongziBox').removeClass('zongzi-rock');
   	$('.text').addClass('text-in')
   });
   s1.add(100,function(){
   	$('.cShengzi').addClass('cShengzi2');
   });
   s1.add(500,function(){
   	$('.cShengzi').removeClass('cShengzi3').addClass('cShengzi4');
   });
   s1.add(1500,function(){
   	$('.cShengzi').removeClass('cShengzi4').addClass('cShengzi0');
   });
   s1.add(2000,function(){
   	$('.cZongzi').addClass('cZongzi-out');
   	$('.cZongzirou').addClass('cZongzirou-in');
   	$('.c-text1').addClass('c-text').addClass('c-text-view1');
   	$('.c-text2').addClass('c-text').addClass('c-text-mirror1');
   	$('.cZouye').addClass('cZouye-in');
   	$('.cYouye').addClass('cYouye-in');
   });
   s1.add(3000,function(){
   	$('.cZouye').addClass('cZouye-out');
   	$('.cYouye').addClass('cYouye-out');
   	$('.cDiye').addClass('cDiye-in');
   	s2.start();
   })
   s1.start();
   //定义粽子旋转
   s2.add(1000,function(){
   	$('.cZongzirou-in').addClass('cZongzirou-view_2');
   	$('.c-text1').removeClass('c-text-view1').addClass('c-text-view2');
   	$('.c-text2').removeClass('c-text-mirror1').addClass('c-text-mirror2');
   });
   s2.add(1200,function(){
   	$('.cZongzirou-in').removeClass('cZongzirou-view_2').addClass('cZongzirou-view_3');
   	$('.c-text1').removeClass('c-text-view2').addClass('c-text-view3');
   	$('.c-text2').removeClass('c-text-mirror2').addClass('c-text-mirror3');
   });
   s2.add(1400,function(){
   	$('.cZongzirou-in').removeClass('cZongzirou-view_3').addClass('cZongzirou-view_4');
   	$('.c-text1').removeClass('c-text-view3').addClass('c-text-view4');
   	$('.c-text2').removeClass('c-text-mirror3').addClass('c-text-mirror4');
   });
   s2.add(1600,function(){
   	$('.cZongzirou-in').removeClass('cZongzirou-view_4').addClass('cZongzirou-view_0');
   	$('.c-text1').removeClass('c-text-view4').addClass('c-text-view1');
   	$('.c-text2').removeClass('c-text-mirror4').addClass('c-text-mirror1');
   });
   // s2.add(3000,function(){
   // 	$('.cZongzirou-in').removeClass('cZongzirou-view_0').addClass('cZongzirou-view_4');
   // });
   // s2.add(3200,function(){
   // 	$('.cZongzirou-in').removeClass('cZongzirou-view_4').addClass('cZongzirou-view_3');
   // });
   // s2.add(3400,function(){
   // 	$('.cZongzirou-in').removeClass('cZongzirou-view_3').addClass('cZongzirou-view_2');
   // });
   // s2.add(3600,function(){
   // 	$('.cZongzirou-in').removeClass('cZongzirou-view_2');
   // });
})(jQuery);