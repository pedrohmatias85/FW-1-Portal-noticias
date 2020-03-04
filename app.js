var express = require ('express');

var app = express();
var app = require ('./config/server')

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