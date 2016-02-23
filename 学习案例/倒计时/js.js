window.onload = function(){
	var date = new Date();
	// alert(date.getDay());
	var da = date.getDay();
	var year = date.getFullYear();
	var month = date.getMonth();
	var date = date.getDate();
	// var day = date.getDay();
	var arr = new Array(7);
	arr[0] = '星期一';
	arr[1] = '星期二';
	arr[2] = '星期三';
	arr[3] = '星期四';
	arr[4] = '星期五';
	arr[5] = '星期六';
	arr[6] = '星期日';
	document.getElementById('time').innerHTML = year + '年'+month + '月' + date + '日' + arr[da];
}