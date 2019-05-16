$(document).ready(function () {

    /*------------------------*/
    /*------Sticky------*/
    /*------------------------*/
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticty');
        } else {
            $('nav').removeClass('sticty');
        }
    }, {
            offset: '60px'
        });

    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    });

    /*----------
     錨點  
    */
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /*animation on scroll */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
            offset: '50%'
        });
    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
            offset: '50%'
        });
    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
            offset: '50%'
        });
    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
            offset: '50%'
        });

    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');

        nav.slideToggle(200);

        if (icon.attr("name") === 'menu') {
            icon.attr("name", 'close');
        } else {
            icon.attr("name", 'menu');
        }

    });


});