import {clientes} from "./clientes.js";
clientes;

import {produtos} from "./produtos.js";
produtos;

window.onload = function() {
    const btnFechar    = document.querySelector("#btnFechar");

    btnFechar.addEventListener('click', function() {
        document.getElementById("content-form").style.display = "none";
    })
}