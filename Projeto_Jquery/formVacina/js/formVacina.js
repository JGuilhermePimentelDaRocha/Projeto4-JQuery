$(document).ready(function () {
  $('#gestacao, #boxConfirmacao').hide()
})

/* Validações gerais */

$('#nome, #outros, #bairro').keydown(function (elemento) {
  if (elemento.keyCode >= 48 && elemento.keyCode <= 57 ||
    elemento.keyCode >= 96 && elemento.keyCode <= 105) {
    return false
  }
})

$('#cartaoSus, #cpf').keydown(function (elemento) {

  if (elemento.keyCode >= 48 && elemento.keyCode <= 57 ||
    elemento.keyCode >= 96 && elemento.keyCode <= 105 ||
    elemento.keyCode == 8 || elemento.keyCode == 46) {
    return true
  } else {
    return false
  }
})

$('#cep, #telefone').keydown(function (elemento) {

  if (elemento.keyCode >= 48 && elemento.keyCode <= 57 ||
    elemento.keyCode >= 96 && elemento.keyCode <= 105 ||
    elemento.keyCode == 8 || elemento.keyCode == 46
    || elemento.keyCode == 109 || elemento.keyCode == 189) {
    return true
  } else {
    return false
  }
})


/* Validação nome quantidade de caracteres*/

let nome = $('#nome')
$('#nome').blur(function () { // requisito jQuery método de evento blur()
  if ((nome.val()).length < 5) {
    nome.addClass('erro')
  } else if ((nome.val()).length > 5) {
    nome.removeClass('erro')
  }
})


/* Validação de idade */

let dataNascimento = $('#dataNascimento')
$('#dataNascimento').blur(function () { // requisito jQuery método de evento blur()
  let idade = 2021 - parseFloat(dataNascimento.val())
  if (idade > 130 || idade < 0) {
    dataNascimento.addClass('erro')
  } else {
    dataNascimento.removeClass('erro')
  }
})

/* Validação de sexo e gestante */

$('#sexo').blur(function () { // requisito jQuery método de evento blur()
  if ($('#sexo').val() == 'feminino') {
    $('#gestacao').slideDown(); // requisito jQuery slide
  } else {
    $('#gestacao').slideUp(); // requisito jQuery slide
  }
})

/* Validador de CPF */

$('#cpf').blur(function () { // requisito jQuery método de evento blur()
  let cpfInput = $('#cpf')
  let cpfValue = $('#cpf').val()
  let soma = 0;
  let resto;

  if (cpfValue == "00000000000" || cpfValue.length != 11) {
    cpfInput.addClass('erro')
  }

  for (i = 1; i <= 9; i++) {
    soma = soma + parseInt(cpfValue.substring(i - 1, i)) * (11 - i);
  }
  resto = soma % 11;
  if (resto == 10 || resto == 11 || resto < 2) {
    resto = 0;
  } else {
    resto = 11 - resto;
  }

  if (resto != parseInt(cpfValue.substring(9, 10))) {
    cpfInput.addClass('erro');
    return false;
  }

  soma = 0
  for (i = 1; i <= 10; i++) {
    soma = soma + parseInt(cpfValue.substring(i - 1, i)) * (12 - i);
  }
  resto = soma % 11;
  if (resto == 10 || resto == 11 || resto < 2) {
    resto = 0;
  } else {
    resto = 11 - resto;
  }
  if (resto != parseInt(cpfValue.substring(10, 11))) {
    cpfInput.addClass('erro');
    return false;
  }
  cpfInput.removeClass('erro')
  return true;
})

/* Requisito AutoComplete(jQuery UI) e requisito Profissões */

