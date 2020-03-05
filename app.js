var express = require ('express');

var app = express();
var app = require ('./config/server');

var rotaNoticias = require('./app/routes/noticias')(app);
var rotaNoticia = require('./app/routes/noticia')(app);
var rotaHome = require('./app/routes/home')(app);
var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticias')(app);

app.set('view engine', 'ejs');

    app.get('/', function(req,res){
        res.render("index");
    })

    app.get('/cursos', function(req,res){
        res.render("cursos");
    })
    app.get('/esportes',function(req,res){
       res.render("esportes");
    
    app.get('/pesquisa',function(req,res){
       res.render("pesquisa");
    })
    })
    app.listen(3000,function(){
        console.log("servidor rodando na porta 3000");
        console.log("servidor rodando com express");
    });