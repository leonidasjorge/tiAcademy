window.onload = function() {

    // FUNÇÃO CALCULAR O VALOR TOTAL
    function calcular(idProduto, resultado) {

        const preco          = document.querySelectorAll(`#${idProduto} > li`);
        const valorResultado = document.querySelector(`#${resultado}`);
        
        let totalzinho = 0;

        for (let i of preco) {
            totalzinho += Number(i.dataset.preco);
        }

        valorResultado.value = totalzinho.toFixed(2);
    }

    // FUNÇÃO REMOVER PRODUTOS E RE-CALCULAR O VALOR TOTAL
    function removerProdutos (id) {

        const lista = document.querySelectorAll(`#${id} > li`);

        for (let produto of lista) {
            produto.addEventListener('click', function() {
                produto.remove();
                calcular('produtos', 'somaTotal');
            });
        }
    }

    removerProdutos('produtos');
    calcular('produtos', 'somaTotal');
}