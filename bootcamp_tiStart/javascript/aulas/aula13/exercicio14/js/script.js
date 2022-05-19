/*
* EXERCÍCIO 14
*
* Crie uma função que receba uma palavra como parâmetro e inverta esta palavra.
*/

let palavra = 'Hulk';

function invertePalavra (p = 'Leônidas', t = '') {

    for (let i = (p.length -1); i >= 0; i--) {
        console.log(p[i]);
    }

}

invertePalavra('Diana');