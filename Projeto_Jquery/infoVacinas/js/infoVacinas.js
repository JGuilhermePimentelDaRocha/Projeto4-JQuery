$(document).ready(function () {

    //accordion
    $(function () {
        $("#accordion").accordion();
    });

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

    /*

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

    
    // forma 1

    

    function calcular() {
        var leitosUTI = parseInt(document.getElementById('leitosUTI').value, 10);
        var leitosInfermaria = parseInt(document.getElementById('leitosInfermaria').value, 10);
        document.getElementById('resultado').innerHTML = (leitosUTI + leitosInfermaria / 2);
    }

    

  
    function calcular() {
        var leitosUTI = Number(document.getElementById("leitosUTI").value, 1);
        var leitosInfermaria = Number(document.getElementById("leitosInfermaria").value, 1);
        document.getElementById('resultado').value = leitosUTI + leitosInfermaria;
    }
 
  
    // forma2
    var leitosUTI = $("#leitosUTI");
    leitosUTI.blur(function () {
        $("#resultado")
    })
 
  // forma 3
    var leitosInfermaria = $("#leitosInfermaria");
    leitosInfermaria.blur(function () {
        $("#resultado").html(leitosInfermaria.val() + leitosUTI.val() / (2))
    })
 
 
    // forma 4
    var leitosInfermaria = $("#leitosUTI")
     var leitosUTI = $("#leitosInfermaria")
     var resultado;
 
     $("#resultado").focus(function () {
 
         resultado = ((leitosUTI.val() + leitosInfermaria.val()) / 2)
         if (resultado <= 59) {
             console.log(resultado + "Fase1")
         }
         else if (resultado >= 60 && resultado <= 69) {
             console.log(resultado + "Fase2")
         }
         else if (resultado >= 70 && resultado <= 79) {
             console.log(resultado + "Fase3")
         }
         else if (resultado >= 80) {
             console.log(resultado + "Fase4")
         }
     })
    
    
 
 
 
     function media() {
         var leitosInfermaria = parseFloat(document.getElementById("leitosInfermaria").value);
         var leitosUTI = parseFloat(document.getElementById("leitosUTI").value);
 
         var resultado = (leitosInfermaria + leitosUTI) / 2;
 
         if (resultado <= 59) {
             console.log(resultado + "Fase1")
         }
         else if (resultado >= 60 && resultado <= 69) {
             console.log(resultado + "Fase2")
         }
         else if (resultado >= 70 && resultado <= 79) {
             console.log(resultado + "Fase3")
         }
         else if (resultado >= 80) {
             console.log(resultado + "Fase4")
         }
 
     }
 
     

    var leitosInfermaria = $("#leitosUTI")
    var leitosUTI = $("#leitosInfermaria")
    var resultado;

    $("#resultado").click(function () {

        resultado = (parseFloat(leitosUTI.val()) + parseFloat(leitosInfermaria.val())) / 2
        console.log(parseFloat(leitosUTI).val())
        console.log(leitosInfermaria)
        console.log(leitosUTI + leitosInfermaria)
        console.log(resultado)
       
        if (resultado <= 59) {
            console.log(resultado + "Fase1")
        }
        else if (resultado >= 60 && resultado <= 69) {
            console.log(resultado + "Fase2")
        }
        else if (resultado >= 70 && resultado <= 79) {
            console.log(resultado + "Fase3")
        }
        else if (resultado >= 80) {
            console.log(resultado + "Fase4")
        }
        })

        */

    $("button").click(function () {

        //declaração das variáveis
        var leitosUTI = 0, leitosInfermaria = 0, media = 0;

        //pegando os numeros de leitos dos campos inputs
        leitosUTI = parseInt($("input[name=leitosUTI]").val());
        leitosInfermaria = parseInt($("input[name=leitosInfermaria]").val());
        //formula para cálculo de média
        media = (leitosUTI + leitosInfermaria) / 2;

        //mostra o resultado no input name=media
        $("input[name=media]").val(media);

        /*if (media <= 59) {
            console.log(media + "Fase1")
        }
        else if (media >= 60 && resultado <= 69) {
            console.log(media + "Fase2")
        }
        else if (media >= 70 && media <= 79) {
            console.log(media + "Fase3")
        }
        else if (media >= 80) {
            console.log(media + "Fase4")
        }
        */
        return false;
    });

});

