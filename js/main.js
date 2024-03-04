$(document).ready(function() {
    "use strict";

    // HEADER 
    $(".header_mob_top_burger").click(function() {
      $(".drom_menu").addClass("active");
    });

    $(".drom_menu_header_close").click(function() {
      $(".drom_menu").removeClass("active");
    });
    
    $(".header_mob_top_search_glass").click(function() {
      $(".header_mob_top_search").addClass("active");
    });

    $(".header_mob_top_search_close").click(function() {
      $(".header_mob_top_search").removeClass("active");
    });

    $(".header_nav_search_glass").click(function() {
      $(".header_nav_search").addClass("active");
    });

    $(".header_nav_search_close").click(function() {
      $(".header_nav_search").removeClass("active");
    });

    $(".drom_menu_top button").click(function() {
      $(this).parent().parent().find(".drop_menu").slideToggle();
      $(this).toggleClass("active");
    });
    // HEADER 
    
    // MAIN 
    $('.main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      speed: 500,
      autoplay: true,
      arrows: false,
      fade: true
    });
    // MAIN 

    // DIAGNOSTICS 
    $(".diagnostics_images_dots img").click(function() {
        var src = $(this).attr("src");
        $(".diagnostics_images_show").attr('src', src);
    });
    // DIAGNOSTICS 
    
    // INTERESTS 
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
    // INTERESTS 

    // DIRECTIONS
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
    // DIRECTIONS

    // DOCTORS
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
    // DOCTORS

    // FRONT_NEWS 
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
    // FRONT_NEWS 


    // CONTENT 
    if ($(window).width() < 768) {
      $('.content_block_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        infinite: true,
        cssEase: 'linear',
        fade: true,
        arrows: true,
        prevArrow: $('.content_block_arrows_prev'),
        nextArrow: $('.content_block_arrows_next')
      });
    }
    // CONTENT 

    $('.contacts_main_slider_wrap').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      autoplay: false,
      infinite: true,
      cssEase: 'linear',
      fade: false,
      arrows: true,
      prevArrow: $('.contacts_main_slider_arrows_prev'),
      nextArrow: $('.contacts_main_slider_arrows_next'),
      responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });


    $(document).click(function(event) { 
      var $target = $(event.target);
      if(!$target.closest('.header_nav_search').length && $('.header_nav_search').is(":visible")) {
        $(".header_nav_search").removeClass("active");
      }
      if(!$target.closest('.header_mob_top_search').length && $('.header_mob_top_search').is(":visible")) {
        $(".header_mob_top_search").removeClass("active");
      } 
    });

    $("select").niceSelect();

    if($(".date").length) {
      $(".date").datetimepicker({
        format:'DD.MM.YYYY'
      });
    }
    
});