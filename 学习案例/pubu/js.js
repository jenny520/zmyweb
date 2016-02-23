window.onload=function(){

    waterfall('main','box');

    var dataInt={'data':[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'}]};
    
    window.onscroll=function(){
        if(checkScrollSlide()){
            var oParent = document.getElementById('main');// 父级对象
            for(var i=0;i<dataInt.data.length;i++){
                var oBox=document.createElement('div');
                oBox.className='box';
                oParent.appendChild(oBox);
                var oPic = document.createElement('div');
                oPic.className='pic';
                oBox.appendChild(oPic);
                var oImg=document.createElement('img');
                oImg.src='images/'+dataInt.data[i].src;
                oPic.appendChild(oImg);
            }
             waterfall('main','box');  
        }
    }
}

function waterfall(parent,box){
	//将main下的所有class为box的元素取出来
	var oParent = document.getElementById(parent);
    var oBoxs = getByClass(oParent,box);
    //计算整个页面显示的列数（页面宽/盒子宽）
    var oBoxW = oBoxs[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth/oBoxW);
    //设计main的宽数，并设计其对齐方式
    oParent.style.cssText='width:'+oBoxW*cols+'px;margin:0 auto'+';';
    var hArr=[];//存放每一列高度的数组
    for(var i=0;i<oBoxs.length;i++){
    	if(i<cols){
    		hArr.push(oBoxs[i].offsetHeight);
    	}else{
    		var minH=Math.min.apply(null,hArr);
        var index=getMinIndex(hArr,minH);
        oBoxs[i].style.position='absolute';
        oBoxs[i].style.top=minH+'px';
        oBoxs[i].style.left=oBoxs[index].offsetLeft+'px';
        hArr[index]+=oBoxs[i].offsetHeight;
    	}
    }
}
   //根据class来获取元素
function getByClass(parent,clsName){
  //用于存储所有class为box的元素
  var boxs=new Array(),
      cls = parent.getElementsByTagName('*');
  for(var i = 0,l=cls.length;i<l;i++){
  	if(cls[i].className==clsName){
  		boxs.push(cls[i]);
  	}
  }
  return boxs;
}
//获取最小高度的索引值
function getMinIndex(arr,val){
  for(var i in arr){
    if(arr[i]==val){
      return i;
    }
  }
}
//检测是否具备加载数据块的条件
function checkScrollSlide(){
  var oParent = document.getElementById('main');
  var oBoxs=getByClass(oParent,'box');
  var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
  var scrolltop = document.body.scrollTop || document.documentElement.scrollTop;
  var high = document.body.clientHeight||document.documentElement.clientHeight;
  // console.log(scrolltop+high);
  console.log(scrolltop+high);
  return ((lastBoxH<scrolltop+high)?true:false);
}
