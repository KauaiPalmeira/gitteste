const express = require("express");
const app = express();

app.get("/primeirarota", function(req, res){
    res.send("<h1>Rota inicial: Teste</h1>");
})

app.get("/segundarota", function (req,res){
  res.send("<h1>Segunda Rota: Teste</h1>");
})

app.get("/ultimarota", function (req,res){
    res.send("<h1>Ultima Rota: Teste</h1>");
})

app.listen(4000,function(erro){
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.")
    }
})
