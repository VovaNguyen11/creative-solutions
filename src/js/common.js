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
                scrollPosition = window.scrollY;
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

        // Select all links with hashes
        $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function (e) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    const headerHeight = $('.header').height();
                    let target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        e.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top-headerHeight
                        }, 1000, function () {
                            // Callback after animation
                            // Must change focus!
                            let $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });
    });
})(jQuery)