// 获取国家
$("#region").change(function () {
    var option = $("#region option:checked").attr('value');
    $("#country-code").html(option);
});


//手机号码验证 不能为空
$("#phone").on("input change", function () {
    var phone = $(this).val();
    if (phone === "") {
        $("#err-tip").css({
            display: "block",
            left: "60px",
            top: "12px"
        });
        $("#err-tip>span").html("请输入手机号码");
        $("#phone").css("border", "1px solid red");
    } else if (!(/^1\d{10}$/.test(phone))) {
        $("#err-tip").css({
            display: "block",
            left: "60px",
            top: "12px"
        });
        $("#err-tip>span").html("手机号码格式不正确,请重新输入");
        $("#phone").css("border", "1px solid red");
    } else {
        $("#err-tip").css("display", "none");
        $("#err-tip>span").html("");
        $("#phone").css("border", "1px solid #dbdbdb");
    }
});



// 密码不能为空
$("#pwd").focus(function () {
    $("#pwd-tips").removeClass("hide");
});
$("#pwd").blur(function () {
    $("#pwd-tips").addClass("hide");
});
// 密码格式
$("#pwd").on("input change", function () {
    var pwd = $(this).val();
    if (pwd === "") {
        $("#pwd-tip1").removeClass("no");
        $("#pwd-tip1").removeClass("yes");
        $("#err-tip").css({
            display: "block",
            left: "0px",
            top: "150px"
        });
        $("#err-tip>span").html("请输入密码");
        $("#pwd").css("border", "1px solid red");
    } else if (!(/[0-9A-Za-z]{6,20}/).test(pwd)) {
        $("#pwd-tip1").removeClass("yes");
        $("#pwd-tip1").addClass("no");
        $("#err-tip").css({
            display: "block",
            left: "0px",
            top: "150px"
        });
        $("#err-tip>span").html("密码只支持6-20位字符");
        $("#pwd").css("border", "1px solid red");
    } else if (!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+$/).test(pwd)) {
        $("#pwd-tip1").removeClass("yes");
        $("#pwd-tip1").addClass("no");
        $("#err-tip").css({
            display: "block",
            left: "0px",
            top: "150px"
        });
        $("#err-tip>span").html("密码须字母和数字组合");
        $("#pwd").css("border", "1px solid red");
    } else {
        $("#pwd-tip1").removeClass("no");
        $("#pwd-tip1").addClass("yes");
        $("#err-tip").css("display", "none");
        $("#err-tip>span").html("");
        $("#pwd").css("border", "1px solid #dbdbdb");
    }
});



// 注册提交
$("#register-btn").click(function () {
    var phone = $("#phone").val();
    var pwd = $("#pwd").val();
    if (pwd === "" || !(/[0-9A-Za-z]{6,20}/).test(pwd) || !(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+$/).test(pwd) || phone === "" || !(/^1\d{10}$/.test(phone))) {
        return;
    }
    var params = {
        "phone": phone,
        "pwd": pwd
    };
    $.post("./php/zhuche.php", params, function (res) {
        if (res.code == 200) {
            layer.alert('注册成功', {
                skin: 'layui-layer-molv',
                closeBtn: 0
            }, function () {
                location.href = "./denglu.html";
            });
        }
    }, "json");
});