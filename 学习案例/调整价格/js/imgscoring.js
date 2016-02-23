//图片滚动
var _c = _h = 0;
$(document).ready(function () {
    $('#play  li').click(function(){
        var i = $(this).attr('alt') - 1;
        clearInterval(_h);
        _c = i;
        //play();
        change(i);       
    })
    $("#pic img").hover(function(){clearInterval(_h)}, function(){play()});
    play();
})
function play()
{
    _h = setInterval("auto()", 3000);
 
}
function change(i)
{
    $('#play li').css('background-color','#000000').eq(i).css('background-color','#FF3000').blur();
    $("#pic img").fadeOut('slow').eq(i).fadeIn('slow');
}
function auto()
{   
    _c = _c > 2 ? 0 : _c + 1;
 
    change(_c);
}