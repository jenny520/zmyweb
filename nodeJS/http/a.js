var c = 0;
function print(){
	console.log(c);
}
function plus(){
	setTimeout(function(){
		c+=1;
		console.log(c);
	},1000)
	console.log(c);
}
plus()
print()