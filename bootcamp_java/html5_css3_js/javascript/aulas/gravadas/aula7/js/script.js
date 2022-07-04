/* Funções */

// Função Arrow Function
let mensagem = () => {
    alert("Estou feliz da vida com JS.");
}
// mensagem();

/* */

// Função Arrow Function
let msg = (nome) => { return nome };
// console.log(msg("José"));

/* */

let v1 = prompt("Digite o valor 1:");
let v2 = prompt("Digite o valor 2:");

// Função Arrow Function
const soma = (valor1, valor2) => {
    let resultado = (Number(valor1) + Number(valor2));
    console.log(resultado);
}
soma(v1, v2);

/* */

// Função Auto Executável
// (function (produto, preco) {
//     alert("O produto é " + produto + " e o preço é R$ " + preco + ".");
// })("Biscoito", 2.35)

/* */

function teste () {
    alert("Estou na função teste.")
    return nome;
}
//teste();

/* */

// Função Literal
function teste () {
    let nome = "Marcelo";
    return nome;
}
// console.log(teste());





