$(function () {
    //var wenzhi = $("#txtLoginNo").val();
   
    $("#txtLoginNo").focus(function () {
        if ($("#txtLoginNo").val() == "请输入6~12位账号") {
            //wenzhi.val();
            $("#txtLoginNo").val("");
        }
    })
    $("#txtLoginNo").blur(function () {
        if ($("#txtLoginNo").val() == "") {
            $("#txtLoginNo").val("请输入6~12位账号");
        }
    })
})