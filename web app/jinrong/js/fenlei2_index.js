$(document).ready(function(){
	checkMin();
	var dateSource = {
		'date':[
		    {'src':'p3.png','text':'你能否通过银行借款审批？','name':'admin','num':1,'num1':23},
		    {'src':'p4.png','text':'你能否通过银行借款审批？','name':'admin','num':1,'num1':23},
		    {'src':'p5.png','text':'你能否通过银行借款审批？','name':'admin','num':1,'num1':23},
		    {'src':'p3.png','text':'你能否通过银行借款审批？','name':'admin','num':1,'num1':23},
		    {'src':'p4.png','text':'你能否通过银行借款审批？','name':'admin','num':1,'num1':23},
		    {'src':'p5.png','text':'你能否通过银行借款审批？','name':'admin','num':1,'num1':23},
            {'src':'p3.png','text':'你能否通过银行借款审批？','name':'admin','num':1,'num1':23},
		    {'src':'p4.png','text':'你能否通过银行借款审批？','name':'admin','num':1,'num1':23},
		    {'src':'p5.png','text':'你能否通过银行借款审批？','name':'admin','num':1,'num1':23},
		    {'src':'p3.png','text':'你能否通过银行借款审批？','name':'admin','num':1,'num1':23},
		    {'src':'p4.png','text':'你能否通过银行借款审批？','name':'admin','num':1,'num1':23},
		    {'src':'p5.png','text':'你能否通过银行借款审批？','name':'admin','num':1,'num1':23},
		    {'src':'p3.png','text':'你能否通过银行借款审批？','name':'admin','num':1,'num1':23},
		    {'src':'p4.png','text':'你能否通过银行借款审批？','name':'admin','num':1,'num1':23},
		    {'src':'p5.png','text':'你能否通过银行借款审批？','name':'admin','num':1,'num1':23}
		]
	};
	$(window).scroll(function(){
		if(checkSolid){
			$.each(dateSource.date,function(index,value){
				var  $list = $('.list')
				var liNode = $('<li>').appendTo($list);
				var contentNode = $('<div class="l-content"/>').appendTo(liNode);
				var imgNode = $('<p class="p-img"/>').appendTo(contentNode);
				var aNode = $('<a href="#"/>').appendTo(imgNode);
				var img = $('<img>').attr('src','../images/'+ dateSource.date[index].src).appendTo(aNode);
				var textNode = $('<p class="p-text"/>').appendTo(contentNode);
				var atNode = $('<a href="#"/>').appendTo(textNode).text(dateSource.date[index].text);
				var pNode = $('<div class="p-name"/>').appendTo(liNode);
				var aName = $('<a href="#" class="name"/>').appendTo(pNode);
				var a1Node = $('<a href="#"/>').appendTo(pNode);
				var iNode = $('<i class="iconfont"/>').appendTo(a1Node).html('&#xe61c;');
				var emNode = $('<em/>').appendTo(a1Node).text(dateSource.date[index].num);
				var i1Node = $('<i class="iconfont bg"/>').appendTo(a1Node).html('&#xe612;');
				var em1Node = $('<em/>').appendTo(a1Node).text(dateSource.date[index].num1);
			});
            checkMin();
		}
	})
    function checkMin(){
    	var $box = $('.list li');
    	var w = Math.floor($box.eq(0).outerWidth(true));
    	var hArr = [];
    	$box.each(function(index,value){
    		var h = $box.eq(index).outerHeight();
            if(index < 2){
                hArr[index] = h;
            }else{
                var minH = Math.min.apply(null,hArr);
                var minIndex = $.inArray(minH,hArr);
                $(value).css({
                	'position': 'absolute',
                	'top': minH+10+ 'px',
                	'left': minIndex * w + 'px'
                });
                hArr[minIndex] += $box.eq(index).outerHeight();
            }
    	})
    }
	function checkSolid(){
		var $lastBox = $('.list li').last();
        var lastBoxDis = $lastBox.offset().top + Math.floor($lastBox.height() / 2);
        var scrollTop = $(window).scrollTop();
        var documentH = $(document).height();
        return ((lastBoxDis < scrollTop + documentH) ? true:false);
	}
})