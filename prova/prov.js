class Produto{
    nome;
    marca;
    preço;

    adicionar() {
        console.log("o produto foi adicionado no estoque.");
    
    }
}
var prod1 = new Produto()
prod1.nome = "macarrão"
prod1.marca = "praque"
prod1.preço = 20.23
 console.log(prod1.nome)
 console.log(prod1.marca)
 console.log(prod1.preço)

 var prod2 = new Produto()
prod2.nome = "sabonete"
prod2.marca = "dove"
prod2.preço = 2.25
 console.log(prod2.nome)
 console.log(prod2.marca)
 console.log(prod2.preço)

 var produto = new Produto()
produto.adicionar()
 console.log(Produto.nome)