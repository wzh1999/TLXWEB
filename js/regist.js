function checkNo($txtObj) {
    var len = $txtObj.val().length;
    if (len == 0) {
        $txtObj.siblings("span").text("账号必填");
        return false;
    }
    if (len<6||len>12) {
        $txtObj.siblings("span").text("账号的长度在6到12位之间");
        return false;
    }
    $txtObj.siblings("span").addClass("spanBlurOk").text("");
    return true;
}
function checkPwd($txtObj)
{
    var len = $txtObj.val().length;
    if (len == 0) {
        $txtObj.siblings("span").text("密码必填");
        return false;
    }
    if (len < 6 || len > 12) {
        $txtObj.siblings("span").text("密码的长度在6到12位之间");
        return false;
    }
    $txtObj.siblings("span").addClass("spanBlurOk").text("");
    return true;
}
function checkConfirm($txtObj) {
    var len = $txtObj.val().length;
    var pwd = $("#txtPwd").val();
    if (len == 0) {
        $txtObj.siblings("span").text("确认密码必填");
        return false;
    }
    if (pwd!=$txtObj.val()) {
        $txtObj.siblings("span").text("两次输入的密码不一致");
        return false;
    }
    $txtObj.siblings("span").addClass("spanBlurOk").text("");
    return true;
}
function checkName($txtObj) {
    var len = $txtObj.val().length;
    if (len == 0) {
        $txtObj.siblings("span").text("姓名必填");
        return false;
    }
    if (len < 2 || len > 6) {
        $txtObj.siblings("span").text("姓名的长度在2到6位之间");
        return false;
    }
    $txtObj.siblings("span").addClass("spanBlurOk").text("");
    return true;
}
function checkPhone($txtObj) {
    var phoneReg = /^(13|15|18)\d{9}$/;
    var len = $txtObj.val().length;
    if (len == 0) {
        $txtObj.siblings("span").text("手机号必填");
        return false;
    }
    if (!phoneReg.test($txtObj.val())) {
        $txtObj.siblings("span").text("手机格式错误");
        return false;
    }
    $txtObj.siblings("span").addClass("spanBlurOk").text("");
    return true;
}
function checkId($txtObj) {
    var idReg = /^\d{15}$|^\d{18}$/;
    var len = $txtObj.val().length;
    if (len == 0) {
        $txtObj.siblings("span").text("身份证必填");
        return false;
    }
    if (!idReg.test($txtObj.val())) {
        $txtObj.siblings("span").text("身份证格式错误");
        return false;
    }
    $txtObj.siblings("span").addClass("spanBlurOk").text("");
    return true;
}
function check() {
    var flag = checkNo($("#txtNo")) && checkPwd($("#txtPwd")) && checkConfirm($("#txtConfirmPwd")) && checkName($("#txtName"))
    && checkId($("#txtId")) && checkPhone($("#txtPhone"));
    return flag;
}
function getFocus($txtObj)
{
    $txtObj.removeClass("txtInit").addClass("txtFocus");
    $txtObj.siblings("span").removeClass("spanBlurOk");
}
function loseFocus($txtObj) {
    $txtObj.removeClass("txtFocus").addClass("txtInit");
  
}
$(function () {
    $("#txtNo").trigger("focus");
    $("#txtNo").focus(function () {
        getFocus($(this));        
    })
    $("#txtNo").blur(function () {
        loseFocus($(this));
        checkNo($(this));
    })
    $("#txtPwd").focus(function () {
        getFocus($(this));
    })
    $("#txtPwd").blur(function () {
        loseFocus($(this));
        checkPwd($(this));
    })
    $("#txtConfirmPwd").focus(function () {
        getFocus($(this));
    })
    $("#txtConfirmPwd").blur(function () {
        loseFocus($(this));
        checkConfirm($(this));
    })
    $("#txtName").focus(function () {
        getFocus($(this));
    })
    $("#txtName").blur(function () {
        loseFocus($(this));
        checkName($(this));
    })
    $("#txtId").focus(function () {
        getFocus($(this));
    })
    $("#txtId").blur(function () {
        loseFocus($(this));
        checkId($(this));
    })
    $("#txtPhone").focus(function () {
        getFocus($(this));
    })
    $("#txtPhone").blur(function () {
        loseFocus($(this));
        checkPhone($(this));
    })
})