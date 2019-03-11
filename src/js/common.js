(($) => {
    $(document).ready(() => {

        //Sticky Header
        const $header = $('.header');
        let scrollPosition = 0;
        $(window).scroll(() => {
            if (window.scrollY > scrollPosition) {
                scrollPosition = window.scrollY;
                $header.addClass('sticky');
            } else {
                $header.removeClass('sticky');
                scrollPosition = window.scrollY - 1;
                console.log('w' + window.scrollY);
                if (window.scrollY > 100) {
                    $header.removeClass('header--transparent');
                } else {
                    $header.addClass('header--transparent');
                }
            }
        });

        //Adaptive Menu
        $(".menu-icon").click(() => {
              $(".nav__list").toggleClass("showing");
        });


        //Back To Top
        const $backToTop = $('.back-to-top');
        $backToTop.click(() => {
            $('html').animate({ scrollTop: 0 }, 1000); 
        })

        $('.works-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        arrows: false,
                        draggable: true
                    }
                }
            ]
        });

        $('.team-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            infinite: false,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }
            ]
        });
    });
})(jQuery)