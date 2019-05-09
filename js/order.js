$(function () {
    var setting = {
        changeMonth: true,
        changeYear: true,
        showWeek: true,
        showButtonPanel: true,
        closeText: "关闭",
        yearRange: '2000:2020',
        dateFormat: 'yy-mm-dd',
        showAnim:'slideDown'
    }
    $("#txtLeaveDate").datepicker(setting);
    $("#txtLeaveDate").change(function () {
        var now = new Date();
        var future = new Date($(this).val());
        console.log(future);
        var diff = future.getTime() - now.getTime();
        var days = diff / (1000 * 60 * 60 * 24);
        if (days <= 0) {
            $(this).next("span").text("出行日期错误，请从新选择");
            $(this).val("");
        } else {
            $(this).next("span").text("");
        }
    })
    var copyInfo = $(".vistor_info").html();
    console.log(copyInfo);
    $("a.operateDel").click(function () { 
        del($(this));
    })

    $("a.operateAdd").click(function () {
        var $addInfo = $(copyInfo);
        //$addInfo.prependTo(".vistor_info");
        $addInfo.appendTo(".vistor_info");
        //var $add = $(this).parents(".people").siblings(".vistor_info").html($addInfo);
        //console.log($add);
        //$add.appendTo(".vistor_info");
        $addInfo.find("a.operateDel").bind("click", function () {
            del($(this));
           
        })
    })
    function del($dela)
    {
        var flag = confirm("确认删除该出游人吗？");
        if (flag) {
            $dela.parents(".dingdan-mm").remove();
        }
    }
})

