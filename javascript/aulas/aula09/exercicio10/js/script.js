/*
* EXERCÍCIO 10
*
* Crie uma função que irá pedir "use o prompt": a altura, o peso e o nome.
* Esta função deverá calcular o índice IMC (fórmula peso divido pelo dobro da altura).
* A função deverá apresentar os resultados escritos em uma página HTML. Exemplo:
* 
* - Nome: Fulano.
* - Altura: 1.80
* - Peso: 90
* - IMC: 27.80
*/

function indiceIMC (nome, peso, altura){
    
    let imc = (peso/(altura * altura));
    
    document.write(`- Nome: ${nome} <br>
        - Altura: ${altura} <br>
        - Peso: ${peso} <br>
        - IMC: ${imc}`);
}

let nome = prompt("Digite seu nome: ");
let altura = Number(prompt("Digite sua altura: "));
let peso = Number(prompt("Digite seu peso: "));

indiceIMC(nome, peso, altura);