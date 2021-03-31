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

