let dadosCep = async function(cep) {

    let url            = `https://viacep.com.br/ws/${cep}/json/`;

    try {
        let dadosFetch = await fetch(url);
        let dadosJson  = await dadosFetch.json();
        
        resultadoCep(dadosJson);
    } catch (error) {
        console.log("- Mensagem de erro: " + error.message);
        alert('Digite um CEP válido.');
    }
};

function resultadoCep (dadosCep) {

    for (let campo in dadosCep) {
        
        if (document.querySelector(`#${campo}`)) {
            document.querySelector(`#${campo}`).value = dadosCep[campo];
        }
    }
};

const btnBuscarCep = document.querySelector('#buscarCep');
const inputCep = document.querySelector('#cep');

btnBuscarCep.addEventListener('click', function() {
    
    dadosCep(inputCep.value);
});

export {resultadoCep};