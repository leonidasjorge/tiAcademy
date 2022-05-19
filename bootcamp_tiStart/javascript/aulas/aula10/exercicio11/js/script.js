/*
* EXERCÍCIO 11
*
* 1. Criar um array de uma lista de nomes com o mínimo de 5 elementos.
* 2. Criar uma função que receberá 3 parâmetros:
* - O primeiro parâmetro, será para enviar o array.
* - O segundo parâmetro, será para enviar um novo nome para o array, que deverá ser inserido na lista de nomes.
* - O terceiro parâmetro, será enviado um número inteiro, que servirá de índice para que seja impresso no console um determinado nome que está na lista do array.
*
* A saída da função deverá ser:
*
* - Quantidade de elementos do array: 6
* - Você escolheu o índice 2 que é o elemento Mariana
* - A quantidade atual de elementos do array é 7
*/


// Criar um array
// Indice       0        1         2          3        4
let nomes = ["Daiane", "Leon", "Leônidas", "Laura", "Jorge"];

const coisasNomes = (nome, novoNome, index) => {

    console.log(`- Quantidade de elementos do array: `, nome.length);
    console.log(`- Você escolheu o índice ${index} que é o elemento ${nome[index]}.`);
    console.log(`- O nome ${novoNome} foi inserido no array.`);
    nome.push(novoNome);
    console.log(`- A quantidade atual de elementos do array é: `, nome.length);
}

coisasNomes(nomes, "Marinei", 3);
coisasNomes(nomes, "Dulcineia", 2);
coisasNomes(nomes, "Marcelo", 1);