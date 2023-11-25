$(document).ready(function(){
    if ($(window).width() <= 768) {
        // Solo activa Slick.js en dispositivos móviles
        $('nav ul').slick({
            infinite: false,
            slidesToShow: 4,
            //slidesToScroll: 1,
        });
    }
});
