var curIndex = 1;
function next(){
	var curPage = document.getElementById('page'+curIndex);
	curPage.style.webkitTransform = 'rotateX(-90deg)';
	curIndex++;
	var nextPage = document.getElementById('page'+curIndex);
	nextPage.style.webkitTransform = 'rotateX(0deg)';
	console.log(curIndex);
}