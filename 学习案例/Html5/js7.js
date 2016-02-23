window.onload = function(){
	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');
	// context.font = 'bold 80px arial';
	// context.strokeStyle = '#FF80C0';
	// context.fillStyle = '#00FF80';
	// context.font = 'bold 80px arial';
	// context.textAlign = 'center';
	// context.lineWidth = '5';
	// context.lineJoin = 'round';
	// context.fillText('HTML5',220,140);
	// context.strokeText('HTML5',220,140);
	// context.fillStyle = '#00FFFF';
	// context.fillRect(0,0,200,200);
	// context.beginPath();
	// context.lineWidth = '4';
	// context.strokeStyle = '#FF80C0'
	// context.fillStyle = '#80FF00';
	// context.arc(100,100,50,0,Math.PI*2,true);
	// context.stroke();
	// context.fill();
	// context.beginPath();
	// context.moveTo(126.7,185.6);
	// context.bezierCurveTo(116.5,192.0,85.4,160.2,85.4,160.2);
	// context.bezierCurveTo(85.4,160.2,50.5,187.6,41.2,179.9);
	// context.bezierCurveTo(31.9,172.1,52.5,132.8,52.5,132.8);
	// context.bezierCurveTo(52.5,132.8,15.7,108.1,20.2,96.8);
	// context.bezierCurveTo(24.7,85.6,68.4,93.1,68.4,93.1);
	context.font = '0.8em Arial';
	context.fillText('Canvas Text Arial size 0.8em',10,50);
	context.font = '2em Arial';
	context.fillText('Canvas Text Arial size 2em',10,100);
	context.font = '14px Arial';
	context.fillText('Canvas Text Arial size 14 pixels',10,140);
}