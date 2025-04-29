class Aluno{
    nome;
    idade;
    curso;

    exibirInfo(nome,idade,curso) {
        this.nome = nome
        this.idade= idade
        this.curso = curso
        console.log("meu nome é:  " + this.nome)
        console.log(" eu tenho " + this.idade)
        console.log("curso de " + this.curso)
    }
    }

var aluno1 = new Aluno()
var aluno2 = new Aluno()
var aluno3 = new Aluno()
aluno1.exibirInfo("lukinhas ", 23, "Back and")
aluno2.exibirInfo("julia",23, "Back and")
aluno3.exibirInfo("lucas ",35, "logistica")
console.log(aluno1.nome)
console.log(aluno1.idade)
console.log(aluno1.curso)
console.log(aluno2.nome)
console.log(aluno2.idade)
console.log(aluno2.curso)
console.log(aluno3.nome)
console.log(aluno3.idade)
console.log(aluno3.curso)