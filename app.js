const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparse = require('body-parser');
require('dotenv/config');
app.use(express.static(__dirname + "/public"));
global.__basedir = __dirname;

app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended: true}))



app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})





mongoose.connect(process.env.CONEXAO, {useNewUrlParser: true}, () => console.log("Conectado ao banco de dados!"));
app.listen(3000, (req, res) =>{
    console.log("Servidor conectado!");
})