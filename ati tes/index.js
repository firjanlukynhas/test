const express = require('express')
const mysql = require("mysql2")



const app = express()



const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"consultorio_medico",
})

app.use(express.json())

const produtos = []

app.post('/consultas', (req, res) => {
    const consultas = {
        paciente: req.body.paciente,
        medico: req.body.medico,
        especialidade: req.body.especialidade,
        data: req.body.data,
        horario: req.body.horario,
       observacoes: req.body.observacoes,

    }

    if (!consultas.paciente || typeof consultas.paciente != 'string' || consultas.paciente.trim() == '') {
        return res.status(400).send('Nome do paciente é obrigatório e deve ser uma string não vazia.');
    }

    if (!consultas.medico || typeof consultas.medico  != 'string' || consultas.medico .trim() == '') {
        return res.status(400).send('Nome do medico é obrigatório e deve ser uma string não vazia.');
    }


    if (!consultas.especialidade || typeof consultas.especialidade  != 'string' || consultas.especialidade .trim() == '') {
        return res.status(400).send('especialidade  é obrigatório e deve ser uma string não vazia.');
    }

    if (!consultas.data) {
        return res.status(400).send('data deve ser um número positivo.');
    }

    if (!consultas.horario ) {
        return res.status(400).send('data deve ser um número positivo.');
    }
  
    conexao.query(
        "INSERT INTO consultas (paciente, medico,especialidade,data, horario,observacoes) VALUES (?,?,?,?,?,?)",
        [consultas.paciente,consultas.medico,consultas.especialidade,consultas.data, consultas.horario,consultas.observacoes ],
        () => {
            res.status(201).send("consulta cadastrado com sucesso!")
        }
    );
})


app.get('/consultas', (req, res) => {
    conexao.query("SELECT paciente, medico,data, horario,observacoes from consultas", (err, results) => {
        if(err) {
            return res.status(500).send("erro ao buscar consulta");
        }
        res.status(200).send(results);
    })
})


app.listen(3000, () => {
    console.log("Servidor backend rodando em http://localhost:3000")
})
