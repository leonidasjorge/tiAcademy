/*
* EXERCÍCIO 16
*
* Crie uma função que receba um parâmetro que receba um valor entre 1 e 10, e, efetue a tabuada deste valor.
*
* Observações:
* - A função deverá verificar se o parâmetro é um número;
* - A função deverá verificar se o parâmetro está entre 1 e 10;
* - O resultado sairá no console.
*/

window.onload = function () {
    function tabuada (numero) {

        let tabuada = 0;

        if (typeof numero !== 'number') {

            alert ('Digite um valor numérico, válido.');

        } else {
            if (numero < 1 || numero > 10) {

                alert ('Digite um valor entre 1 e 10');

            } else {

                console.log (`Tabuada do ${numero}: `);

                while (tabuada <= 10) {

                    console.log(`- ${numero} x ${tabuada} = ${(numero * tabuada)}.`);
                    tabuada++;
                }
            }
        }
    }

    tabuada(2);
}; // Fim do 'onload';