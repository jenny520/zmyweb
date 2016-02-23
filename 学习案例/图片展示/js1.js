 var lis = document.getElementById("orgImg").getElementsByTagName("li");
  for(var i =0;i<lis.length;i++){
	  lis[i].onmouseover = showDetail;
	  lis[i].onmouseout = hideDetail;
	}
 var lastLi;
 var j = lis.length;
 while(j){
 	if(j%3==0){
        lastLi = lis[j-1];
        lastLi.getElementsByTagName("dl")[0].style.left='auto';
        lastLi.getElementsByTagName("dl")[0].style.right=316+'px';
 	}
 	j--;
 }
 function showDetail(){
 	this.getElementsByTagName('dl')[0].style.display = 'block';
 }
 function hideDetail(){
 	this.getElementsByTagName('dl')[0].style.display = 'none';
 }