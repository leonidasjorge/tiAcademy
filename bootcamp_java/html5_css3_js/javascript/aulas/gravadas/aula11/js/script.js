// function Pessoa(nome){
//     this.nome = nome;
// }

// Pessoa.prototype.msg = function (){
//     alert("Olá, " + this.nome + ". Tudo bem?");
// }

// let NovaPessoa = new Pessoa("José");
// let OutraPessoa = new Pessoa("Maria");

// NovaPessoa.msg();
// OutraPessoa.msg();
// // console.log(NovaPessoa.nome);

// console.log(NovaPessoa);

/* ================================================================================= */

// let Pessoa2 = {
//     "nome":"",
//     "idade":""
// }

// console.log(Pessoa2);

// Pessoa2.__proto__.msg = function(){
//     alert("Olá, " + Pessoa2.nome);
// }

// let P = Pessoa2;
// P.nome = "Marcelo";
// P.msg();

// console.log(P);

/* ================================================================================= */

let Pessoa3 = [
    {
        "nome"  : "Marcelo", // Índice 0
        "idade" : 36,
        "sexo"  : "M"
    },

    {
        "nome"  : "Suelem", // Índice 1
        "idade" : 35,
        "sexo"  : "F"
    },

    {
        "nome"  : "Leônidas", // Índice 2
        "idade" : 30,
        "sexo"  : "M"
    },
]

let NPessoa = Pessoa3;

console.log(NPessoa[1].nome);