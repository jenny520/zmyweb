var imgContainer,msgObj;
window.onload = function(){
	imgContainer = document.getElementById('lcontainer');
	msgObj = document.getElementById('msg');
	//设置dragstart事件
	
    //设置被放置何处事件
	imgContainer.ondragover = function(e){
        var e = e || window.event;//为了兼容浏览器
        e.preventDefault()//阻止事件的默认属性
	}
	//设置drop事件
	imgContainer.ondrop = function(e){
		var e = e || window.event;
		e.preventDefault();
		var file = e.dataTransfer.files[0];
		var fr = new FileReader();
		fr.onload = function(e){
			imgContainer.innerHTML = "<img src=\""+fr.result+"\">"
		}
		fr.readAsDataURL(file);
	}
}
function showObj(obj){
    var s = '';
    for(var k in obj){
    	s+=k + ':' + obj[k] + '</br>';
    }
    msgObj.innerHTML = s;
}