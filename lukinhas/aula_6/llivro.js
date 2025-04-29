class Livro {
    titulo;
    autor;

    exibirInfo(titulo,autor) {
        this.titulo = titulo
        this.autor = autor
        console.log("nome do livro é:  " + this.titulo)
        console.log("autor é de " + this.autor)
    }
}

var meulivro = new Livro()
var meulivro2 = new Livro()
var meulivro3 = new Livro()
meulivro.exibirInfo("lukinhas ", "lucas samuel")
meulivro2.exibirInfo("Cem Anos de Solidão ", "Gabriel García Márquez")
meulivro3.exibirInfo("A Revolução dos Bichos ", "George Orwell")
console.log(meulivro.titulo)
console.log(meulivro.autor)
console.log(meulivro2.titulo)
console.log(meulivro2.autor)
console.log(meulivro3.titulo)
console.log(meulivro3.autor)