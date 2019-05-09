//图片灯箱特效
function picLight() {
    var settings = {
        containerResizeSpeed: 350, //设置一个数字，表示图片间相互切换的速度，单位为毫秒
        overlayOpacity: 0.5//设置一个数字，表示背景色的透明度
    };
    $('#luxian a[title]').lightBox(settings);
    //获取有'title'属性的<a>标签，其href的属性是图片地址
}
//计算价格的jq
function calTotal() {
    var sum = 0;
    $("#shop-xx li.rs").each(function () {
        sum = sum + parseFloat($(this).text().substr(1));
    });
    $("#jine span").html("&yen;" + sum);
}
//遮罩层
function showMask() {
    var bh = $("body").height();
    var bw = $("body").width();
    $(".mask").css({
        height: bh + "px",
        width: bw + "px",
        display:"block"
    })
}
//删除
function setDialog() {
    var $wObj = $(window);//当前浏览器的窗口
    var $dObj = $(".dialog");//当前窗口
    var widW = $wObj.width();
    var widH = $wObj.height();
    var diaW = $dObj.width();
    var diaH = $dObj.height();
    var left = (widW - diaW) / 2;
    var top = (diaW - diaH) / 2;
    $dObj.css({ "left": left, "top": top });
}
var isMulDel=false
$(function () {
    picLight();
    calTotal();//计算总价的函数
    //删除操作
    var DelRowId = 0;
    $("a.btnDel").click(function () {
        DelRowId = $(this).parents("ul").attr("id");
        showMask();
        setDialog();
        $(".dialog").show();
    })
    //$(".coutent p").click(function () {
    //    $(".mask,.dialog").hide();
    //})
    $("#closePic").click(function () {
        $(".mask,.dialog").hide();
    })
    $("#btnSure").click(function () {
        if (!isMulDel) {
            $("ul[id='"+DelRowId+"']").remove();
        }
        calTotal();
        picLight();
        $(".dialog").hide();
        $(".mask").hide();
    })
    $("#btnCancel").click(function () {
        $(".dialog").hide();
        $(".mask").hide();
    })
})