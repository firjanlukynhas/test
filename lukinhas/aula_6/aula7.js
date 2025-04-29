class Aluno {
    constructor(nome, idade, curso) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    }

    exibirInfo() {
        console.log("Meu nome é: " + this.nome);
        console.log("Eu tenho " + this.idade + " anos");
        console.log("Curso de " + this.curso);
    }
}

const aluno1 = new Aluno("Lukinhas", 23, "Back-end");
const aluno2 = new Aluno("Julia", 23, "Back-end");
const aluno3 = new Aluno("Lucas", 35, "Logística");

aluno1.exibirInfo();
aluno2.exibirInfo();
aluno3.exibirInfo();

console.log(aluno1.nome, aluno1.idade, aluno1.curso);
console.log(aluno2.nome, aluno2.idade, aluno2.curso);
console.log(aluno3.nome, aluno3.idade, aluno3.curso);