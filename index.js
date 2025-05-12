const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req,res) =>{
    res.send("servidor express funcinando!")
})
app.get("/sobre",(req, res)=>{
    res.send("bem-vindo á pagina sobre!")
})

app.get("/usuario",(req, res)=>{
    res.send("lukinhas")
})



app.listen(3000,() =>  {
    console.log("servidor rodando em http://localhost:3000")
})

app.post("/usuario",(req,res) => {
    const nome= req.body.nome
    const cargo = req.body.cargo
    res.send("O usuario " + nome + " criado com sucesso! com o cargo de " + cargo )
})