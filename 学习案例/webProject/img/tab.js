// tasktab
window.onload = function(){
function setTab(name,cursel,n){
 for(i=1;i<=n;i++){
  var menu=document.getElementById(name+i);
  var con=document.getElementById("con_"+name+"_"+i);
  menu.className=i==cursel?"hover":"";
  con.style.display=i==cursel?"block":"none";
 }
}
var speed=50;
var demo = document.getElementById("demo");
 var demo1=document.getElementById("demo1");
 var demo2=document.getElementById("demo2");
   demo2.innerHTML=demo1.innerHTML;
   function Marquee(){
   if(demo2.offsetTop-demo.scrollTop<=0)
   demo.scrollTop-=demo1.offsetHeight;
   else{
   demo.scrollTop++;
   }
   }
   var MyMar=setInterval(Marquee,speed);
   demo.onmouseover=function() {clearInterval(MyMar)};
   demo.onmouseout=function() {MyMar=setInterval(Marquee,speed)};
 
}