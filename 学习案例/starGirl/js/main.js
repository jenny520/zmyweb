var cav,ctx,w,h;
var girlPic,starPic;
var num = 60;
var stars = [];
var lastTime = 0;
var delTime = 0;
var switchy = false;
var life = 0;

function init(){
   cav = document.getElementById('canvas');
   ctx = cav.getContext('2d');
   w = cav.width;
   h = cav.height;
   document.addEventListener('mousemove',mousemove,false);
   girlPic = new Image();
   starPic = new Image();
   girlPic.src = 'images/girl.jpg';
   starPic.src = 'images/star.png';
   for(var i = 0;i < num;i++){
   	  var obj = new starObj();
   	  stars.push(obj);
   	  stars[i].init() 
   }
   lastTime = Date.now();
   gameloop()
}

document.body.onload = init
function gameloop(){
	window.requestAnimFrame(gameloop);
	var now = Date.now();
	delTime = now - lastTime;
	lastTime = now;
	drawBackground();
	drawGirl();
    drawStars();
    aliveUpdate();
}
function drawBackground(){
	ctx.fillStyle = '#393550';
	ctx.fillRect(0,0,w,h);
}
function drawGirl(){
    ctx.drawImage(girlPic,100,150,600,300);
}
function mousemove(e){
	if(e.offsetX || e.layerX){
		var px = e.offsetX == 'underfine' ? e.layerX : e.offsetX;
		var py = e.offsetY == 'underfine' ? e.layerY : e.offsetY;
		if(px > 100 && px < 700 && py > 150 && py < 450){
			switchy = true;
		}else{
			switchy = false;
		}
	}
}