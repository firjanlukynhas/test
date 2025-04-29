class Calculadora{
    valor1;
    valor2;

    somar(valor1,valor2){
        this.valor1=valor1
        this.valor2=valor2
        var resultado = this.valor1+this.valor2;
        console.log("resultado da soma: "  + resultado)
    
    }

    mult(valor1,valor2){
        this.valor1=valor1
        this.valor2=valor2
        var resultado = this.valor1*this.valor2;
        console.log("resultado da mult: "  + resultado)
}
}

// criando o objeto
var calc = new Calculadora();

// chamando o método de soma
calc.somar(7,3); //resultado da soma:10
calc.mult(7,3);