let celular ={
    modelo: "MOTO Z PLAY",
    marca: "Motorola",
    ano: 2017,
   tela: 5.5,
   memoria:32,
   Processador:"Qualcomm Snapdragon 625"
};

console.log(celular)

let celular2 ={
    modelo: "MOTO edge",
    marca: "Motorola",
    ano: 2024,
   tela: 6.7,
   memoria:256,
   processador:"Dimensity 8020"
};
console.log(celular2)



let celular3 ={
    modelo: " Galaxy A15",
    marca: "Samsung",
    ano: 2024,
   tela: 6.5,
   memoria:256,
   processador: "MediaTek MT6789"
};
console.log(celular3)


let celulares = [
    {modelo: "MOTO Z PLAY", marca: "Motorola",ano: 2017,tela: 5.5,memoria:32,processador:"Qualcomm Snapdragon 625"},
    {modelo: "MOTO edge", marca: "Motorola",ano: 2024,tela: 6.7,memoria:256 , processador:"Dimensity 8020"},
    {modelo: " Galaxy A15",marca: "Samsung",ano: 2024,tela: 6.5,memoria:256,processador: "MediaTek MT6789" }
] 

console.log(celulares[1].processador);
console.log(celulares[0].tela);

