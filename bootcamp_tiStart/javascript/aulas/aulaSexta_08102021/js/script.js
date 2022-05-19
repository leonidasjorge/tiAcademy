window.onload = function () {
    const btnVermelho = document.querySelector('#vermelho');
    const btnVerde = document.querySelector('#verde');
    const btnAzul = document.querySelector('#azul');

    const divPainel = document.querySelector('#painel');

    btnVermelho.addEventListener('click', () => {
        divPainel.classList.add('vermelho');
    });

    btnVerde.addEventListener('click', () => {
        divPainel.classList.add('verde');
    });

    btnAzul.addEventListener('click', () => {
        divPainel.classList.add('azul');
    });
}