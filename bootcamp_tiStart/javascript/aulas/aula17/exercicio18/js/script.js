/*
* EXERCÍCIO 18
*
* Crie uma função que some 2 valores:
* a) Os valores serão adicionados em dois elementos inputs;
* b) O resultado será apresentado em um terceiro elemento input;
* c) A soma será efetuada quando perder o foco do segundo input.
*/

window.onload = function() {

    const valor1 = document.querySelector("#inputValor1");
    const valor2 = document.querySelector("#inputValor2");
    const total  = document.querySelector("#inputTotal");

    valor2.addEventListener('blur', function() {
        total.value = Number(valor1.value) + Number(valor2.value);
    })
}