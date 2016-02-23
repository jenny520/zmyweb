define(['jquery'],function ($) {
	function ScrollTop(opts){
		this.opts = $.extend({},ScrollTop.DEFAULTS,opts);
		this.el = $('html,body');	
	}

	ScrollTop.prototype.move = function(){
		var opts = this.opts;
		var dest = this.opts.dest;
        if($(window).scrollTop() != dest){
        	if(!this.el.is(':animated')){
                this.el.animate({
                	'scrollTop':dest
                },opts.speed);
        	}
        }
	};

	ScrollTop.prototype.go = function(){
		var dest = this.opts.dest;
		if($(window).scrollTop() != dest){
           this.el.scrollTop(dest);
		}
	}
	ScrollTop.DEFAULTS = {
		dest:0,
		speed:800
	}

	return {
		ScrollTop:ScrollTop
	}
})