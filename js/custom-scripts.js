$(document).ready(function() {

    /*******************************************************************************************************************
     *********** init
     ******************************************************************************************************************/

    setTimeout(function() {
        $('.slider-wrap').animate({opacity: 1}, 500);
    }, 500);

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

});