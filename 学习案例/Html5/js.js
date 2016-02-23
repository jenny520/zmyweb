var boxObj,msgObj;
window.onload = function(){
	boxObj = document.getElementById('box');
	msgObj = document.getElementById('msg');
	imgObj = document.getElementById('img1');
	// boxObj.ondragenter = function(e){
 //         var e = e || window.event;
 //         showObj(e);
	// }
    imgObj.ondragstart = function(e){
    	e = e || window.event;
    	e.dataTransfer.setData('img',e.target.id);
    }
	boxObj.ondragover = function(e){
		var e = e || window.event;
        e.preventDefault()
	}
	boxObj.ondrop = function(e){
		var e = e || window.event;
		showObj(e.dataTransfer);
		boxObj.appendChild(document.getElementById(e.dataTransfer.getData('img')));
	}
}
function showObj(obj){
    var s = '';
    for(var k in obj){
    	s+=k + ':' + obj[k] + '</br>';
    }
    msgObj.innerHTML = s;
}