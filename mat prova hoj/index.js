const express = require('express')
const mysql = require('mysql2')

const app = express()

app.use(express.json())

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'loja'
})

app.post('/produtos', (req, res) => {
    const produto ={ nome,preco,quantidade }= req.body

    conexao.query(
        'INSERT INTO produtos (nome, preco, quantidade) VALUES (?,?,?)',
        [
            nome,
            preco, 
            quantidade, 
        ],
        () => {
            res.status(201).send('Consulta cadastrada com sucesso!')
    })
})

app.get('/produtos', (req, res) => {
    conexao.query('SELECT * FROM  produtos', (err, results) => {
        if (err) {
            res.status(500).send('Erro ao buscas produtos')
        }

        res.status(200).send(results)
    })
})

app.delete("/produtos/:codigo",(req, res) => {
    const{codigo} = req.params;
    conexao.query("DELETE FROM produtos WHERE id = ? ",[codigo],(err,results) => {
        if (err) {
            return res.status(500).send("erro ao deletar");

        }
        if(results.affectedRows===0){
            return res.status(404).send("produto não encontrado");
        }
        res.status(200).send("produto deletado com sucesso");
    });

})

app.put("/produtos/:codigo",(req,res)=>{
    const{codigo} =req.params;
    const{nome,preco,quantidade}= req.body;

    const query = "UPDATE produtos SET nome = ?,preco = ?, quantidade =? WHERE id = ?";
    conexao.query(query,[nome,preco, quantidade , codigo] , (err,results) => {
        if(err) {
            return res.status(500).send("erro ao atualizar");
        }
        if(results.affectedRows === 0){
            return res.status(404).send("produto não encontrado");
        }
        res.send ("produto atualizado com sucesso");
    })
})


app.listen(3000, () => {
    console.log("Servidor backend rodando em http://localhost:3000")
})