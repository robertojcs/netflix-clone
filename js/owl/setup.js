$('.owl-carousel').owlCarousel({
    loop:true, /*finaliza e 'trava' ou volta ao início */
    margin:15, /* entre items */
    nav:false, /* desabilita 'flechas' */
    responsive:{
        0:{
            items:3
        },
        600:{
            items:6
        },
        1000:{
            items:9
        }
    }
})