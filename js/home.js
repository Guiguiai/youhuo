$(function () {
    //二级菜单
    $(".myyouhuo").hover(function () {
        $(".myyouhuo").css("background", "#eaeceb");
        $(".myyouhuo .icon-sjt").css("display", "block");
        $(".myyouhuo .icon-xjt").css("display", "none");
        $(".myyouhuo .my").css("display", "block");
    }, function () {
        $(".myyouhuo").css("background", "#fff");
        $(".myyouhuo .icon-sjt").css("display", "none");
        $(".myyouhuo .icon-xjt").css("display", "block");
        $(".myyouhuo .my").css("display", "none");
    })

    $(".services").hover(function () {
        $(".services").css("background", "#eaeceb");
        $(".services .icon-sjt").css("display", "block");
        $(".services .icon-xjt").css("display", "none");
        $(".services .help").css("display", "block");

    }, function () {
        $(".services").css("background", "#fff");
        $(".services .icon-sjt").css("display", "none");
        $(".services .icon-xjt").css("display", "block");
        $(".services .help").css("display", "none");

    })

    //点击叉叉关闭提示语
    $(".tips .icon-gb").click(function () {
        $(".tips").css("position", "absoulte").css("display", "none");
    })


    //鼠标划过商品参数出现笔和边框事件
    $('.content').hover(function () {
        var index = $('.content').index($(this));;
        //console.log(index);

        $('.content').eq(index).css('cursor', "pointer").css("border", "1px dashed #d0021b");
        $('.icon-bi').eq(index).css('display', "block").css("color", "#d0021b");
    }, function () {
        $('.icon-bi').css('display', "none");
        $('.content').css("border", "none");
    })
    //鼠标划过当前盒子出现灰色修改商品属性框
    $('.box').hover(function () {
        var index = $('.box').index($(this));;
        //console.log(index);
        $('.content').eq(index).css('cursor', "pointer").css("border", "1px dashed #9a9a9a");
        $('.icon-bi').eq(index).css('display', "block").css("color", "#9a9a9a");
    }, function () {
        $('.icon-bi').css('display', "none");
        $('.content').css("border", "none");
    })

    //鼠标点击笔修改颜色和规格的事件
    $('.icon-bi').click(function () {

    })

    //全选勾选全部商品

    $(document).on('click','.check',function(){
        var checkFlag = this.checked;
        
        if(checkFlag){
            $("input[type=checkbox]").prop("checked", true);
            $(".box").css("background", "#f5f5f5");
            var result = car.getTotalPrice();
            console.log(result);
            $(".totalNum").html(result.totalNumber);
            $(".totalPrice").html("&yen;"+Number(result.totalPrice).toFixed(2));

        }else{
            $("input[type=checkbox]").prop("checked", false);
            $(".box").css("background", "#fff");
            $(".totalNum").html(0);
            $(".totalPrice").html("&yen;" + "0.00");
            $(".pay").css("background", "#b0b0b0");
        }
    })

    //底部结算框固定
    var offsetHeight = $('.main')[0].offsetHeight;
    //console.log($('.main'));
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //console.log(scrollTop);
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    //console.log(clientHeight);
    if (offsetHeight > scrollTop + clientHeight) {
        $('.foot').addClass('calcu');
    }

    window.onscroll = function () {

        var ascrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(ascrollTop);
        var aclientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        var aoffsetHeight = $('.main')[0].offsetHeight;


        if (aoffsetHeight > ascrollTop + aclientHeight - 60) {
            //console.log(aoffsetHeight);
            $('.foot').addClass('calcu');
        } else {
            $('.foot').removeClass('calcu');
        }
    }


    //box单选框选中后背景色改变，数量相加，金额相加并显示到页面结算处；
    // $(".totalNum").html(0);
    //  $(".totalPrice").html("&yen;" + "0.00");
   
    // $(".main .checkbox").each(function () {
    $(".main").on("click",'.checkbox',function () {
        var sub = 0;
        var allMoney = 0.00;
        //console.log(sub,allMoney);
        //选中的个数
        var checkEle = $('.main .checkbox:checked');
        var checkNum = $('.main .checkbox:checked').length;
        if(checkNum == 0){
            $(".check").prop('checked',false);
            // $(".box").css("background", "#f5f5f5");
        }
        $.each($(".main .checkbox"),function(){
            if(this.checked){
                $(this).parents('.box').css('background','#f5f5f5');
            }else{
                $(this).parents('.box').css('background',"#fff");
            }
            
        })
       
        $.each(checkEle,function(){
            sub += parseInt( $(this).parents('.box').find('.num').val() );
            allMoney += parseFloat( $(this).parents('.box').find('.money').text() );
            $(this).parent().parent().css("background", "#f5f5f5");
            $(".pay").css("background", "#d0021b");
        });

        $(".totalNum").html(sub);
        $(".totalPrice").html("&yen;" + allMoney.toFixed(2));

    });
    

    //删除选中的商品
    var car = new Car();
    $(".deleteChecked").click(function () {
        $(".main .checkbox").each(function () {
            if ($(this).prop("checked") == true) {
                if (!confirm('确认删除？')) {
                    return;
                }
                car.delGoods(this.id);
            }
        });
    });

    //底部为您优选
    $(".bottom-tb .sp1").on("mouseover", function () {

        $(".bottom-tb .sp1").css("border-bottom", "3px solid #3a3a3a");
        $(".bottom-tb .sp1").siblings().css("border-bottom", "none");
    })
    $(".bottom-tb .sp2").on("mouseover", function () {

        $(".bottom-tb .sp2").css("border-bottom", "3px solid #3a3a3a");
        $(".bottom-tb .sp2").siblings().css("border-bottom", "none");
    })




























})
