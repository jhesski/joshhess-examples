function amigaTitleBar(label){
    var windowObject = {};
    windowObject.closeButton = "<div class='amiga-window-header'><div class='amiga-btn-close'><div></div></div></div>";
    windowObject.label = "<div class='amiga-window-header-label'>"+label+"</div>";
    windowObject.filler = "<div></div>";
    windowObject.minimize = "<div class='amiga-window-header'><div class='amiga-btn-minimize'><div></div></div></div>";
    windowObject.maximize = "<div class='amiga-window-header-last'><div class='amiga-btn-maximize'><div></div>";
    return windowObject.closeButton + windowObject.label + windowObject.filler + windowObject.minimize + windowObject.maximize;
}
$(".amiga-window-header-container").each(function(){
    $(this).html(amigaTitleBar(this.textContent));
});
$('.amiga-btn-close').click(function(){
    $(this).parent().parent().parent().slideUp(100).delay(500).slideDown();
});
$('.amiga-btn-minimize').parent().click(function(){
    $(this).parent().parent().find('.amiga-window-view').slideToggle(200);
});
$('.amiga-btn-maximize').parent().click(function () {
    $(this).parent().parent().toggleClass('maximize');
});
$('.toast-btn').click(function(){
    $(this).parent().parent().find('.toast').toggleClass('toast-animate');
});