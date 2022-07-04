window.onload = function() {
    const btnClicar   = document.querySelector('#btnClicar')
    const btnRemovAdd = document.querySelector('#btnRemovAdd')
    const btnSumir    = document.querySelector('#btnSumir')
    const testeDiv    = document.querySelector('#testeDiv')

    btnClicar.addEventListener('click', function() {

        testeDiv.classList.add('corVermelho')
    })

    btnRemovAdd.addEventListener('click', function() {

        testeDiv.classList.remove('corVermelho')
        testeDiv.classList.add('corVerde')
    })

    btnSumir.addEventListener('click', function() {

        testeDiv.classList.add('sumirAdiv')
    })
}