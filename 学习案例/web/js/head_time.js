	function showTime(){
		var now = new Date(); 
	    var mydate=new Array("星期一","星期二",'星期三',"星期四",'星期五','星期六','星期日');
		var year = now.getFullYear();
		var month = now.getMonth()+1;
		if(month<10){
		  month="0"+month;
		}
		var date = now.getDate();
		if(date<10){
		  date="0"+date;
		}
		
		var hour = now.getHours();
		if(hour<10){
			hour="0"+hour;
		}
		var minutes = now.getMinutes();
		if(minutes<10){
			minutes = "0"+minutes;
		}
		var seconds = now.getSeconds(); 
		if(seconds<10){
			seconds= "0"+seconds
		}	
		
		var day = now.getDay();
		
		
		var time ="<font color='#fff'>"+year+"-"+month +"-"+date +"  " +hour+":"+minutes+":"+seconds+' '+mydate[day-1]+"</font>";
		document.getElementById("showTimeDiv").innerHTML=time;
		setTimeout("showTime()",1000);
	}