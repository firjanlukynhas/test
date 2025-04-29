class Carro{
    marca;
    modelo;
    ano;

    ligar() {
        console.log("o carro está ligado.");
    }
}

// criando objejos (instancia)
var carro1 = new Carro()
carro1.marca = "chevrolet"
console.log(carro1.marca)

// criar 3

var carro1 = new Carro()
carro1.marca = "chevrolet"
carro1.modelo = "onix"
carro1.ano = "2023"
console.log(carro1.marca)
console.log(carro1.modelo)
console.log(carro1.ano)

var carro2 = new Carro()
carro2.marca = "fiat"
carro2.modelo = "arco"
carro2.ano = "2024"
console.log(carro2.marca)
console.log(carro2.modelo)
console.log(carro2.ano)

var carro3 = new Carro()
carro3.marca = "volgsvaguen"
carro3.modelo = "gol"
carro3.ano = "2010"
console.log(carro3.marca)
console.log(carro3.modelo)
console.log(carro3.ano)