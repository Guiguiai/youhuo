// 国家下滑
$("#country-code").click(function (e) {
    $("#country-list").slideToggle();
    $(document).click(function(){
        $("#country-list").slideUp();
    });
    e.stopPropagation();
});
$("#country-list li").click(function () {
    var index = $(this).index();
    var guojia = $("#country-list li").eq(index).text();
    $("#country-code em").html(guojia);
});

// 普通登录
$(".switch .left").click(function () {
    $(".switch .left").addClass("selected");
    $(".switch .right").removeClass("selected");
    $(".sms-login").addClass("hide");
    $(".password-login").removeClass("hide");
    // 清空手机号
    $("#account2").removeClass("error");
    $("#account2").siblings().addClass("hide");
    $("#account2").val("");
});
// 账号为空
$("#account1").blur(function () {
    var account1 = $("#account1").val();
    if (account1 === "") {
        $("#account1").addClass("error");
        $("#account1").siblings().removeClass("hide");
        $("#account1").siblings().children("em").html("请输入账户名");
    }
});
$("#account1").focus(function () {
    $("#account1").removeClass("error");
    $("#account1").siblings().addClass("hide");
});

// 密码为空
$("#password").blur(function () {
    var password = $("#password").val();
    if (password === "") {
        $("#password").addClass("error");
        $("#password").siblings().removeClass("hide");
        $("#password").siblings().children("em").html("请输入密码");
    } else if (!(/[0-9A-Za-z]{6,20}/).test(password)) {
        $("#password").addClass("error");
        $("#password").siblings().removeClass("hide");
        $("#password").siblings().children("em").html("请输入长度为6-20字符的密码");
    }
});
$("#password").focus(function () {
    $("#password").removeClass("error");
    $("#password").siblings().addClass("hide");
});


// 手机验证登录
$(".switch .right").click(function () {
    $(".switch .left").removeClass("selected");
    $(".switch .right").addClass("selected");
    $(".password-login").addClass("hide");
    $(".sms-login").removeClass("hide");
    // 清空用户名
    $("#account1").removeClass("error");
    $("#account1").siblings().addClass("hide");
    $("#account1").val("");
    // 清空密码
    $("#password").removeClass("error");
    $("#password").siblings().addClass("hide");
    $("#password").val("");

});
// 手机号码为空
$("#account2").blur(function () {
    var account2 = $("#account2").val();
    if (account2 === "") {
        $("#account2").addClass("error");
        $("#account2").siblings().removeClass("hide");
        $("#account2").siblings().children("em").html("请输入手机号");
    } else if ((/^(?![0-9]+$)/).test(account2)) {
        $("#account2").addClass("error");
        $("#account2").siblings().removeClass("hide");
        $("#account2").siblings().children("em").html("手机号码不正确，请重新输入");
    } else {
        $("#account2").removeClass("error");
        $("#account2").siblings().addClass("hide");
    }
});
$("#account2").focus(function () {
    $("#account2").removeClass("error");
    $("#account2").siblings().addClass("hide");
});



// 扫码登录

// 二维码移动
$("#qrcode-hover").hover(function () {
    $("#qrcode-container").stop(true, true);
    $("#qrcode-container").animate({
        left: "0px"
    },function(){
        $("#qrcode-helper").removeClass("hide");
    });
}, function () {
    $("#qrcode-container").stop(true, true);
    $("#qrcode-container").animate({
        left: "65px"
    });
    $("#qrcode-helper").addClass("hide");
});

// 扫码登录 会员登录切换
// 自定义toggle方法
$.fn.toggle = function (fn, fn2) {
    let args = arguments,
        guid = fn.guid || $.guid++,
        i = 0,
        toggler = function (event) {
            let lastToggle = ($._data(this, "lastToggle" + fn.guid) || 0) % i;
            $._data(this, "lastToggle" + fn.guid, lastToggle + 1);
            event.preventDefault();
            return args[lastToggle].apply(this, arguments) || false;
        };
    toggler.guid = guid;
    while (i < args.length) {
        args[i++].guid = guid;
    }
    return this.click(toggler);
};
// 点击切换
$("#device-bg").toggle(function () {
    $("#device-bg").removeClass("type-desktop-bg");
    $("#device-bg").addClass("type-mobile-bg");
    $(".desktop-login").removeClass("hide");
    $(".mobile-login").addClass("hide");
    $("#device-tip").html("扫码登录更安全");
}, function () {
    $("#device-bg").removeClass("type-mobile-bg");
    $("#device-bg").addClass("type-desktop-bg");
    $(".mobile-login").removeClass("hide");
    $(".desktop-login").addClass("hide");
    $("#device-tip").html("密码登录在这里");
});

// 登录
$("#login-btn").click(function () {
    var account1 = $("#account1").val();
    var password = $("#password").val();
    if(account1 === "" && password === ""){
        $("#account1").addClass("error");
        $("#account1").siblings().removeClass("hide");
        $("#account1").siblings().children("em").html("请输入账户名和密码");
        $("#password").addClass("error");
        $("#password").siblings().addClass("hide");
        return;
    }else if(account1 === ""){
        $("#account1").addClass("error");
        $("#account1").siblings().removeClass("hide");
        $("#account1").siblings().children("em").html("请输入账户名");
        return;
    }else if(password === ""){
        $("#password").addClass("error");
        $("#password").siblings().removeClass("hide");
        $("#password").siblings().children("em").html("请输入密码");
        return;
    }else if(!(/[0-9A-Za-z]{6,20}/).test(password)){
        return;
    }
    var params = {
        "account1": account1,
        "password": password
    };
    $.post("./php/denglu.php", params, function (res) {
        if (res.code == 200) {
            location.href = "./index.html";
        } else if (!(/^1\d{10}$/.test(account1))) {
            $("#password").addClass("error");
            $("#password").siblings().removeClass("hide");
            $("#password").siblings().children("em").html("账户必须是邮箱或手机号");
            $("#password").val("");
        } else {
            $("#password").addClass("error");
            $("#password").siblings().removeClass("hide");
            $("#password").siblings().children("em").html("账户名或密码不正确,建议您找回登录密码或者联系在线客服");
        }
    }, "json");

})