$(function () {
  var profissoes = [
    "Administrador", "Advogado", "Agente de saúde", "Agricultor", "Agrônomo",
    "Analista", "Analista de sistemas", "Arqueólogo", "Arquiteto", "Assistente administrativo",
    "Assistente comercial", "Assistente de marketing", "Assistente financeiro",
    "Assistente social", "Auxiliar de cozinha", "Auxiliar de Enfermagem", "Auxiliar de limpeza",
    "Auxiliar de produção", "Bancário", "Biólogo", "Biomédico", "Bioquímico", "Bombeiro",
    "Cabeleireiro", "Carteiro", "Cientista de dados", "Cirurgião", "Comissário de bordo",
    "Consultor de vendas", "Contador", "Corretor", "Cozinheiro", "Dentista", "Desenvolvedor",
    "Designer", "Economista", "Educador Físico", "Eletricista", "Empresário", "Enfermeiro",
    "Engenheiro", "Farmacêutico", "Fisioterapeuta", "Jornalista", "Jovem Aprendiz", "Juiz",
    "Médico", "Militar", "Motorista", "Nutricionista", "Operador de caixa", "Operador de telemarketing",
    "Padeiro", "Pedagogo", "Policial", "Professor", "Psicólogo", "Publicitário", "Radialista",
    "Recepcionista", "Relações Públicas", "Social Media", "Técnico de Enfermagem",
    "Técnico em informática", "Técnico em Radiologia", "Técnico em Segurança do Trabalho",
    "Terapeuta", "Veterinário", "Vigilante"
  ];
  $('#outros').autocomplete({
    source: profissoes
  });
});

/* Requisito IMC */

let altura
let peso
let imc;

$(function () {
  altura = $('#altura')
  peso = $('#peso')
  $('#altura').blur(function () {
    if (altura.val() > 3 || altura.val() < 0) {
      altura.addClass('erro')
    } else {
      altura.removeClass('erro')
    }
  })

  $('#peso').blur(function () {
    if (peso.val() > 300 || peso.val() <= 0) {
      peso.addClass('erro')

    } else {
      peso.removeClass('erro')
    }
  })

  $('#imc').focus(function () {
    imc = (peso.val() / (altura.val() * 2)).toFixed(2)
    if (imc <= 16.9) {
      $('#imc').val(imc + " - Muito abaixo do peso")
      $('#obesidade').removeAttr('checked')

    } else if (imc >= 17 && imc <= 18.4) {
      $('#imc').val(imc + " - Abaixo do peso")
      $('#obesidade').removeAttr('checked')

    } else if (imc >= 18.5 && imc <= 24.9) {
      $('#imc').val(imc + " - Peso normal")
      $('#obesidade').removeAttr('checked')

    } else if (imc >= 25 && imc <= 29.9) {
      $('#imc').val(imc + " - Acima do peso")
      $('#obesidade').removeAttr('checked')

    } else if (imc >= 30 && imc <= 39.9) {
      $('#imc').val(imc + " - Obesidade")
      $('#obesidade').removeAttr('checked')

    } else if (imc >= 40) {
      $('#imc').val(imc + " - Obesidade Grave")
      $('#obesidade').attr("checked", "checked");
    }
  })
})

/* Requisito AutoComplete(jQuery UI) Bairros*/

$(function () {
  var bairrosSP = [
    "Alto de Pinheiros", "Anhanguera", "Aricanduva", "Artur Alvim",
    "Barra Funda", "Bom Retiro", "Brás", "Brasilândia", "Butantã",
    "Cachoeirinha", "Cambuci", "Campo Belo", "Campo Grande", "Campo Limpo",
    "Cangaíba", "Capão Redondo", "Capela do Socorro Cidade Dutra", "Carrão",
    "Casa Verde", "Cidade Ademar", "Cidade Líder", "Cidade Tiradentes",
    "Consolação", "Ermelino Matarazzo", "Freguesia do Ó", "Grajaú",
    "Guaianases", "Ipiranga", "Itaim Bibi", "Itaim Paulista", "Itaquera",
    "Jabaquara", "Jaçanã", "Jaguara", "Jaguaré", "Jaraguá", "Jardim Ângela",
    "Jardim Helena", "Jardim Paulista", "Jardim São Luís", "José Bonifácio",
    "Lajeado", "Lapa", "Liberdade", "Limão", "M'Boi Mirim", "Mandaqui",
    "Marsilac", "Moema", "Mooca", "Mooca Água Rasa", "Morumbi", "Parelheiros",
    "Pari", "Parque do Carmo", "Pedreira", "Penha", "Penha", "Perdizes",
    "Perus", "Pinheiros", "Pirituba", "Ponte Rasa", "Raposo Tavares",
    "República", "Rio Pequeno", "Sacomã", "Santa Cecília", "Santana",
    "Santo Amaro", "São Domingos", "São Lucas", "São Mateus", "São Miguel",
    "São Rafael", "Sapopemba", "Saúde", "Sé", "Sé Bela Vista", "Socorro",
    "Tatuapé", "Tremembé", "Tucuruvi", "Vila Andrade", "Vila Curuçá",
    "Vila Formosa", "Vila Guilherme", "Vila Jacuí", "Vila Leopoldina",
    "Vila Maria", "Vila Mariana", "Vila Matilde", "Vila Medeiros",
    "Vila Prudente", "Vila Sônia"
  ];
  $('#bairro').autocomplete({
    source: bairrosSP
  });
});

