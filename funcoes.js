// let x = "";
// console.log(x);
// x = "oi";

boasVindas(); //chamando função
imprimeTexto("Vamos aprimorar o código!"); // chamando função passando um parâmetro
imprimeTexto(soma());

// DECLARAÇÃO DE FUNÇÃO
function boasVindas(){
    return console.log("Olá seja bem vindo!");
}

// DECLARAÇÃO DE FUNÇÃO
function imprimeTexto(texto) {
    console.log(texto);
}

console.log("-----------------------------");
// três formas de escrever funções

function soma() {
    return 2 + 2;
}

// console.log(soma())