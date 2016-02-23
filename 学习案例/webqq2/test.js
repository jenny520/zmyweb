define(function(require,exports,module){
	function add (a,b){
		return a+b;
	}
	var oDiv1 = document.getElementById('box');
	console.log(oDiv1);
	exports.add = add;
})