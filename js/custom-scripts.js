$(document).ready(function() {

    /*******************************************************************************************************************
     *********** init
     ******************************************************************************************************************/

    setTimeout(function() {
        $('.wrapper').animate({opacity: 1}, 500);
    }, 500);

    function checkHeader() {

        if ($(window).width() > 1230) {

            if ($(window).scrollTop() > 300) {

                $('header[role="banner"]').addClass('fixed');

                if ($(window).scrollTop() > 500) {

                    $('header[role="banner"]').css('top', '0px');
                    $('.top-arrow').fadeIn();

                } else {

                    $('header[role="banner"]').css('top', '-300px');
                    $('.top-arrow').fadeOut();

                }

            } else {

                $('header[role="banner"]').removeClass('fixed');

            }

        } else {

            $('header[role="banner"]').addClass('fixed').css('top', '0px');

        }

    }

    checkHeader();

    $(window).scroll(function() {

        checkHeader();

    });

    if($(window).width() < 768) {
        $('header .header-links').appendTo('.mobile-nav');
        $('.header-contacts .hours').appendTo('.mobile-nav');
        $('.header-contacts .callback').appendTo('.mobile-nav');
    } else {
        $('.header-links').insertBefore('.header-contacts');
        $('.mobile-nav .callback').prependTo('.header-contacts');
        $('.mobile-nav .hours').prependTo('.header-contacts');
    }

    $(window).resize(function() {

        checkHeader();

        if($(window).width() < 768) {
            $('header .header-links').appendTo('.mobile-nav');
            $('.header-contacts .hours').appendTo('.mobile-nav');
            $('.header-contacts .callback').appendTo('.mobile-nav');
        } else {
            $('.header-links').insertBefore('.header-contacts');
            $('.mobile-nav .callback').prependTo('.header-contacts');
            $('.mobile-nav .hours').prependTo('.header-contacts');
        }

    });

    /*******************************************************************************************************************
     *********** clicks
     ******************************************************************************************************************/

    $('.burger').click(function() {
        $('.mobile-nav').addClass('active');
    });

    $('.mobile-nav .fa-close').click(function() {
        $('.mobile-nav').removeClass('active');
    });

    $('.team-controls li').click(function() {

        if(!$(this).hasClass('active')) {

            $(this).siblings().removeClass('active');
            $(this).addClass('active');

            $(this).parent().siblings('.team-sliders').find('li').removeClass('active');
            $(this).parent().siblings('.team-sliders').find('li').eq($(this).index()).addClass('active');

        }

    });

    $('.button-order').click(function() {

        $('.window-order').fadeIn();

    });

    $('.button-callback').click(function() {

        $('.window-callback').fadeIn();

    });

    $('.window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.window form')).length) $('.window').fadeOut();
        if ($target.hasClass('fa-close')) $('.window').fadeOut();
    });

    $('.top-arrow').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 600);
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
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1231,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.team-sliders li:nth-child(1) .slider').slick({
        appendArrows: '.slider-team-1-control',
        prevArrow: '.slider-team-1-prev',
        nextArrow: '.slider-team-1-next',
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1231,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 541,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.team-sliders li:nth-child(2) .slider').slick({
        appendArrows: '.slider-team-2-control',
        prevArrow: '.slider-team-2-prev',
        nextArrow: '.slider-team-2-next',
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1231,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 541,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.team-sliders li:nth-child(3) .slider').slick({
        appendArrows: '.slider-team-3-control',
        prevArrow: '.slider-team-3-prev',
        nextArrow: '.slider-team-3-next',
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1231,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 541,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.team-sliders li:nth-child(4) .slider').slick({
        appendArrows: '.slider-team-4-control',
        prevArrow: '.slider-team-4-prev',
        nextArrow: '.slider-team-4-next',
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1231,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 541,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.team-sliders li:nth-child(5) .slider').slick({
        appendArrows: '.slider-team-5-control',
        prevArrow: '.slider-team-5-prev',
        nextArrow: '.slider-team-5-next',
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1231,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 541,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.team-sliders li:nth-child(6) .slider').slick({
        appendArrows: '.slider-team-6-control',
        prevArrow: '.slider-team-6-prev',
        nextArrow: '.slider-team-6-next',
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1231,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 541,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.reviews .slider').slick({
        appendArrows: '.slider-reviews-control',
        prevArrow: '.slider-reviews-prev',
        nextArrow: '.slider-reviews-next',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1231,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});