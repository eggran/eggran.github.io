$(document).ready(function () {
    var $btnTop = $('.btn_top');
    var $wrap = $('html, body');

    //Top Button
    $(window).scroll(function(){
        var $docTop = $(document).scrollTop();

        $docTop>300 ? $btnTop.fadeIn(300) : $btnTop.fadeOut(300);
    });
    $btnTop.on('click', function(e){
        e.preventDefault();

        $wrap.animate({scrollTop:0}, 600);
    });

    //Gnb Menu
    $('.gnb a').on('click', function(e){
        e.preventDefault();
        var $this = $($(this).attr('href'));
    	var offsetTop = $this.offset().top;

    	$wrap.animate({scrollTop:offsetTop}, 600);
    })
});
