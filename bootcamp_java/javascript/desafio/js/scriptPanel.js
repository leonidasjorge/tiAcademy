import {clientes} from "./clientes.js";
clientes;

import {produtos} from "./produtos.js";
produtos;

window.onload = function() {
    // Script "Clientes"
    document.getElementById("content-form-cliente").style.display = "none";

    const aCliente = document.querySelector("#menuCliente");

    aCliente.addEventListener('click', function() {
        document.getElementById("content-form-cliente").style.display = "block";
        document.getElementById("content-form-pedido").style.display  = "none";
        document.getElementById("content-form-produto").style.display = "none";
    });

    const btnFecharCliente = document.querySelector("#btnFecharCliente");

    btnFecharCliente.addEventListener('click', function() {
        document.getElementById("content-form-cliente").style.display = "none";
    });

    let codigo  = document.querySelector("#codigoCliente");
    let nome    = document.querySelector("#nomeCliente");
    let data    = document.querySelector("#txtData");

    let avancar = document.querySelector("#avancar");
    let novo    = document.querySelector("#novo");
    let salvar  = document.querySelector("#salvar");
    let voltar  = document.querySelector("#voltar");

    let i = 0;

    for (let dados of clientes) {
        for (let d in dados) {
            codigo.value = clientes[i].codCliente;
            nome.value   = clientes[i].nomeCliente;
            data.value   = clientes[i].dataCadCli;
        }
    }

    avancar.addEventListener('click', function() {
        if (i == clientes.length - 1) {
            alert("Fim do Registro de Clientes.");
        } else {
            i = (i + 1);

            codigo.value = clientes[i].codCliente;
            nome.value   = clientes[i].nomeCliente;
            data.value   = clientes[i].dataCadCli;
        }
    });

    let qtdCliente = clientes.length;

    novo.addEventListener('click', function() {
        qtdCliente    = qtdCliente + 1;

        var date      = new Date();
        var dia       = String(date.getDate()).padStart(2, '0');
        var mes       = String(date.getMonth() + 1).padStart(2, '0');
        var ano       = date.getFullYear();
        var dataAtual = (dia + '/' + mes + '/' + ano);

        codigo.value  = qtdCliente;
        nome.value    = "";
        data.value    = dataAtual;
    });  

    salvar.addEventListener('click', function() {
        if (qtdCliente == clientes.length) {
            alert("Clique em Novo para Inserir um Novo Registro.");
        } else {
            clientes.push({
                codCliente  : qtdCliente,
                nomeCliente : nome.value,
                dataCadCli  : data.value
            })

            alert("Dados Cadastrados com Sucesso.")

            codigo.value = clientes[0].codCliente;
            nome.value   = clientes[0].nomeCliente;
            data.value   = clientes[0].dataCadCli;

            i = 0;
        }
    });  

    voltar.addEventListener('click', function() {
        if (i == 0) {
            alert("Fim de Registro.");
        } else {
            i = (i - 1);

            codigo.value = clientes[i].codCliente;
            nome.value   = clientes[i].nomeCliente;
            data.value   = clientes[i].dataCadCli;
        }
    });

    // Script Produtos
    document.getElementById("content-form-produto").style.display = "none";

    const aProduto = document.querySelector("#menuProduto");

    aProduto.addEventListener('click', function() {
        document.getElementById("content-form-cliente").style.display = "none";
        document.getElementById("content-form-pedido").style.display  = "none";
        document.getElementById("content-form-produto").style.display = "block";
    });

    const btnFecharProduto = document.querySelector("#btnFecharProduto");

    btnFecharProduto.addEventListener('click', function() {
        document.getElementById("content-form-produto").style.display = "none";
    });

    let codigoProduto  = document.querySelector("#codigoProduto");
    let descricao      = document.querySelector("#txtDescricao");
    let preco          = document.querySelector("#txtPreco");
    let quantidade     = document.querySelector("#txtQuantidade");

    let avancarProduto = document.querySelector("#avancarProduto");
    let novoProduto    = document.querySelector("#novoProduto");
    let salvarProduto  = document.querySelector("#salvarProduto");
    let voltarProduto  = document.querySelector("#voltarProduto");

    let iProduto = 0;

    for (let dadosProduto of produtos) {
        for (let dProduto in dadosProduto) {
            codigoProduto.value = produtos[iProduto].codProduto;
            descricao.value     = produtos[iProduto].descProduto;
            preco.value         = produtos[iProduto].precoProduto;
            quantidade.value    = produtos[iProduto].qtdEstoqueProd;
        }
    }

    avancarProduto.addEventListener('click', function() {
        if (iProduto == produtos.length - 1) {
            alert("Fim do Registro de Produtos.");
        } else {
            iProduto = (iProduto + 1);

            codigoProduto.value = produtos[iProduto].codProduto;
            descricao.value     = produtos[iProduto].descProduto;
            preco.value         = produtos[iProduto].precoProduto;
            quantidade.value    = produtos[iProduto].qtdEstoqueProd;
        }
    });

    let qtdProdutos = produtos.length;

    novoProduto.addEventListener('click', function() {
        qtdProdutos         = qtdProdutos + 1;

        codigoProduto.value = qtdProdutos;
        descricao.value     = "";
        preco.value         = "";
        quantidade.value    = "";
    });  

    salvarProduto.addEventListener('click', function() {
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

            codigoProduto.value = produtos[0].codProduto;
            descricao.value     = produtos[0].descProduto;
            preco.value         = produtos[0].precoProduto;
            quantidade.value    = produtos[0].qtdEstoqueProd;

            iProduto = 0;
        }
    });  

    voltarProduto.addEventListener('click', function() {
        if (iProduto == 0) {
            alert("Fim de Registro.");
        } else {
            iProduto = (iProduto - 1);

            codigoProduto.value = produtos[iProduto].codProduto;
            descricao.value     = produtos[iProduto].descProduto;
            preco.value         = produtos[iProduto].precoProduto;
            quantidade.value    = produtos[iProduto].qtdEstoqueProd;
        }
    });

    // Script Pedidos
    document.getElementById("content-form-pedido").style.display = "none";
    
    const aPedido = document.querySelector("#menuPedido");

    aPedido.addEventListener('click', function() {
        document.getElementById("content-form-cliente").style.display = "none";
        document.getElementById("content-form-pedido").style.display  = "block";
        document.getElementById("content-form-produto").style.display = "none";
    });

    // Botão Fechar
    const btnFecharPedido = document.querySelector("#btnFecharPedido");

    btnFecharPedido.addEventListener('click', function() {
        document.getElementById("content-form-pedido").style.display = "none";
    })

    // Dados Cliente
    let codigoClientePedido = document.querySelector("#codigoClientePedido");
    let nomeClientePedido   = document.querySelector("#nomeClientePedido");

    let cClientePedido = 0;

    codigoClientePedido.addEventListener("blur", function() {
        cClientePedido = ((Number(codigoClientePedido.value)) - 1);

        if (cClientePedido > (clientes.length - 1) || cClientePedido < 0 || codigoClientePedido.value == 0) {
            if (codigoClientePedido.value == "") {
                alert("Informe o código do cliente.");
                
                codigoClientePedido.value = "";
                nomeClientePedido.value = "";

                document.getElementById("btnLancarPedido").focus();
            } else {
                alert("O código do cliente informado não existe.");
                
                codigoClientePedido.value = "";
                nomeClientePedido.value = "";

                document.getElementById("btnLancarPedido").focus();
            }
        } else {
            nomeClientePedido.value = clientes[cClientePedido].nomeCliente;
        }
    });
    
    // Dados Produto
    let codigoProdutoPedido     = document.querySelector("#codigoProdutoPedido");
    let descricaoProdutoPedido  = document.querySelector("#descricaoProdutoPedido");
    let precoProdutoPedido      = document.querySelector("#precoProdutoPedido");
    let quantidadeProdutoPedido = document.querySelector("#quantidadeProdutoPedido");

    let p = 0;

    codigoProdutoPedido.addEventListener("blur", function() {
        p = ((Number(codigoProdutoPedido.value)) - 1);

        if (p > (produtos.length - 1) || p < 0 || codigoProdutoPedido.value == 0) {
            if (codigoProdutoPedido.value == "") {
                alert("Informe o código do produto.");

                codigoProdutoPedido.value = "";
                descricaoProdutoPedido.value     = "";
                precoProdutoPedido.value         = "";
                quantidadeProdutoPedido.value    = "";

                document.getElementById("btnLancarPedido").focus();
            } else {
                alert("O código do produto informado não existe.");
                
                codigoProdutoPedido.value = "";
                descricaoProdutoPedido.value     = "";
                precoProdutoPedido.value         = "";
                quantidadeProdutoPedido.value    = "";

                document.getElementById("btnLancarPedido").focus();
            }
        } else {
            descricaoProdutoPedido.value         = produtos[p].descProduto;
            precoProdutoPedido.value             = Number(produtos[p].precoProduto).toFixed(2);
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
        let index = itens.indexOf(codigoProdutoPedido.value);

        if (index === -1) {
            let qtdDigitada   = (Number(quantidadeProdutoPedido.value));
            let qtdDisponivel = (Number(produtos[p].qtdEstoqueProd));
    
            if ((qtdDigitada <= 0) || (qtdDigitada > qtdDisponivel)) {
                alert("Não há esta quantidade em estoque.");
            } else {
                // Criar o elemento "tr" e mostrar na tabela
                let linha  = document.createElement("tr");
                tblPedidos.appendChild(linha);

                // Criar o elmento "td" e mostrar na tabela
                itens.push(linha.appendChild(document.createElement("td")).textContent = codigoProdutoPedido.value);
    
                linha.appendChild(document.createElement("td")).textContent = descricaoProdutoPedido.value;
                linha.appendChild(document.createElement("td")).textContent = precoProdutoPedido.value;
                linha.appendChild(document.createElement("td")).textContent = quantidadeProdutoPedido.value;
        
                // Calcular SubTotal e mostrar na tabela
                let subTotal = (precoProdutoPedido.value * quantidadeProdutoPedido.value).toFixed(2);
                linha.appendChild(document.createElement("td")).textContent = subTotal;
        
                // Calcular Total
                totalzinho = (Number(totalzinho) + Number(subTotal)).toFixed(2);
        
                total.value = Number(totalzinho).toLocaleString('pt-BR',{
                    style:'currency',currency: 'BRL'});
        
                document.getElementById("mostraTotalPedido").style.display = "block";

                codigoProdutoPedido.value = "";
                descricaoProdutoPedido.value     = "";
                precoProdutoPedido.value         = "";
                quantidadeProdutoPedido.value    = "";
            }            
        } else {
            alert('Este item já está cadastrado.')
        }
    });    
}