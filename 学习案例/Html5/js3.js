var canvas;
var count=0;
var stage;
var txt;
window.onload = function(){
	canvas = document.getElementById('canvas');
	txt = new createjs.Text('Hello World','20px Arial','#ff7700');
	stage = new createjs.Stage(canvas);
	stage.addChild(txt);
	createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener('tick',handleTick);
}
function handleTick(e){
    count++;
    txt.text = 'Hello World'+count;
    stage.update();
}
