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
            //     $('this').next.toggleClass('footer_active');
            // });
        }
        // else if($(window).width() > 822) {
        //     $('.footer_item').removeClass('footer_active');
        // }
      });

    $('.footer_item').on('click', function(){
        $(this).toggleClass('footer_active');
    });

    $('.slider').slick({
        slidesToShow:3,
        dots: true,
        slidesToScroll: 3,
        arrows:false,
        responsive: [
			{
				breakpoint: 520,
				settings: {
				  slidesToShow: 2,
                  slidesToScroll:2,
				}
			},
            {
				breakpoint: 380,
				settings: {
				  slidesToShow: 1,
                  slidesToScroll:1,
				}
			},
		]
    });

    $('.comment_slider').slick({
        slidesToShow:3,
        dots: true,
        slidesToScroll: 3,
        arrows:false,
        responsive: [
			{
				breakpoint: 850,
				settings: {
				  slidesToShow: 2,
                  slidesToScroll:2,
				}
			},
            {
				breakpoint: 550,
				settings: {
				  slidesToShow: 1,
                  slidesToScroll:1,
				}
			},
		]
    });
});