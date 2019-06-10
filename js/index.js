// var index = 0;
//     var timer = setInterval(animate,3000);
//     function animate(){
//         index++;
//         // console.log(index);
//         $('.silder > ul > li').eq(index).fadeIn().siblings().fadeOut();
//         $('.silder > ul > li').eq(index).addClass('show_img').siblings().removeClass('show_img');
//         $('.img_list >li').eq(index).addClass('focus').siblings().removeClass('focus');
//         if(index == $('.silder > ul li').length-1){
//             index = -1;
//     }
// }
//固定的二维码关闭事件
(function delQr(){
    $('.qr').on('click',function(){
        // $(this).addClass('delqr');
        $(this).css('display','none');
    });
})();
//回到顶部
(function returnTop(){
    $(window).scroll(function(){
        if($(window).scrollTop() == 0){
            // console.log($(window).scrollTop());
            $('.right_float').addClass('hide');
        }else{
            $('.right_float').removeClass('hide');
        }
    });
    $('.return_top').on('click',function(){
        $('body,html').animate({ scrollTop: 0 }, 1000);
    });
    $('.f_qr>a').hover(function(){
        $('.download_app_box').css('display','block');
    },function(){
        $('.download_app_box').mouseover(function(){
        });
        $('.download_app_box').mouseleave(function(){
            $('.download_app_box').css('display','none');
        });
    });
})();
//下拉菜单
(function menuHover(){
    $('.top_inner .inner_l').hover(function(){
        $('.yoho_group_list').css('display','block');
    },function(){
        $('.yoho_group_list').css('display','none');
    });
    $('.top_inner .inner_l ul li a').hover(function(){
        var index = $('.top_inner .inner_l ul li').index();
        var _temp = $(this).eq(index).attr("data-cn");
        // console.log(_temp);
        $(this).eq(index).html(_temp).css('color','#000000');
        
    },function(){
        index = $('.top_inner .inner_l ul li').index();
        _temp = $(this).eq(index).attr("data-en");
        $(this).eq(index).html(_temp).css('color','#9196a0');
    });
})();

function dropDown(ele1, ele2) {
    $(ele1).hover(function () {
        $(ele2).css('display', 'block');
    }, function () {
        $(ele2).css('display', 'none');
    });
}
dropDown('.inner_r ul .drop_down', '.inner_r ul .drop_down .nav_drop_down');
dropDown('.inner_r ul .down_load', '.inner_r .down_load .download_app');
dropDown('.inner_r ul .mobile_load', '.inner_r ul .mobile_load .download_app');
dropDown('.m_inner ul li:nth-child(3)','.m_inner ul li .third');
dropDown('.m_inner ul li:nth-child(4)','.m_inner ul li .four');
dropDown('.m_inner ul li:nth-child(5)','.m_inner ul li .five');
dropDown('.m_inner ul li:nth-child(6)','.m_inner ul li .six');

// 主页面图片hover透明度变化
(function changeOpacity(){
    $('#page img').hover(function(){
        $(this).css('opacity','0.8');
    },function(){
        $(this).css('opacity','1');
    });
})();