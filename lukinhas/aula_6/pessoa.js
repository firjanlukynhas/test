class Pessoa {
    nome;
    idade;

    falar(nome,idade) {
        console.log("olá, sou " + nome)
        console.log("minha idade é " + idade)
    }
}

var pessoa = new Pessoa()
pessoa.falar("lukinhas ", 22)

class Pessoa {
    nome;
    idade;

    falar(nome,idade) {
        this.nome = nome
        this.idade = idade
        console.log("olá, sou " + this.nome)
        console.log("minha idade é " + this.idade)
    }
}

var pessoa = new Pessoa()
pessoa.falar("lukinhas ", 22)
console.log(pessoa.nome)