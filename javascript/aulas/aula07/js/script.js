// Função Literal

/*
* function teste () {
*     let nome = "Leônidas";
*     return nome;
* }
*
* console.log(teste());
*/

function teste () {
    alert("Estou na function teste.");
    return nome;
}

// teste();

/*
* (function(produto, preco){
*    alert("O produto é " + produto + " e o preço é: R$ " + preco);
* })("Biscoito", 2.35)
*/

// Função Arrow Function

/*
* let mensagem = (nome) => {return nome}
* console.log(mensagem("Laura"));
*/

let valor1 = prompt("Digite o valor 1: ");
let valor2 = prompt("Digite o valor 2: ");

const soma = (valor1, valor2) => {
    let resultado = Number(valor1) + Number(valor2);
    console.log(resultado);
}

soma(valor1, valor2);