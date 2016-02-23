function ajax(url,fnsucee,fnfail){
	             var xmlhttp;
            	if(window.XMLHttpRequest){
            		xmlhttp = new XMLHttpRequest();
            	}else{
            		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            	}
                //链接服务器
                //open(方法，文件名，是否异步加载)
                xmlhttp.open('GET',url,true);
                //发送请求
                xmlhttp.send();
                //接收返回
                xmlhttp.onreadystatechange=function(){
                    //readystate反应服务器接收到哪一步
                    if(xmlhttp.readyState==4&&xmlhttp.status==200){
                    	// alert(xmlhttp.responseText);
                    	fnsucee(xmlhttp.responseText);
                    }else{
                    	if(fnfail){
                    		fnfail(xmlhttp.status);
                    	}
                    }
                }
}