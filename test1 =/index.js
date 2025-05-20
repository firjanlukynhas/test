const express = require("express")
const app = express()
app.use(express.json())


const produto = []

app.post("/comprar", (req,res) => {
    const produto = req.body.produto
    const preco = req.body.preco
    const quantidade = req.body.quantidade
    const resultado = preco * quantidade

    if(!produto || preco < 0) {
        res.send("dados devem ser formados")
    } else {
        res.send ("o produto  " + produto +"custa R$ " + resultado )
    }
    
    

})


