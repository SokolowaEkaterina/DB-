$(document).ready(function() {
    $('.menu_burger').on('click', function(){
        $('.menu_burger').toggleClass('menu_burger_active');
        $('.menu').toggleClass('menu_active');
        // $('.menu').slideToggle();
    });

    $(window).on('load resize', function() {
        if ($(window).width() < 822) {
            if($('.footer_item').hasClass('footer_active')){
                $('.footer_item').removeClass('footer_active');
            }else {
                $('.footer_item').on('click', function(){
                    $(this).toggleClass('footer_active');
                });
            }
            // $('.footer_item').on('click', function(){
            //     $(this).toggleClass('footer_active');
            // });
        }
        else if($(window).width() > 822) {
            $('.footer_item').removeClass('footer_active');
        }
      });

    // $('.footer_item').on('click', function(){
    //     $(this).toggleClass('footer_active');
    // });
});