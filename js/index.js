function turnPics() {
    var index = 0; //当前播放的索引
    var stop = false;//判断是否为手动播放
    var $li = $(".banner").find("#imgs li");//查找有多少张图片
    var $pageIndex = $(".banner").find("#numbers li");//显示所有编号的li
    $pageIndex.eq(index).addClass("number_over")
                        .stop(true, true)
                        .siblings()
                         .removeClass("number_over");
    //自动播放
    setInterval(function () {
        if (stop) return;
        index++;
        if (index >= $li.length) {
            index = 0;
        }
        $li.eq(index).stop(true, true).fadeIn("slow").siblings().fadeOut("slow");
        $pageIndex.eq(index).addClass("number_over").stop(true, true).siblings().removeClass("number_over");
    }, 3000);
    //手动播放
    $pageIndex.mouseover(function () {
        stop = true;
        index = $pageIndex.index($(this));
        $li.eq(index).stop(true, true).fadeIn("slow").siblings().fadeOut("slow");
        $(this).addClass("number_over").stop(true, true).siblings().removeClass("number_over");

    }).mouseout(function () {
        stop = false;
    });

}


//团购价滚动
function leftScroll() {
    var marginLeft = 0;
    var stop = false;
    setInterval(function () {
        if (stop) return;
        $(".tgjlx").find("li").first().animate({ "margin-left": marginLeft-- }, 0, function () {
            var $first = $(this);
            if (!$first.is(":animated")) {
                if ((-marginLeft) > $first.width() + 1 + 18) {
                    $first.css({ "margin-left": 0 }).appendTo($(".tgjlx ul"));
                    marginLeft = 0;
                }
            }
        } );
    },200)
    $(".tgjlx ul").mouseover(function(){
        stop = true;
       
    }).mouseout(function(){
        stop=false;
    })
}


$(function () {
    turnPics();
    leftScroll();
})