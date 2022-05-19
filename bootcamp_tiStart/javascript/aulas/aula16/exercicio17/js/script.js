/*
* EXERCÍCIO 17 === HÁ CONTEÚDO NO "html.index";
*
* Refatore o exercício anterior, usando a mesma função "tabuada" para receber o valor de um elemento de entrada input.
*
* Observações:
* - A função será executada quando o usuário clicar no botão;
* - Todas as mensagens de retorno deverão ser mostradas na página em um "el" html;
* - Não use o método "documento.write" como método de saída.
*/

window.onload = function () {

    const tab  = document.querySelector("#tabuada");
    const btn  = document.querySelector("#calcular");
    const resp = document.querySelector("#resposta");

    btn.addEventListener('click', function() {
        
        let numero = Number(tab.value);
        let tabuada = 0;

        resp.innerHTML = '';

        if (isNaN(numero)) {

            resp.innerHTML = "Digite um valor numérico, válido";

        } else {
            if (numero < 1 || numero > 10) {

                resp.innerHTML = "Digite um valor entre 1 e 10";

            } else {

                resp.innerHTML = `Tabuada do ${numero} <br>`;

                while (tabuada <= 10) {

                    resp.innerHTML += `<br> - ${numero} x ${tabuada} = ${(numero * tabuada)}`;
                    tabuada++;
                }
            }
        }
    });

};