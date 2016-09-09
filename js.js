/**
 * Created by Administrator on 2016/4/4.
 */
var nav = $('.nav>ul>li');
var all = $('.all');
var three = $('.three-one');

var newImage = new Array(5);
newImage[0] = "picture/1/OurEDA.png";
newImage[1] = "picture/1/redheart.png";
newImage[2] = "picture/1/redlamp.png";
newImage[3] = "picture/1/redtele.png";
newImage[4] = "picture/1/redpencil.png";

var oldImage = new Array(5);
oldImage[0] = "picture/1/OurEDA.png";
oldImage[1] = "picture/1/heart.png";
oldImage[2] = "picture/1/lamp.png";
oldImage[3] = "picture/1/tele.png";
oldImage[4] = "picture/1/pencil.png";

var newImage1 = new Array(6);
newImage1[0] = "picture/3/pm2.png";
newImage1[1] = "picture/3/UI2.png";
newImage1[2] = "picture/3/web2.png";
newImage1[3] = "picture/3/ip2.png";
newImage1[4] = "picture/3/ad2.png";
newImage1[5] = "picture/3/wp2.png";

var oldImage1 = new Array(6);
oldImage1[0] = "picture/3/pm.png";
oldImage1[1] = "picture/3/UI.png";
oldImage1[2] = "picture/3/web.png";
oldImage1[3] = "picture/3/ip.png";
oldImage1[4] = "picture/3/ad.png";
oldImage1[5] = "picture/3/wp.png";

function _scroll( obj, time ){
    $(document.body).animate({scrollTop:$(obj).offset().top}, time );
}



$(window).scroll(function(){
    var scrollTo = $(window).scrollTop();
    for ( var j = 1; j < 6; j++ ){
        if ( scrollTo < all.children('div').eq(j+1).offset().top - 150){
            if( j < 3 ) {
                nav.eq(j).find('img').attr('src',newImage[j]);
                nav.eq(j).addClass("select1");
                nav.eq(j).siblings().removeClass("select1");
                for ( var i = 1; i < 5; i++ ) {
                    if ( i == j )
                        continue;
                    nav.eq(i).find('img').attr('src',oldImage[i]);
                }
            }
            else{
                nav.eq(j-1).find('img').attr('src',newImage[j-1]);
                nav.eq(j-1).addClass("select1");
                nav.eq(j-1).siblings().removeClass("select1");
                for ( var k = 1; k < 5; k++ ){
                    if ( k == j-1 )
                        continue;
                    nav.eq(k).find('img').attr('src',oldImage[k]);
                }
            }
            break;
        }
    }
});


nav.click(function () {
    var $this = $(this);
    var index = nav.index(this);
    if (index < 3) {
        _scroll(all.children('div').eq(index),0);
    }

    else{
        _scroll(all.children('div').eq(index+1),0);
    }

});





nav.hover(function(){
        if(!($(this).hasClass('select1'))){
            var index = nav.index(this);
            $(this).find('img').attr('src',newImage[index]);
            $(this).addClass("select3");
        }

    },
    function(){
        if(!($(this).hasClass('select1'))){
            var index = nav.index(this);
            $(this).find('img').attr('src',oldImage[index]);
            $(this).removeClass("select3");
        }
    });






three.hover(function(){
        var index = three.index(this);
        $(this).find('img').attr('src',newImage1[index]);
        $(this).addClass("select2");
    },
    function(){
        var index = three.index(this);
        $(this).find('img').attr('src',oldImage1[index]);
        $(this).removeClass("select2");
    });



$('#btn').click(function () {
    var inf = $('.inf');
    for( var i = 0; i < 5; i++){
        if (inf[i].value==null||inf[i].value=="")
        {
            alert("请填写全部信息");
            break;
        }
    }

});


var imgArray = $('.scrollImg').find('.pic');
var imgController = $('.scrollImg-controller > ul >li');

function scroll(){
    for(var x = 0;x < 3; x ++){
        if(!(imgArray.eq(x).hasClass('none'))){
            imgArray.eq(x).addClass('none');
            imgController.eq(x).removeClass('imgHover');
            var idx = (x+1) % 3;
            imgArray.eq(idx).removeClass('none');
            imgController.eq(idx).addClass('imgHover');
            break;
        }
    }
}

$('#sbtn1').click(function () {
    for(var x = 0;x < 3; x ++){
        if(!(imgArray.eq(x).hasClass('none'))){
            imgArray.eq(x).addClass('none');
            imgController.eq(x).removeClass('imgHover');
            var idx = x-1 % 3;
            if ( x == 0 )
                idx = 2;
            imgArray.eq(idx).removeClass('none');
            imgController.eq(idx).addClass('imgHover');
            break;
        }
    }

});

$('#sbtn2').click(function () {
    scroll();

});


function scrollToImg(idx){
    for(var x = 0;x < 3; x++){
        imgArray.eq(x).addClass('none');
        imgController.eq(x).removeClass('imgHover');
    }
    imgArray.eq(idx).removeClass('none');
    imgController.eq(idx).addClass('imgHover');
}



$(document).ready(function(){


    var scrollInterval = setInterval(scroll,2000);
    imgController.mouseover(function(){
        $(this).addClass('imgHover');
        var idx = imgController.index(this);
        scrollToImg(idx);
        clearInterval(scrollInterval);
    });
    imgController.mouseout(function(){
        $(this).removeClass('imgHover');
        scrollInterval = setInterval(scroll,2000);
    });
});