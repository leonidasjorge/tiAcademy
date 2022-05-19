window.onload = function() {

    // let inc             = 0;
    // let nomes           = ['Marcelo', 'José', 'Maria', 'Pedro']

    // console.log(nomes[inc]);

    // inc                 = inc + 1;
    // console.log(nomes[inc]);

    // inc++
    // console.log(nomes[inc]);

    const txtNome          = document.querySelector("#txtNome")
    const btnEnviar        = document.querySelector("#btnEnviar")

    btnEnviar.addEventListener('click', function() {
        console.log(txtNome.value)

        // let url         = 'http://' + txtNome.value
        // location.href   = url

        let confereTxtNome = txtNome.value

        if (confereTxtNome == '') {
            alert('Você precisa digitar algo')
        } else {
            alert('Você digitou ' + confereTxtNome)
        }
    })

    for (let frutas in produtos) {
        let f = produtos[frutas]

        for (resultadoDeFrutas in f) {
            f [resultadoDeFrutas].nomeFruta
            f [resultadoDeFrutas].valor
        }
    }
}