/* Verificação do email */

$('#email').blur(function () {
  let field = $('#email').val();
  usuario = field.substring(0, field.indexOf("@"));
  dominio = field.substring(field.indexOf("@") + 1, field.length);
  if ((usuario.length >= 1) &&
    (dominio.length >= 3) &&
    (usuario.search("@") == -1) &&
    (dominio.search("@") == -1) &&
    (usuario.search(" ") == -1) &&
    (dominio.search(" ") == -1) &&
    (dominio.search(".") != -1) &&
    (dominio.indexOf(".") >= 1) &&
    (dominio.lastIndexOf(".") < dominio.length - 1)) {
    $('#email').removeClass('erro')
  } else {
    $('#email').addClass('erro')
  }
})

/* Requisito barra de progresso */

const inputs = document.querySelectorAll('.progress');
const progress = document.querySelector('#progressbar');
const segments = 100 / inputs.length;

let fieldValues = [];

const checkFields = () => {
  var fieldsCompleted = 0;
  var barWidth = 0;

  for (let i = fieldValues.length; i--;) {
    if (fieldValues[i] === true) {
      fieldsCompleted += 1;
    }
  }

  barWidth = fieldsCompleted * segments;
  progress.style.width = barWidth + '%';
  progress.innerHTML = `${barWidth.toFixed(0)}%`;

  /* Envia as informações do formulário para uma box */

  $('#btnEnviar').click(function () { // requisito jQuery método de evento click()

    let idade = 2021 - parseFloat(dataNascimento.val())
    if (barWidth == 100) {
      if ($('#profissao').val() == 'profissionalSaude' || idade >= 75) {
        $('#boxConfirmacao').fadeIn('slow')
        $('#confirmacaoDados').html("Você faz parte do grupo 1 e já pode se vacinar")

      } else if ($('#etnia').val() == 'indigena' && idade >= 18) {
        $('#boxConfirmacao').fadeIn('slow')

        $('#confirmacaoDados').html("Você faz parte do grupo 1 e já pode se vacinar")

      } else if (idade >= 60) {
        $('#boxConfirmacao').fadeIn('slow')

        $('#confirmacaoDados').html("Você faz parte do grupo 2 e já pode se vacinar")

      } else if (idade >= 18) {
        if ($('#hipertensao').is(':checked') || $('#diabetes').is(':checked') ||
          $('#doencaCardio').is(':checked') || $('#doencaPulmonar').is(':checked') ||
          $('#doencaRenal').is(':checked') || $('#transplanteOrgao').is(':checked') ||
          $('#anemiaFalciforme').is(':checked') || $('#cancer').is(':checked') ||
          $('#obesidade').is(':checked')) {

          $('#boxConfirmacao').fadeIn('slow')
          $('#confirmacaoDados').html("Você faz parte do grupo 3 e já pode se vacinar")

        } else {
          $('#boxConfirmacao').fadeIn('slow')
          $('#confirmacaoDados').html("Você deve aguardar para a vacinação, acompanhe nosso site para mais informações")
        }
      } else if ($('#profissao').val() != 'outros' && $('#profissao').val() != 'profissionalSaude') {
        $('#boxConfirmacao').fadeIn('slow')
        $('#confirmacaoDados').html("Você faz parte do grupo 4 e já pode se vacinar")

      } else {
        $('#boxConfirmacao').fadeIn('slow')
        $('#confirmacaoDados').html("Você deve aguardar para a vacinação, acompanhe nosso site para mais informações")
      }
    } else {
      $('#boxConfirmacao').fadeIn('slow')
      $('#confirmacaoDados').html("Você precisa preencher todos os campos")

    }

  })

}

for (let i = inputs.length; i--;) {
  inputs[i].addEventListener('input', (event) => {
    const currentInput = event.currentTarget;

    if (!currentInput.value.length) {
      fieldValues[i] = false;
    } else {
      fieldValues[i] = true;
    }

    checkFields();
  });

}

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