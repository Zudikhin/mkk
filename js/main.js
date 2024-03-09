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
      $(".header_mob").addClass("search");
    });

    $(".header_mob_top_search_close").click(function() {
      $(".header_mob").removeClass("search");
    });

    $(".header_nav_search_glass").click(function() {
      $(".header_nav").addClass("search");
    });

    $(".header_nav_search_close").click(function() {
      $(".header_nav").removeClass("search");
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

    $(".content_block_drop_wrap_head").click(function() {
      $(this).toggleClass("active");
      $(this).siblings().slideToggle();
    });

    $(".content_block_tabs_item_head").click(function() {
      $(this).toggleClass("active");
      $(this).siblings().slideToggle();
    });

    $(".content_block_reception_item_head").click(function() {
      $(this).toggleClass("active");
      $(this).siblings().slideToggle();
    });

    $(".content_block_methods_item_head_drop").click(function() {
      $(this).parent().toggleClass("active");
      $(this).parent().siblings().slideToggle();
    });

    // CONTENT 

    // CONTACTS 
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
    // CONTACTS 

    // TIMETABLE 

    $('.timetable_calendar_mob_item_for').each( function() {
      $(this).slick({
        dots: false,
        infinite: true,
        fade: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: $(this).parents('.timetable_calendar_mob_item').find('.timetable_calendar_mob_item_nav_slider')
      });

      $(this).parent().find(".timetable_calendar_mob_item_nav_slider").slick({
        slidesToShow: 1,
        dots: false,
        fade: true,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: $(this).parent().find(".timetable_calendar_mob_item_nav_prev"),
        nextArrow: $(this).parent().find(".timetable_calendar_mob_item_nav_next"),
        asNavFor: $(this).parents('.timetable_calendar_mob_item').find('.timetable_calendar_mob_item_for')
      });

    });

    $(".timetable_directions_block_drop").on('change', 'select', function() {
      var sortBy = $("#choiceTime").val();
      if ($(window).width() < 768) {
        $(".timetable_calendar_mob_item").removeClass("active");
        $(".timetable_calendar_mob").find(`[data-target='${sortBy}']`).addClass("active");
        $('.timetable_calendar_mob_item_nav_slider').slick('reinit');
        $('.timetable_calendar_mob_item_for').slick('reinit');
      } else {
        $(".timetable_calendar_desk table").removeClass("active");
        $(".timetable_calendar_desk").find(`[data-target='${sortBy}']`).addClass("active");
      }
      
    });
    
    // TIMETABLE 

    $('input[type="tel"]').inputmask("+7(999)999-99-99");

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