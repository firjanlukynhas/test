console.log(" projeto nodeiniciado com sucesso")

require("./mensagem")

const ola =require("./saudacao")
ola();

const olas =require ("./nomesau")
olas("lucas")

const soma = require("./soma")
resultado = soma (5,4)
console.log("resultado: " + resultado)
ola()

const verificaridade = require("./idade")
verificaridade(18)

const calc = require("./calcul")
calc.somar(4,5)
calc.multiplicar(2,5)

