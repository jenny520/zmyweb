var ie = true ;
$(document).ready(function(){
	//判断是否是ie8及ie8以下
	var browser=navigator.appName; 
	var b_version=navigator.appVersion; 
	var version=b_version.split(";"); 
	if(version[1]==null||version[1]==""){
		var trim_Version=version[0].replace(/[ ]/g,""); 
	}else{
		var trim_Version=version[1].replace(/[ ]/g,""); 
	}
	
	if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0") 
	{ 
	ie = true ;
	} 
	else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0") 
	{ 
	ie = true ;
	} 
	else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0") 
	{ 
	ie = true ;
	} 
	else{
		$(".div_a,.div_b,.div_c,.div_d,.div_e,.div_f,.div_g").addClass("noie");	
		ie = false;
	}

   	//判断屏幕高度
    var wh = $(window).height();
    if (wh<650) {
    	$(".a1").attr("src","../img/a1lt.jpg");
    	$(".a2").attr("src","../img/a2lt.jpg");
    	$(".a3").attr("src","../img/a3lt.jpg");
    	$(".div_a").addClass("div_alt");
    }else{
    	$(".a1").attr("src","../img/a1.jpg");
    	$(".a2").attr("src","../img/a2.jpg");
    	$(".a3").attr("src","../img/a3.jpg");
    };
    
    $(window).scrollTop(0);

	pingback = new pingback();
    pingback.pv("onload");
    $("body").on("click",".btn_down",function(){
    	pingback.dl($(this).attr("type"),$(this).attr("id"));
    });
    $(".header").on("click","a",function(){
    	pingback.onclick($(this).attr("type"));
    });
 
 });
function supportCss3(a) {
    var b,
    c = ["webkit", "Moz", "ms", "o"],
    d = [],
    e = document.documentElement.style,
    f = function(a) {
        return a.replace(/-(\w)/g, 
        function(a, b) {
            return b.toUpperCase()
        })
    };
    for (b in c) d.push(f(c[b] + "-" + a));
    d.push(f(a));
    for (b in d) if (d[b] in e) return ! 0;
    return ! 1
}

function ab(){
	var a,b,r,num=0;
	r=20;
	num=182;
	for(i=25;i<=num;i++){
	a=Math.cos(i*Math.PI*(360*3.5/num)/182)*r-25+"px";	
	b=Math.sin(i*Math.PI*(360*3.5/num)/182)*r+10+"px";
	$(".b1").animate({left:a,top:b},0.1);
	}
}
 
$(window).load(function(){

	if (ie == false){ 
	$(".div_a,.div_alt").addClass("current");
   	var roundOpen = true,j = supportCss3("transition");
	$(".div_b").waypoint(function(){
		$(".div_b").addClass("current");
		if(roundOpen&&j){
			setTimeout("ab()", 1000);
			roundOpen = false;
		}
	    
	},{
		offset : "30%"
	}); 
	$(".div_c").waypoint(function(){
		$(".div_c").addClass("current");
	},{
		offset : "30%"
	}); 
	$(".div_d").waypoint(function(){
		$(".div_d").addClass("current");
	},{
		offset : "30%"
	}); 
	$(".div_e").waypoint(function(){
		$(".div_e").addClass("current");
	},{
		offset : "30%"
	});
	$(".div_f").waypoint(function(){
		$(".div_f").addClass("current");
	},{
		offset : "30%"
	});
	$(".div_g").waypoint(function(){
		$(".div_g").addClass("current");
	},{
		offset : "60%"
	});

	};

});


//pingback

	
function getCookie1(offset) { 
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1) endstr = document.cookie.length; 
	return unescape(document.cookie.substring(offset, endstr)); 
}
function getCookie2(name) { 
	var arg = name + "="; 
	var alen = arg.length; 
	var clen = document.cookie.length; 
	var i = 0; 
	while (i < clen) { 
		var j = i + alen; 
		if (document.cookie.substring(i, j) == arg) return getCookie1(j); 
		i = document.cookie.indexOf(" ", i) + 1; 
		if (i == 0) break; 
	} 
	return null; }
function setCookie(name, value, exptime, domain){
	var domain = domain ? domain : "ie.sogou.com";
	var exp  = new Date(); 
	exp.setTime(exp.getTime() + exptime);
	document.cookie = name + "=" + value + ";path=/;expires=" + exp.toGMTString() + ";domain=" + domain + ";"; 
}

var pingback = function(){
    var pingServerUrl = "http://ping.ie.sogou.com/";
    var n = new Date().getTime();
    var c = escape(n*1000+Math.round(Math.random()*1000));
    this.getUid = function(){
        var uid = "";
        if(getCookie2("SMYUV") != null) {
            uid = getCookie2("SMYUV");
        } else {
            uid = c;
            setCookie("SMYUV", uid, 2592000000, "sogou.com");
        }
        return uid;
    }   
    this.refurl = document.referrer == ""? "" : encodeURIComponent(document.referrer);
    this.pl = encodeURIComponent(window.location.href);
    this.u = this.getUid();
    this.onclick = function(type){
    	var t = escape((new Date().getTime())*1000+Math.round(Math.random()*1000));
        var clickImg =document.createElement('img');
        clickImg.src = pingServerUrl + "ct.GIF?t="+c+"&u="+ this.u +"&r="+this.refurl+"&pl="+this.pl+"&type=" +type;
    }
    this.dl = function(type,id){
        var clickImg =document.createElement('img');
        clickImg.src = pingServerUrl + "ct.GIF?t="+c+"&u="+ this.u +"&r="+this.refurl+"&pl="+this.pl+"&type=" +type+"&id="+id;
    }
    /*this.noflash=function(type){
    	var clickImg =document.createElement('img');
        clickImg.src = pingServerUrl + "pv.GIF?t="+c+"&u="+ this.u +"&r="+this.refurl+"&pl="+this.pl+"&type=" +type;
    }*/
    this.pv =  function(type){
        var clickImg =document.createElement('img');
        clickImg.src = pingServerUrl + "pv.GIF?t="+c+"&u="+ this.u +"&r="+this.refurl+"&pl="+this.pl+"&type=" +type;
    }
};




