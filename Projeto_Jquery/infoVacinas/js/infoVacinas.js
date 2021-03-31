$(document).ready(function () {

    //accordion
    $(function () {
        $("#accordion").accordion();
    });

    // ********** selção data ************
    // select span
    const date = document.getElementById("date");
    date.innerHTML = new Date().getFullYear();

    // **********  links ************
    const navToggle = document.querySelector(".nav-toggle");
    const linksContainer = document.querySelector(".links-container");
    const links = document.querySelector(".links");

    navToggle.addEventListener("click", function () {
        // linksContainer.classList.toggle("show-links");

        const linksHeight = links.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        if (containerHeight === 0) {
            linksContainer.style.height = `${linksHeight}px`;
        } else {
            linksContainer.style.height = 0;
        }
        // console.log(linksContainer.getBoundingClientRect());
    });

    // ********** Menu Fixado ************

    const navbar = document.getElementById("nav");
    const topLink = document.querySelector(".top-link");

    window.addEventListener("scroll", function () {
        const scrollHeight = window.pageYOffset;
        const navHeight = navbar.getBoundingClientRect().height;
        if (scrollHeight > navHeight) {
            navbar.classList.add("fixed-nav");
        } else {
            navbar.classList.remove("fixed-nav");
        }
        // configuração voltar ao topo do link

        if (scrollHeight > 500) {
            //console.log("helo");

            topLink.classList.add("show-link");
        } else {
            topLink.classList.remove("show-link");
        }
    });

    // ********** rolamento ************
    // select links
    const scrollLinks = document.querySelectorAll(".scroll-link");
    scrollLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            // evitar padrão
            e.preventDefault();
            // navegue para um local específico
            const id = e.currentTarget.getAttribute("href").slice(1);
            const element = document.getElementById(id);

            const navHeight = navbar.getBoundingClientRect().height;
            const containerHeight = linksContainer.getBoundingClientRect().height;
            const fixedNav = navbar.classList.contains("fixed-nav");
            let position = element.offsetTop - navHeight;

            if (!fixedNav) {
                position = position - navHeight;
            }
            if (navHeight > 82) {
                position = position + containerHeight;
            }

            window.scrollTo({
                left: 0,
                top: position,
            });
            // close
            linksContainer.style.height = 0;
        });
    });


    // slideToggle
    $(".property-card").hide();
    $("#btn1").click(function () {

        $(".property-card").slideToggle("fast");

    })

    // focus - blur - 
    $("#btn2, #btn3").focus(function (e) { // como em preciso retornar o conteudo coloco algum elemento na function
        console.log("Recebeu o foco")
        $("#btn2, #btn3").css("background-color", "#b7b7a4");// troca a cor 
    })

    // blur saio no formulario
    $("#btn2, #btn3").blur(function (e) { // como em preciso retornar o conteudo coloco algum elemento na function
        console.log("retirou o foco")
        $("#btn2, #btn3").css("background-color", "white");// troca a cor 
    })




});

