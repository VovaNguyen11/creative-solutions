(($) => {
    $(document).ready(() => {
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