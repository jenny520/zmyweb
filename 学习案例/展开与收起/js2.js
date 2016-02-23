function showdiv(obj){
	var x = obj.parentNode;
	var y = x.nextSibling;
	if(y.nodeType!=1){
		y=y.nextSibling;
	}
	y.style.display='block';
	x.style.display='none';
}
function hidediv(obj){
	var y = obj.parentNode.parentNode;
    var x = y.previousSibling;
    if(x.nodeType!=1){
    	x=x.previousSibling;
    }
    x.style.display='block';
    y.style.display='none';
}