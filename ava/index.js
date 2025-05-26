const express = require("express")
const mysql = require("mysql2")

const app = express()

const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"cento_treinamento",
})

app.use(express.json())

const  produtos = []


app.post('/sessoes', (req, res) => {
    const sessoes = {
        aluno: req.body.aluno,
        personal: req.body.personal,
        tipo_treino: req.body.tipo_treino,
        data: req.body.data,
        horario: req.body.horario,
       observacoes: req.body.observacoes,

    }
    if (!sessoes.aluno || typeof sessoes.aluno != 'string' || sessoes.aluno.trim() == '') {
        return res.status(400).send('Nome do aluno é obrigatório e deve ser uma string não vazia.');
    }
    
    if (!sessoes.personal||typeof sessoes.personal!= 'string' || sessoes.personal.trim() == '') {
        return res.status(400).send('Nome do personal trainer é obrigatório e deve ser uma string não vazia.');
    }
    
    
    if (!sessoes.tipo_treino|| typeof sessoes.tipo_treino  != 'string' || sessoes.tipo_treino .trim() == '') {
        return res.status(400).send('tipo de treino  é obrigatório e deve ser uma string não vazia.');
    }
    
    if (!sessoes.data) {
        return res.status(400).send('data deve ser um número positivo.');
    }
    
    if (!sessoes.horario) {
        return res.status(400).send('horario deve ser obrigatório.');
    }
  
    conexao.query(
        "INSERT INTO sessoes (aluno,personal,tipo_treino,data, horario,observacoes) VALUES (?,?,?,?,?,?)",
        [sessoes.aluno ,sessoes.personal,sessoes.tipo_treino,sessoes.data, sessoes.horario,sessoes.observacoes ],
        () => {
            res.status(201).send("aluno cadastrado com sucesso!")
        }
    );
})


app.get('/sessoes', (req, res) => {
    conexao.query("SELECT aluno,personal,tipo_treino,data, horario,observacoes from sessoes", (err, results) => {
        if(err) {
            return res.status(500).send("erro ao buscar o aluno");
        }
        res.status(200).send(results);
    })
})

app.listen(3000, () => {
    console.log("Servidor backend rodando em http://localhost:3000")
})