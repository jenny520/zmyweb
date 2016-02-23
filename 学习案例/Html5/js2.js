window.onload = function(){
	var mycanvas = document.getElementById('mycanvas');
	mycanvas.style.width = '200px';
	mycanvas.style.height = '200px';
	// drawRect(mycanvas);
	drawImag(mycanvas);

}
function drawRect(obj){
	var ctx = obj.getContext('2d');
	ctx.fillStyle = '#FF80C0';
	// ctx.rotate(45);
	// ctx.translate(100,100);
	ctx.scale(2,0.5);
	ctx.fillRect(0,0,200,200);
}
function drawImag(obj){
	var ctx = obj.getContext('2d');
	var img = new Image();
	img.onload = function(){
         ctx.drawImage(img,0,0);
	}
	img.src = 'imge/t1.jpg';
}