let frutas = ["maça" , "uva" , "laranja"];
console.log (frutas[0]);
console.log (frutas[2]);

frutas.push("abacate");
console.log(frutas);

let numeros = [10 ,20, 30,40];
console.log (numeros.length);

let nomes = ["ana", "beatriz", "lucas" , "julia" ,"samuel"]
let nomeFiltrado = nomes.filter(nome => nome == "lucas");
console.log(nomeFiltrado);

let cores = ["azul", "vermelho", "verde"];
cores.forEach( cor => {
    console.log("cor:" ,cor)
})