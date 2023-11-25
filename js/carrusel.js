$(document).ready(function(){
    $('.series').slick({
        infinite: false,
        slidesToShow: 4,
        //slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

