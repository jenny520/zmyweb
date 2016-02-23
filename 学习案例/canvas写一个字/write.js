/**
 * Created by zhoumeiyan on 16/1/17.
 */

var canvasWidth,canvasHeight;
canvasWidth = canvasHeight = Math.min(600,$(window).width()*0.8);
$('.controll').width(Math.min(600,$(window).width()*0.8));
var isMouseDown = false;
var lastloc = {x:0,y:0};
var lastTimer = 0;
var lastLineWidth = -1;
var strokStyle = 'black';
var eventType = [];
var canvas = document.getElementById('canvas');
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var ctx = canvas.getContext('2d');
drawGrid()
$('.clearBtn').click(function(){
    ctx.clearRect(0,0,canvasWidth,canvasHeight);
    drawGrid();
    return false;
})
$('.col').click(function(){
    $(this).addClass('selected').siblings('.col').removeClass('selected');
    strokStyle = $(this).css('background-color');
})
if(browserRedirect()){
    eventType.push('touchstart','touchmove','touchend');
}else{
    eventType.push('mousedown','mousemove','mouseup','mouseout');
}
canvas.addEventListener(eventType[0],function(e){
    e.preventDefault();
    var point = {};
    if(e.type == 'touchstart'){
        touch = e.touches[0];
        point = {x: touch.pageX,y: touch.pageY}
    }else{
        point = {x: e.clientX,y: e.clientY};
    }
    beginStroke(point)
},false)
canvas.addEventListener(eventType[1],function(e){
    e.preventDefault();
    var point = {};
    if(e.type == 'touchmove'){
        touch = e.touches[0];
        point = {x: touch.pageX,y: touch.pageY}
    }else{
        point = {x: e.clientX,y: e.clientY};
    }
    moveStroke(point);
})
canvas.addEventListener(eventType[2],function(e){
    e.preventDefault();
    endStroke()
})
var minLineWidth = 1,
    maxLineWidth = 30,
    minStrokeSpeed = 0.1,
    maxStrokeSpeed = 10;
function calSpeed(t,s){
    var v = s/t;
    var resultLineWidth;
    if(v < minStrokeSpeed){
        resultLineWidth = maxLineWidth;
    }else if(v > maxStrokeSpeed){
        resultLineWidth = minLineWidth;
    }else{
        resultLineWidth = maxLineWidth - (v-minStrokeSpeed)/(maxStrokeSpeed-minStrokeSpeed)*(maxLineWidth-minLineWidth);
    }
    if(lastLineWidth == -1){
        return resultLineWidth;
    }
    return lastLineWidth*2/3 + resultLineWidth*1/3;
}
function beginStroke(obj){
    isMouseDown = true;
    lastloc = windowTocanvas(obj.x,obj.y);
    lastTimer = new Date().getTime();
}
function moveStroke(obj){
    if(isMouseDown){
        var curLoc = windowTocanvas(obj.x,obj.y);
        var curTimer = new Date().getTime();
        var s = calcdistance(curLoc,lastloc);
        var t = curTimer - lastTimer;
        var lineWidth = calSpeed(t,s);
        ctx.beginPath();
        ctx.moveTo(lastloc.x,lastloc.y);
        ctx.lineTo(curLoc.x,curLoc.y);
        ctx.strokeStyle = strokStyle;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
        ctx.closePath();
        lastloc = curLoc;
        lastTimer = curTimer;
        lastLineWidth = lineWidth;
    }
}
function endStroke(){
    isMouseDown = false;
}
function calcdistance(loc1,loc2){
    return Math.sqrt((loc1.x - loc2.x)*(loc1.x - loc2.x)+(loc1.y - loc2.y)*(loc1.y-loc2.y));
}
function windowTocanvas(x,y){
    var bbox = canvas.getBoundingClientRect();
    return {
        x: Math.round(x-bbox.left),
        y: Math.round(y-bbox.top)
    }
}
function drawGrid(){
    ctx.save();
    ctx.strokeStyle = 'rgb(230,11,9)';
    ctx.beginPath();
    ctx.moveTo(4,4);
    ctx.lineTo(canvasWidth-4,4);
    ctx.lineTo(canvasWidth-4,canvasWidth-4);
    ctx.lineTo(4,canvasWidth-4);
    ctx.closePath();
    ctx.lineWidth = 8;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(canvasWidth,canvasHeight);
    ctx.moveTo(canvasWidth,0);
    ctx.lineTo(0,canvasHeight);
    ctx.moveTo(canvasWidth/2,0);
    ctx.lineTo(canvasWidth/2,canvasHeight);
    ctx.moveTo(0,canvasHeight/2);
    ctx.lineTo(canvasWidth,canvasHeight/2);
    ctx.closePath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#f50';
    ctx.stroke();
    ctx.restore();
}

function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return true;
    } else {
        return false;
    }
}
