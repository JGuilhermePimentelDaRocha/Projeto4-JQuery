/* jQuery UI - progressbar */

$(function () {
  $("#progressbar").progressbar({
    value: 37
  });
});

/* jQuery UI - autocomplete */

$(function () {
  var bairros = [
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
    source: bairros
  });
});

$(function(){
  var profissoes = [];
  $('profissoes').autocomplete({
    source: profissoes
  });
});