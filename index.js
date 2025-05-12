 const express = require("express")
const app = express()

app.get("/",  (req,res) => {
    res.send("Bem-vindo ao servidor expresss")
})
app.get("/sobre",  (req,res) => {
    res.send("Este é um projeto de exemplo com rotas")
})
app.get("/contato",  (req,res) => {
    res.send("Entre em contato pelo e-mail:tvlukinhastv@gmail.com")
})
app.listen(3000, () => {
    console.log("servidor rodando em http://localhost:3000")
})