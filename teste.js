const express = require("express");
const app = express();
app.get("/", function(req, res){
  res.send("Bem vindo ao site lool");

})
app.get("/deepwoken", function (req,res){
    res.send("<h1>Lista de produtos</h1>");
})


app.listen(2000,function(erro){
    if (erro){
        console.log("Errooooo btlk");
    }else{
        console.log("Servidor iniciadooo kakakaka");
    }
})