class Produto{
   preço;
    quantidade;


    exibirDetalhes(preço,quantidade){
        this.preço=preço
        this.quantidade=quantidade
        var resultado = this.preço*this.quantidade;
        console.log("resultado: "  + resultado)
}
}

// criando o objeto
var calcularTotal = new Produto();

// chamando o método de soma
calcularTotal.exibirDetalhes(7.60,3);