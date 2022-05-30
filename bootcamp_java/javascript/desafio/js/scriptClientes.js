import {clientes} from "./clientes.js";
clientes;

window.onload = function() {
    const btnFechar = document.querySelector("#btnFechar");

    btnFechar.addEventListener('click', function() {
        document.getElementById("content-form").style.display = "none";
    });

    let codigo   = document.querySelector("#txtCodigo");
    let nome     = document.querySelector("#txtNome");
    let data     = document.querySelector("#txtData");

    let avancar  = document.querySelector("#avancar");
    let novo     = document.querySelector("#novo");
    let salvar   = document.querySelector("#salvar");
    let voltar   = document.querySelector("#voltar");

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
        qtdCliente     = qtdCliente + 1;

        var date       = new Date();
        var dia        = String(date.getDate()).padStart(2, '0');
        var mes        = String(date.getMonth() + 1).padStart(2, '0');
        var ano        = date.getFullYear();
        var dataAtual  = (dia + '/' + mes + '/' + ano);

        codigo.value   = qtdCliente;
        nome.value     = "";
        data.value     = dataAtual;
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
}