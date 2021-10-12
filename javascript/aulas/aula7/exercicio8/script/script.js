/* 
* EXERCÍCIO 8
*
* Crie uma função que verifique qual é o maior número entre dois parâmetros e tenha   * como saída uma impressão no 'console.log', informando o resultado.
*/

function maiorNumero (numero1, numero2) {
    if (numero1 >= numero2) {
        if (numero1 == numero2) {
            console.log("O número " + numero1 + " é igual ao número " + numero2);
        } else {
            console.log("O número " + numero1 + " é maior que o número " + numero2);
        }
    } else {
        console.log("O número " + numero1 + " é menor que o número " + numero2);
    }
}

maiorNumero(33, 7);