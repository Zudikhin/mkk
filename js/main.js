$(document).ready(function() {
    "use strict";

    $(".diagnostics_images_dots img").click(function() {
        var src = $(this).attr("src");
        $(".diagnostics_images_show").attr('src', src);
    });

    $('.main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      speed: 500,
      autoplay: true,
      arrows: false,
      fade: true
    });

    $('.interests_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      speed: 500,
      autoplay: false,
          fade: true,
      prevArrow: $('.interests_arrows_prev'),
          nextArrow: $('.interests_arrows_next')
    });

    $('.directions_block_sliders').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        infinite: true,
        cssEase: 'linear',
        fade: false,
        arrows: true,
        prevArrow: $('.directions_block_arrows_prev'),
        nextArrow: $('.directions_block_arrows_next'),
        responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    $('.doctors_block_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        infinite: true,
        cssEase: 'linear',
        fade: false,
        arrows: true,
        prevArrow: $('.doctors_block_arrows_prev'),
        nextArrow: $('.doctors_block_arrows_next'),
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 1,
                fade: true,
                slidesToScroll: 1
              }
            }
          ]
    });

    $("select").niceSelect();

    if ($(window).width() < 992) {
      $('.front_news_wrap_list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        infinite: true,
        cssEase: 'linear',
        fade: true,
        arrows: true,
        prevArrow: $('.front_news_wrap_arrows_prev'),
        nextArrow: $('.front_news_wrap_arrows_next')
      });
    }

});