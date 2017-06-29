/**
 * Created by alexrewrew on 15.02.17.
 */
$(document).ready(function () {

    $('.nav-icon').click(function () {
        $('main').toggleClass('nav-open');
        $('nav').toggleClass('nav-open');
        $(this).toggleClass('open');
        $('body').toggleClass('open-overflow')
    });

    $('#platesMore').click(function () {
        event.preventDefault()
        $('.plates').toggleClass('all')
    })

    $('.icon-circle').click(function () {
        event.preventDefault();
    })
    $('.help-list li a').click(function () {
        event.preventDefault();
    })

    $('#service-1').hover(function () {
        $('.services .icon-circle').removeClass('active');
        $(this).addClass('active');
        $('.package').removeClass('active')
        $('#package-1').addClass('active');
    });
    $('#service-2').hover(function () {
        $('.services .icon-circle').removeClass('active');
        $(this).addClass('active');
        $('.package').removeClass('active')
        $('#package-2').addClass('active');
    });
    $('#service-3').hover(function () {
        $('.services .icon-circle').removeClass('active');
        $(this).addClass('active');
        $('.package').removeClass('active')
        $('#package-3').addClass('active');
    });

    $('#help-1 a').hover(function () {
        $('.map').removeClass('active')
        $('#map-1').addClass('active');
    }, function(){
        $('.map').removeClass('active')
        $('#map-0').addClass('active');
    });

    $('#help-2 a').hover(function () {
        $('.map').removeClass('active')
        $('#map-2').addClass('active');
    }, function(){
        $('.map').removeClass('active')
        $('#map-0').addClass('active');
    });

    $('#help-3 a').hover(function () {
        $('.map').removeClass('active')
        $('#map-3').addClass('active');
    }, function(){
        $('.map').removeClass('active')
        $('#map-0').addClass('active');
    });

    $('#help-4 a').hover(function () {
        $('.map').removeClass('active')
        $('#map-4').addClass('active');
    }, function(){
        $('.map').removeClass('active')
        $('#map-0').addClass('active');
    });

    $('#help-5 a').hover(function () {
        $('.map').removeClass('active')
        $('#map-5').addClass('active');
    }, function(){
        $('.map').removeClass('active')
        $('#map-0').addClass('active');
    });

    $('.about-list li').hover(function(){
        $(this).children('.about-person').toggleClass('active')
    })

    $('.slider-special').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-angle-right"></i>',
        prevArrow: '<i class="fa fa-angle-left"></i>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    })

    $('.slider-head').slick({
        nextArrow: '<i class="fa fa-angle-right"></i>',
        prevArrow: '<i class="fa fa-angle-left"></i>',
        dots: true
    });

    $('#open-text').click(function () {
        event.preventDefault();
        $('.univ-about-container').toggleClass('open');
    });
    $('#open-text2').click(function () {
        event.preventDefault();
        $('.courses-about-container').toggleClass('open');
    });

    $(".smooth").click(function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
    // $(".chosen-select").chosen({disable_search_threshold: 10});




    //responsive scripts
    if (window.matchMedia('(min-width: 992px)').matches) {
        $(function(){
            var topPos = $('.affix-panel form').offset().top;
            $(window).scroll(function() {
                var top = $(document).scrollTop(),
                    pip = $('.univ-about').offset().top,
                    height = $('.affix-panel form').outerHeight();
                if (top > topPos && top < pip - height) {$('.affix-panel form').addClass('fixed').removeAttr("style");}
                else if (top > pip - height) {$('.affix-panel form').removeClass('fixed').css({'position':'absolute','bottom':'0'});}
                else {$('.affix-panel form').removeClass('fixed');}
            });
        });
    }
})


