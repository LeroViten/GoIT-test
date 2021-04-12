$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        slidesToShow:1
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow:2
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow:1
        //         }
        //     }
        // ],
        // mobileFirst: true
    });
});