window.onload = function () {
    // De acordo com os usuários/senhas "cadastrados" no arquivo "./js/usuario.json", esta função valida se o "usuário e a senha" informados no formulário estão corretos.
    // Se estiverem corretos, realiza o "login".
    // Se estiverem errados, informa mensagem de erro.
    function validaLogin(dados) {
        if (user.value == "" || pws.value == "") {
            alert("Os campos 'Usuário' e/ou 'Senha' não podem ficar vazios.");
        } else {
            const usuarios = dados.users;
            const encontrarUsuario = usuarios.find((usuario) => {
                return usuario.user === user.value && usuario.pws === pws.value;
            });
            encontrarUsuario
                ? (window.location.href = "./panel.html")
                : alert("Usuário ou Senha Inválidos");
        }
    }

    // A variável "dadosJson" recebe os dados do arquivo "usuario.json", ou, apresenta erro, caso aconteça.
    let dadosUsuario = async function() {
        let url = "./js/usuario.json";

        try {
            let dadosFetch = await fetch(url);
            let dadosJson  = await dadosFetch.json();
            
            validaLogin(dadosJson);
            
        } catch (error) {
            alert(error);
        }
    }

    const nomeUsuario  = document.querySelector("#user");
    const senhaUsuario = document.querySelector("#pws");    
    const btnEntrar    = document.querySelector("#btnEntrar");

    btnEntrar.addEventListener('click', function() {
        dadosUsuario();
    })
}