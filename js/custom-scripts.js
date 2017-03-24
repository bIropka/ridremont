$(document).ready(function() {

    /*******************************************************************************************************************
     *********** init
     ******************************************************************************************************************/

    setTimeout(function() {
        $('.slider-wrap').animate({opacity: 1}, 500);
    }, 500);

    /*******************************************************************************************************************
     *********** clicks
     ******************************************************************************************************************/

    $('.team-controls li').click(function() {

        if(!$(this).hasClass('active')) {

            $(this).siblings().removeClass('active');
            $(this).addClass('active');

            $(this).parent().siblings('.team-sliders').find('li').removeClass('active');
            $(this).parent().siblings('.team-sliders').find('li').eq($(this).index()).addClass('active');

        }

    });

    /*******************************************************************************************************************
     *********** sliders
     ******************************************************************************************************************/

    $('.slider-top .slider').slick({
        appendArrows: '.slider-top-control',
        prevArrow: '.slider-top-prev',
        nextArrow: '.slider-top-next',
        dots: true
    });

    $('.calculator .slider').slick({
        appendArrows: '.slider-calc-control',
        prevArrow: '.slider-calc-prev',
        nextArrow: '.slider-calc-next',
        slidesToShow: 3,
        slidesToScroll: 1
    });

    $('.team-sliders li:nth-child(1) .slider').slick({
        appendArrows: '.slider-team-1-control',
        prevArrow: '.slider-team-1-prev',
        nextArrow: '.slider-team-1-next',
        slidesToShow: 5,
        slidesToScroll: 1
    });

    $('.team-sliders li:nth-child(2) .slider').slick({
        appendArrows: '.slider-team-2-control',
        prevArrow: '.slider-team-2-prev',
        nextArrow: '.slider-team-2-next',
        slidesToShow: 5,
        slidesToScroll: 1
    });

    $('.team-sliders li:nth-child(3) .slider').slick({
        appendArrows: '.slider-team-3-control',
        prevArrow: '.slider-team-3-prev',
        nextArrow: '.slider-team-3-next',
        slidesToShow: 5,
        slidesToScroll: 1
    });

    $('.team-sliders li:nth-child(4) .slider').slick({
        appendArrows: '.slider-team-4-control',
        prevArrow: '.slider-team-4-prev',
        nextArrow: '.slider-team-4-next',
        slidesToShow: 5,
        slidesToScroll: 1
    });

    $('.team-sliders li:nth-child(5) .slider').slick({
        appendArrows: '.slider-team-5-control',
        prevArrow: '.slider-team-5-prev',
        nextArrow: '.slider-team-5-next',
        slidesToShow: 5,
        slidesToScroll: 1
    });

    $('.team-sliders li:nth-child(6) .slider').slick({
        appendArrows: '.slider-team-6-control',
        prevArrow: '.slider-team-6-prev',
        nextArrow: '.slider-team-6-next',
        slidesToShow: 5,
        slidesToScroll: 1
    });

    $('.reviews .slider').slick({
        appendArrows: '.slider-reviews-control',
        prevArrow: '.slider-reviews-prev',
        nextArrow: '.slider-reviews-next',
        slidesToShow: 3,
        slidesToScroll: 1
    });

});