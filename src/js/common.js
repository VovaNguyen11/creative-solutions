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
                if(window.scrollY > 200){
                    $header.removeClass('header--transparent');
                }  else{
                    $header.addClass('header--transparent');
                }
            }
        });

        $('.works-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true
            // responsive: [{
            //         breakpoint: 1400,
            //         settings: {
            //             slidesToShow: 1,
            //             arrows: false,
            //             draggable: false,
            //         }
            //     },
            //     {
            //         breakpoint: 1024,
            //         settings: {
            //             slidesToShow: 1,
            //             arrows: false,
            //             draggable: true,
            //         }
            //     },
            //     {
            //         breakpoint: 600,
            //         settings: {
            //             slidesToShow: 1,
            //             arrows: false,
            //             draggable: true
            //         }
            //     }
            // ]
        });
        $('.team-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            infinite: false
        });
    });
})(jQuery)