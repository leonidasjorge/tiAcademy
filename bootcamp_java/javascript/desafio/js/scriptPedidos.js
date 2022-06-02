import {clientes} from "./clientes.js";
clientes;

import {produtos} from "./produtos.js";
produtos;

window.onload = function() {
    // Botão Fechar
    const btnFechar = document.querySelector("#btnFechar");

    btnFechar.addEventListener('click', function() {
        document.getElementById("content-form").style.display = "none";
    })

    // Dados Cliente
    let codigo      = document.querySelector("#codigoCliente");
    let nome        = document.querySelector("#nomeCliente");

    let c = 0;

    codigo.addEventListener("blur", function() {
        c = ((Number(codigo.value)) - 1);

        if (c > (clientes.length - 1) || c < 0 || codigo.value == 0) {
            if (codigo.value == "") {
                alert("Informe o código do cliente.");
                
                codigo.value = "";
                nome.value = "";

                document.getElementById("btnLancarPedido").focus();
            } else {
                alert("O código do cliente informado não existe.");
                
                codigo.value = "";
                nome.value = "";

                document.getElementById("btnLancarPedido").focus();
            }
        } else {
            nome.value = clientes[c].nomeCliente;
        }
    });

    // Dados Produto
    let codigoProduto  = document.querySelector("#codigoProduto");
    let descricao      = document.querySelector("#descricaoProduto");
    let preco          = document.querySelector("#txtPreco");
    let quantidade     = document.querySelector("#txtQuantidade");

    let p = 0;

    codigoProduto.addEventListener("blur", function() {
        p = ((Number(codigoProduto.value)) - 1);

        if (p > (produtos.length - 1) || p < 0 || codigoProduto.value == 0) {
            if (codigoProduto.value == "") {
                alert("Informe o código do produto.");

                codigoProduto.value = "";
                descricao.value     = "";
                preco.value         = "";
                quantidade.value    = "";

                document.getElementById("btnLancarPedido").focus();
            } else {
                alert("O código do produto informado não existe.");
                
                codigoProduto.value = "";
                descricao.value     = "";
                preco.value         = "";
                quantidade.value    = "";

                document.getElementById("btnLancarPedido").focus();
            }
        } else {
            descricao.value         = produtos[p].descProduto;
            preco.value             = produtos[p].precoProduto.toFixed(2);
        }        
    });

    // Botão Lançar Pedido
    const btnLancarPedido = document.querySelector("#btnLancarPedido");
    const tblPedidos      = document.querySelector("#tblPedidos");

    let itens             = [];
    let total             = document.querySelector("#mostraTotalPedido");
    let totalzinho        = 0;

    document.getElementById("mostraTotalPedido").style.display = "none";

    btnLancarPedido.addEventListener('click', function () {
        let index = itens.indexOf(codigoProduto.value);

        if (index === -1) {
            let qtdDigitada   = (Number(quantidade.value));
            let qtdDisponivel = (Number(produtos[p].qtdEstoqueProd));
    
            if ((qtdDigitada <= 0) || (qtdDigitada > qtdDisponivel)) {
                alert("Não há esta quantidade em estoque.");
            } else {
                // Criar o elemento "tr" e mostrar na tabela
                let linha  = document.createElement("tr");
                tblPedidos.appendChild(linha);

                // Criar o elmento "td" e mostrar na tabela
                itens.push(linha.appendChild(document.createElement("td")).textContent = codigoProduto.value);
    
                linha.appendChild(document.createElement("td")).textContent = descricao.value;
                linha.appendChild(document.createElement("td")).textContent = preco.value;
                linha.appendChild(document.createElement("td")).textContent = quantidade.value;
        
                // Calcular SubTotal e mostrar na tabela
                let subTotal = (preco.value * quantidade.value).toFixed(2);
                linha.appendChild(document.createElement("td")).textContent = subTotal;
        
                // Calcular Total
                totalzinho = (Number(totalzinho) + Number(subTotal)).toFixed(2);
        
                total.value = Number(totalzinho).toLocaleString('pt-BR',{
                    style:'currency',currency: 'BRL'});
        
                document.getElementById("mostraTotalPedido").style.display = "block";
            }            
        } else {
            alert('Este item já está cadastrado.')
        }
    });
}