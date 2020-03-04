var express = require ('express'); // Importa o Express
var app = express(); // Chama a função que executa o express

app.set('view engine', 'ejs');//Informa que a engine de views é o EJS
app.set('views','./app/views'); // Seta a pasta views DENTRO da pasta apps como padrão
module.exports = app; // O módulo vai retornar a variavel app

