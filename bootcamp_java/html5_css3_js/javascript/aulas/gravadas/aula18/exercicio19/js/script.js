/*
* EXERCÍCIO 17
*
* Ao clicar em um botão, o array abaixo deverá ser apresentado em uma lista ordenada (elemento html):
*
* let veiculos = {"ônibus", "motocicleta", "patinete"};
*
* Observação:
* - Os itens dos elementos serão criados no mesmo instando que o usuário clicar no botão.
*
*/

window.onload = function() {

    let veiculos    = ['ônibus', 'motocicleta', 'patinete'];

    const btnListar = document.querySelector('#gerarLista');
    const lista     = document.querySelector('#veiculos');

    btnListar.addEventListener('click', () => {

        for (veic of veiculos) {
            
            let li  = document.createElement('li');
            
            lista.appendChild(li).textContent = veic;
        }
    })
}