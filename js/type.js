function leftScroll() {
    var index = 0;
    var stop = false;
    var $li = $(".jindinf-right").find(".jnImgs li");
    var $pageIndex = $(".jindinf-right").find(".jnText li");
    $pageIndex.eq(index).addClass("current").stop(true, true).siblings().removeClass("current");
    //自动播放
    setInterval(function () {
        if (stop)return;
        index++;
        if (index >= $li.length) {
            index = 0;
        }
        $li.eq(index).stop(true, true).fadeIn("slow").siblings().fadeOut("slow");
        $pageIndex.eq(index).addClass("current").stop(true, true).siblings().removeClass("current");
    }, 3000);
    //手动播放
    $pageIndex.mouseover(function () {
        stop = true;
        index = $pageIndex.index($(this))
        $li.eq(index).stop(true, true)
        .fadeIn("slow")
        .siblings()
        .fadeOut("slow");
        $(this).addClass("current")
        .stop(true, true)
        .siblings()
        .removeClass("current");
    }).mouseout(function(){
        stop = false;
    });
}
$(function () {
    leftScroll();
})