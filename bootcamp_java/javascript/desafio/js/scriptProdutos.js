import {produtos} from "./produtos.js";
produtos;

window.onload = function() {
    const btnFechar    = document.querySelector("#btnFechar");

    btnFechar.addEventListener('click', function() {
        document.getElementById("content-form").style.display = "none";
    })

    let codigo     = document.querySelector("#txtCodigo");
    let descricao  = document.querySelector("#txtDescricao");
    let preco      = document.querySelector("#txtPreco");
    let quantidade = document.querySelector("#txtQuantidade");

    let avancar    = document.querySelector("#avancar");
    let novo       = document.querySelector("#novo");
    let salvar     = document.querySelector("#salvar");
    let voltar     = document.querySelector("#voltar");

    let i = 0;

    for (let dados of produtos) {
        for (let d in dados) {
            codigo.value     = produtos[i].codProduto;
            descricao.value  = produtos[i].descProduto;
            preco.value      = produtos[i].precoProduto;
            quantidade.value = produtos[i].qtdEstoqueProd;
        }
    }

    avancar.addEventListener('click', function() {
        if (i == produtos.length - 1) {
            alert("Fim do Registro de Produtos.");
        } else {
            i = (i + 1);

            codigo.value     = produtos[i].codProduto;
            descricao.value  = produtos[i].descProduto;
            preco.value      = produtos[i].precoProduto;
            quantidade.value = produtos[i].qtdEstoqueProd;
        }
    });

    let qtdProdutos = produtos.length;

    novo.addEventListener('click', function() {
        qtdProdutos     = qtdProdutos + 1;

        codigo.value     = qtdProdutos;
        descricao.value  = "";
        preco.value      = "";
        quantidade.value = "";
    });  

    salvar.addEventListener('click', function() {
        if (qtdProdutos == produtos.length) {
            alert("Clique em Novo para Inserir um Novo Registro.");
        } else {
            produtos.push({
                codProduto     : qtdProdutos,
                descProduto    : descricao.value,
                precoProduto   : preco.value,
                qtdEstoqueProd : quantidade.value,
            })

            alert("Dados Cadastrados com Sucesso.")

            codigo.value     = produtos[0].codProduto;
            descricao.value  = produtos[0].descProduto;
            preco.value      = produtos[0].precoProduto;
            quantidade.value = produtos[0].qtdEstoqueProd;

            i = 0;
        }
    });  

    voltar.addEventListener('click', function() {
        if (i == 0) {
            alert("Fim de Registro.");
        } else {
            i = (i - 1);

            codigo.value     = produtos[i].codProduto;
            descricao.value  = produtos[i].descProduto;
            preco.value      = produtos[i].precoProduto;
            quantidade.value = produtos[i].qtdEstoqueProd;
        }
    });    
}