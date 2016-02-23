window.onload = function () {
    var moocBox = document.getElementById('moocBox');
    var con1 = document.getElementById('con1');
    var con2 = document.getElementById('con2');
    con2.innerHTML = con1.innerHTML;
    function scroll(){
        if(moocBox.scrollLeft >=con1.offsetWidth){
            moocBox.scrollLeft = 0;
        }else{
            moocBox.scrollLeft++;
        }
    }
    var myScroll = setInterval(scroll,20);
    moocBox.onmouseover = function(){
        clearInterval(myScroll);
    }
    moocBox.onmouseout = function(){
        myScroll = setInterval(scroll,20);
    }
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var len = 5;
    var animated = false;
    var interval = 3000;
    var timer;
    function animate (offset) {
        if (offset == 0) {
            return;
        }
        animated = true;
        var time = 300;
        var inteval = 10;
        var speed = offset/(time/inteval);
        var left = parseInt(list.style.left) + offset;
        var go = function (){
            if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, inteval);
            }
                    else {
                        list.style.left = left + 'px';
                        if(left>-200){
                            list.style.left = -1100 * len + 'px';
                        }
                        if(left<(-1100 * len)) {
                            list.style.left = '-1200px';
                        }
                        animated = false;
                    }
                }
                go();
            }

            function showButton() {
                for (var i = 0; i < buttons.length ; i++) {
                    if( buttons[i].className == 'on'){
                        buttons[i].className = '';
                        break;
                    }
                }
                buttons[index - 1].className = 'on';
            }

            function play() {
                timer = setTimeout(function () {
                    next.onclick();
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 5) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-1100);
                showButton();
            }
            prev.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 5;
                }
                else {
                    index -= 1;
                }
                animate(1100);
                showButton();
            }

            for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick = function () {
                    if (animated) {
                        return;
                    }
                    if(this.className == 'on') {
                        return;
                    }
                    var myIndex = parseInt(this.getAttribute('index'));
                    var offset = -1100 * (myIndex - index);

                    animate(offset);
                    index = myIndex;
                    showButton();
                }
            }

            container.onmouseover = stop;
            container.onmouseout = play;

            play();
            tab();
    function tab(){
   var index=0;
  var timer=null;
  var lis=document.getElementById('notice-tit').getElementsByTagName('li');
  var divs=document.getElementById('notice-con').getElementsByTagName('div');
  for(var i=0;i<lis.length;i++){
    lis[i].id=i;
    lis[i].onmouseover=function(){
      clearInterval(timer);
      changeOption(this.id);
    }
    lis[i].onmouseout=function(){  
      timer=setInterval(autoPlay,2000);    
    }
  }
  
  if(timer){
    clearInterval(timer);
    timer=null;
  } 

  timer=setInterval(autoPlay,2000);

  function autoPlay(){
      index++;
      if(index>=lis.length){
         index=0;
      }
      changeOption(index);
  }

  function changeOption(curIndex){
    for(var j=0;j<lis.length;j++){
       lis[j].className='';
       divs[j].style.display='none';
    }
    lis[curIndex].className='select';
    divs[curIndex].style.display='block';
    index=curIndex;
  }
}

        }