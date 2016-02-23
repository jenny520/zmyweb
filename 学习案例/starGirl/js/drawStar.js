var starObj = function (){
	this.x;
	this.y;
	this.picNo;
	this.timer;
	this.xspeed;
	this.yspeed;
}

starObj.prototype = {
	init: function(){
		this.x = Math.random()*600+100;
		this.y = Math.random()*300+150;
		this.picNo = Math.floor(Math.random()*7);
		this.timer = 0;
		this.xspeed = Math.random()*3-1.5;
		this.yspeed = Math.random()*3-1.5;
	},
	update: function(){
		this.timer += delTime;
		this.x += this.xspeed*delTime*0.001;
		this.y += this.yspeed*delTime*0.001;
		//if x的距离超出边界，就重新生成
		if(this.x>700||this.x<100){
			this.init();
			return;
		}
        //if y的距离超出边界，就重新生成
        if(this.y > 450||this.y<150){
        	this.init();
        	return;
        }
		if(this.timer > 50){
           this.picNo +=1;
		   this.picNo %= 7;
		   this.timer = 0;
		}
	},
	draw: function(){
		ctx.save();
		ctx.globalAlpha = life;
		ctx.drawImage(starPic,21,this.picNo,7,7,this.x,this.y,7,7);
		ctx.restore();
	}
}

function drawStars(){
	for(var i = 0;i<num;i++){
		stars[i].update()
		stars[i].draw()
	}
}
function aliveUpdate(){
	if(switchy){
		life += 0.03 * delTime * 0.05;
		if(life > 1){
			life = 1;
		}
	}else{
		life -= 0.03 * delTime * 0.05;
		if(life < 0){
			life = 0;
		}
	}
}