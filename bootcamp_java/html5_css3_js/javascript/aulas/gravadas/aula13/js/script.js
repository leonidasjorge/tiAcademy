// let i = 2; // i é variável Global, por motivo de estar fora do "for";

// // x é variável Local, por motivo de estar dentro do "for";
// for (let x = 0; x < 10; x++) {
//     console.log(`O valor da iteração de X é: ${x}. O valor de i é: ${i++}`);
// }

// let Pessoas = {
//     nome  : 'Steven Roger',
// }

// // console.log(Pessoas.nome);

/* ================================================================================= */

// "For IN" trabalha com objetos.
// "For OFF" trabalha com arrays.

/* ================================================================================= */

// for (let propriedades in Pessoas) {
//     console.log(Pessoas.nome);
// }

/* ================================================================================= */

// let frutas = ['Melancia', 'Manga', 'Banana', 'Uva'];

// for (let nomeFrutas of frutas) {
//     console.log(nomeFrutas);
// }

// for (let x = 0; x < frutas.length; x++) {
//     console.log(`O nome da fruta é: ${frutas[x]}`);
// }

/* ================================================================================= */

// Abaixo, temos um "Array de Objetos"
let Herois = [

    {
        identidadeSecreta : 'Steven Roger',
        heroi             : 'Capitão América',
    },

    {
        identidadeSecreta : 'Tony Stark',
        heroi             : 'Homem de Ferro',
    },
];

Herois.push({identidadeSecreta: 'Diana', heroi: 'Mulher Maravilha'});
Herois.push({identidadeSecreta: 'Bruce', heroi: 'Hulk'});

// let marvel = Herois[1].identidadeSecreta;
// console.log(marvel);

for (let marvel of Herois) {
    // console.log(marvel);
    
    for (let m in marvel) {
        console.log(`${m} -> ${marvel[m]}`);
    }
}

/* ================================================================================= */