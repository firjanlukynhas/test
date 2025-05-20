const express = require("express")
const app = express()
app.use(express.json())
const produtos = []
app.post("/produtos", (req,res) => {

    
    const produto = {
        produto: req.body.produto,
        preco: req.body.preco,
        quantidade: req.body.quantidade

    }

    produtos.push(produto)
    res.send (produtos)
})
app.get("/produtos",(req,res) => {
    res.send(produtos)
})

app.listen(3000, () => {
    console.log("servidor rodando em http:localhost:3000")
} )
