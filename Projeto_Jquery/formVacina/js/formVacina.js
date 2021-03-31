/* Requisito jQuery UI - progressbar */

$(document).ready(function () {
   $(function () {
    $("#progressbar").progressbar({
      value: false
    });
  }); 
  $('#gestacao').hide()
})

/* Validação nome quantidade de caracteres*/

let nome = $('#nome')
$('#nome').blur(function () { // requisito jQuery método de evento blur()
  if ((nome.val()).length < 5) {
    nome.addClass('erro')
  } else {
    nome.removeClass('erro')
  }
})

/* Validação de idade */

let dataNascimento = $('#dataNascimento')
$('#dataNascimento').blur(function () { // requisito jQuery método de evento blur()
  let idade = 2021 - parseFloat(dataNascimento.val())
  if (idade > 130) {
    dataNascimento.addClass('erro')
  } else {
    dataNascimento.removeClass('erro')
  }
})

/* Validação de sexo e gestante */

let sexo;

$('.inputSexo').click(function () { // requisito jQuery método de evento click()

  let sexo
  if ($('#feminino:checked').val()) {
    $('#gestacao').show()
    sexo = "feminino"
  } else if ($('#masculino:checked').val()) {
    sexo = "masculino"
  } else if ($('#naoInformado:checked').val()) {
    sexo = "não informado"
  }
})

/* Validador de CPF */

$('#cpf').blur(function () {
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

/* Requisito AutoComplete(jQuery UI) Profissões */

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
  $('#profissao').autocomplete({
    source: profissoes
  });
});

/* IMC */
let altura
let peso
let imc;

$(function () {
  altura = $('#altura')
  peso = $('#peso')
  $('#altura').blur(function () {
    if (altura.val() > 3 || altura.val() < 0) {
      altura.addClass('erro')
      console.log(altura.val())
    } else {
      altura.removeClass('erro')
      console.log(altura.val())
    }
  })

  $('#peso').blur(function () {
    if (peso.val() > 300 || peso.val() <= 0) {
      peso.addClass('erro')
      console.log(peso.val())

    } else {
      peso.removeClass('erro')
      console.log(peso.val())
    }
  })

  $('#imc').focus(function () {
    imc = (peso.val() / (altura.val() * 2)).toFixed(2)
    if (imc <= 16.9) {
      console.log(imc + " Muito abaixo do peso")
      $('#obesidade').removeAttr('checked')
    } else if (imc >= 17 && imc <= 18.4) {
      console.log(imc + " Abaixo do peso")
      $('#obesidade').removeAttr('checked')
    } else if (imc >= 18.5 && imc <= 24.9) {
      console.log(imc + " Peso normal")
      $('#obesidade').removeAttr('checked')
    } else if (imc >= 25 && imc <= 29.9) {
      console.log(imc + " Acima do peso")
      $('#obesidade').removeAttr('checked')
    } else if (imc >= 30) {
      $('#obesidade').attr("checked", "checked");
      console.log(imc + " Obesidade")
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
  console.log(field)
})

/* Envia as informações do formulário para uma box 
*/
$('#btnEnviar').click(function(){
  
})