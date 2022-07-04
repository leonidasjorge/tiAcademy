/*
* EXERCÍCIO 15
*
* Crie um programa, por meio de uma função, que receberá um objeto como parâmetro.
* Esta função deverá ter como saída, o nome das propriedades e seus respectivos valores.
* O objeto irá conter uma relação de frutas e seus preços.
*/

// Array de Objetos
let frutas = [

    {
        fruta: 'Maçã', preco: 6.36,
    },

    {
        fruta: 'Melão', preco: 7.37,
    },
]

function listaFrutas (f) {

    for (let produto of f) {
        for (let p in produto) {
            console.log (`${p} - ${produto[p]}`);
        }
    }

}

listaFrutas(frutas);