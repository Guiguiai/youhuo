function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
    }
    return(false);
}
var temp =getQueryVariable("temp");
$.ajax({
    url: "./index.json",
    type: "get",
    success: function (res) {
        var img = res[temp].img;
        var price = res[temp].price;
        var title = res[temp].title;
        var number = res[temp].number;
        var content = res[temp].content;
        var imgmax = res[temp].imgmax;
        var idid = res[temp].id;
        $("#img-show").attr("src", img);
        $(".thumb").attr("src", img);
        $(".price").html(price);
        $(".name").html(title);
        $("#num").html(number);
        $(".color-name").html(content);
        $("li.focus>img").attr("src", img);
        $("#big").attr("src", imgmax);
        $(".idid").html(idid);
        $("title").html(title)
    }
});
// 尺码
var index;
$(".size>li").click(function () {
    num = 1;
    index = $(this).index();
    $(".size>li").eq(index).addClass("focus");
    $(".size>li").eq(index).siblings().removeClass("focus");
    $("#num").html(num);
    $(".warn-tip").addClass("hide");
});
//数量加减
var num = 1;
$("#minus-num").click(function () {
    if (num > 1) {
        $("#num").html(num -= 1);
    }
});
$("#plus-num").click(function () {
    if ($(".size>li").hasClass("focus")) {
        $("#num").html(num += 1);
    } else {
        $(".warn-tip").removeClass("hide");
    }
});

$("#add-to-cart").click(function () {
    if (!($(".size>li").hasClass("focus"))) {
        $(".warn-tip").removeClass("hide");
    }
})


//放大镜效果
$(function () {
    $(".move-over").hover(function () {
        $(".move-object").removeClass("hide");
        $(".max").removeClass("hide");
    }, function () {
        $(".move-object").addClass("hide");
        $(".max").addClass("hide");
    });
    //鼠标在图片上滑动的时候，获取中心点的位置

    $(".move-over").on("mousemove", function (e) {
        e = e || window.event;
        var _x = e.pageX; //鼠标在页面上的位置；
        var _y = e.pageY;
        //console.log(_y);
        var x = _x - $("#min-img").offset().left - $(".move-object").width() / 2;
        var y = _y - $("#min-img").offset().top - $(".move-object").height() / 2;

        //判断xy不能从图片框里出来
        if (x < 0) {
            x = 0;
        } else if (x > ($(".move-over").width() - $(".move-object").width())) {
            x = $(".move-over").width() - $(".move-object").width();
        }

        if (y < 0) {
            y = 0;
        } else if (y > ($(".move-over").height() - $(".move-object").height())) {
            y = $(".move-over").height() - $(".move-object").height();
        }

        $(".move-object").css({
            left: x + "px",
            top: y + "px"
        });
        //大图片的移动比例
        var a = x / ($(".move-over").width() - $(".move-object").width());
        var b = y / ($(".move-over").height() - $(".move-object").height());

        $("#big").css({
            left: -a * ($("#big").width() - $("#max").width()) + "px",
            top: -b * ($("#big").height() - $("#max").height()) + "px",
            position: "absolute"
        });

    });

});

// 点击加入购物车
var index=$(".size>li").index();
$("#add-to-cart").click(function () {
    if ($(".size>li").hasClass("focus")) {
        var img = $("#img-show")[0].src;
        var title = $(".name").html();
        var content = $(".color-name").html();
        var price = $(".price").html();
        var number = $("#num").html();
        var id = $(".idid").html();
        var focus=$(".size>li").eq(index).html();
        var goods = {
            "id": id,
            "img": img,
            "title": title,
            "content":"颜色："+ content+"尺码："+focus,
            "price": price,
            "number":parseInt(number)
        };
        var car = new Car();
        car.addCar(goods); //加入购物车
    } else {
        $(".warn-tip").removeClass("hide");
    }
});