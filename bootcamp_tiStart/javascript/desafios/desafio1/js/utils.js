import {produtosKitanda} from './produtos.js';

/*
* A função abaixo, é uma função auto executável.
* Ela irá carregar a lista de produtos que está no outro arquivo (produtos.js),
* assim que a página "index.html" for aberta.
*/

(() => {
    const ulProdutos = document.querySelector('#produtos');

    // "for OF" => Verifica arrays.
    // Este "for" entra dentro do array.
    for (let prod of produtosKitanda) {
        
        // Esta constante cria o elemento 'li' na lista que fica dentro do elemento 'ul', no HTML.
        const liProdutos = document.createElement('li');
        
        // "for IN" => Verifica objetos.
        // Este "for" entra dentro dos elementos/objetos do array.
        for (let listaProd in prod) {

            if (listaProd == 'preco') {
                
                ulProdutos.appendChild(liProdutos).setAttribute('data-preco', prod[listaProd]);
                ulProdutos.appendChild(liProdutos).setAttribute('class', 'itemProduto');
            } else {

                ulProdutos.appendChild(liProdutos).textContent = `${prod[listaProd]}`;
            }
        }
    }
})(produtosKitanda)

/*
* A função abaixo:
* - Envia o produto da Kitanda para a cesta do cliente;
* - Valida se o produto já está na cesta do cliente;
* - Soma os valores dos produtos na cesta do cliente e
* - Apresenta o valor total.
*/

function cesta() {

    const armazem           = [];
    const cestaDoCliente    = document.querySelector('ul#cestaDoCliente');
    const itemProduto       = document.querySelectorAll('ul#produtos > li.itemProduto');
    const mostraTotalCompra = document.querySelector('#mostraTotalCompra');
    
    let totalzinho = 0; 

    itemProduto.forEach(function(item){
        item.addEventListener('click', () => {
            if (armazem.indexOf(item.textContent) == -1) {
                const liCesta = document.createElement('li');
                armazem.push(item.textContent);
                cestaDoCliente.appendChild(liCesta).textContent = item.textContent;
                cestaDoCliente.appendChild(liCesta).setAttribute('class', 'itemCesta');
                
                totalzinho += Number(item.dataset.preco);

                mostraTotalCompra.value = totalzinho.toLocaleString('pt-BR',{
                    style:'currency',currency: 'BRL'}); 
            } else {
                alert(`Este item "${item.textContent}" já está na sua cesta.`)
            };
         });
    });
};

export {cesta};