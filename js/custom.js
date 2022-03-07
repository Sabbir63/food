$(function () {


    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        effect: 'slide',
        speed: 2200,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 6000,
        },
    });


    swiper.on('slideChangeTransitionStart', function () {

        anime({
            targets: '.banner-part img',
            scale: [1.2, 1],
            opacity: [0, 1],
            easing: 'easeInOutQuart'
        });
        anime({
            targets: '.banner-text .Text',
            translateY: [10, 30],
            opacity: [0, 1],
            delay: anime.stagger(100, {
                start: 500
            }),
            easing: 'easeInOutQuart'
        });

    });

    anime({
        targets: '.nav-item',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(250, {
            start: 700
        }),
        easing: 'easeInOutQuart'
    });

    anime({
        targets: '.banner-text .Text',
        translateY: [10, 30],
        opacity: [0, 1],
        delay: anime.stagger(250, {
            start: 1500
        }),
        easing: 'easeInOutQuart'
    });

    anime({
        targets: '.banner-part img',
        scale: [1.2, 1],
        opacity: [0, 1],
        delay: anime.stagger(250, {
            start: 800,
            from: 'last'
        }),
        easing: 'easeInOutQuart'
    });

    anime({
        targets: '.swiper-button-prev , .swiper-button-next',
        translateY: [10, 30],
        opacity: [0, 1],
        delay: anime.stagger(350, {
            start: 3500,
            from: 'last'
        }),
        easing: 'easeInOutQuart'
    });


    //    slide part========= 

    $('.slide').slick({
        speed: 300,
        speed: 300,
        arrows: true,
        autoplay: true,
        nextArrow: '.bt .fa.fa-chevron-left',
        prevArrow: '.bt .fa.fa-chevron-right',
    });

    //parallax=========
    $('.parallax-window').parallax("40%", -.4);
        //parallax for order list=========
    $('.online-order').parallax("50%", 0.5);
    
      $(document).ready(function () {
        $("#flip").click(function () {
            $("#panel").slideToggle("slow");
        });
    });
    //    mixitup=========
    var mixer = mixitup('.wrap');

    //    Owl slide====

    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '.slide_button-edite .fa.fa-chevron-left',
        prevArrow: '.slide_button-edite .fa.fa-chevron-right'
    });
    
    
    $('.com-slider').slick({
        dots: false,
        speed: 400,
        arrows: false,
        autoplay: true,
        speed: 400,
        swipe: true,
    });

});
