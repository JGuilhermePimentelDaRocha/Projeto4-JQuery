    
    function animeScroll() {
        var disTopoScroll = $(window).scrollTop();
        console.log(disTopoScroll);
        $(".anime_inicial").each(function () {
            itemTopo = $(this).offset().top
            console.log(itemTopo);
            if (disTopoScroll > itemTopo - 150) {
                $(this).addClass("anime_final");
            } else {
                $(this).removeClass("anime_final");
            }
        })
    }
    animeScroll();
    $(window).scroll(function () {
        animeScroll();
    })