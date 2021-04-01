$(document).ready(function () {
    // ********** selção data ************
    // Ano rodapé
    const date = document.getElementById("date");
    date.innerHTML = new Date().getFullYear();


    // Data e hora Topo Pagina

    // Função para formatar 1 em 01
    const zeroFill = n => {
        return ('0' + n).slice(-2);
    }

    // Cria intervalo
    const interval = setInterval(() => {
        // Pega o horário atual
        const now = new Date();

        // Formata a data conforme dd/mm/aaaa hh:ii:ss
        const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

        // Exibe na tela usando a div#data-hora
        document.getElementById('dateTime').innerHTML = dataHora;
    }, 1000);

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
            const element = document.getElementById(id);
            const id = e.currentTarget.getAttribute("href").slice(1);
            //

            const navHeight = navbar.getBoundingClientRect().height;
            const containerHeight = linksContainer.getBoundingClientRect().height;
            //const fixedNav = navbar.classList.contains("fixed-nav");
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


    /* Requisito Tab (jQuery UI)  */

    const about = document.querySelector(".about");
    const btns = document.querySelectorAll(".tab-btn");
    const articles = document.querySelectorAll(".content");
    about.addEventListener("click", function (e) {
        const id = e.target.dataset.id;
        if (id) {
            // remover selecionado de outros botões
            btns.forEach(function (btn) {
                btn.classList.remove("active");
            });
            e.target.classList.add("active");
            // esconder outros artigos
            articles.forEach(function (article) {
                article.classList.remove("active");
            });
            const element = document.getElementById(id);
            element.classList.add("active");
        }
    });

    // animação

    /*
    function animeScroll() {
        var disTopoScroll = $(document).scrollTop();
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
    })*/

    // declarações - Acessibilidade visual

    window.onload = function () {
        var elementBody = document.querySelector('body');
        var elementBtnIncreaseFont = document.getElementById('increase-font');
        var elementBtnDecreaseFont = document.getElementById('decrease-font');
        // Padrão de tamanho, equivale a 100% do valor definido no Body
        var fontSize = 100;
        // Valor de incremento ou decremento, equivale a 10% do valor do Body
        var increaseDecrease = 10;

        // Evento de click para aumentar a fonte
        elementBtnIncreaseFont.addEventListener('click', function (event) {
            fontSize = fontSize + increaseDecrease;
            elementBody.style.fontSize = fontSize + '%';
        });

        // Evento de click para diminuir a fonte
        elementBtnDecreaseFont.addEventListener('click', function (event) {
            fontSize = fontSize - increaseDecrease;
            elementBody.style.fontSize = fontSize + '%';
        });
    }
});

