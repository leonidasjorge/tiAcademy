/* TEMPLATE STRING */

let str  = `Qualquer conteúdo!`;
let str2 = `Uma outra string ${str}`;

// console.log(str2);

/* */

// ARRAYS são uma coleção de dados.
// O array é constituído por elementos

// Índice         0       1          2           3
const frutas = ["Uva", "Banana", "Laranja", "Melancia"]; // Este array possui 4 elementos; o tamanho deste array é 4

let euGosto = `Eu gosto de ${frutas[2]}`;

// console.log(euGosto); // Uva

// console.log(frutas[0]); // Uva
// console.log(frutas[1]); // Banana
// console.log(frutas[2]); // Laranja
// console.log(frutas[3]); // Melancia

const pessoa = [
    "José", // índice 0
    23, // índice 1
    "Solteiro", // índice 2
    "Bola", // índice 3
    1.70, // índice 4

    cores = ["Azul", "Preto", "Vermelho", "Salmão", "Ocre"] // índice 5
];

let key = 3;
key++; // índice 4

console.log(pessoa.length); // Tamanho do Array
console.log("Leônidas".length); // Tamanho da String
console.log("Leônidas"[0], "Leônidas"[1]);
console.log(pessoa[5][key]); // Isto se chama "Array Bidimensional"

// Função Auto Executável
// (function (pessoa) {
//     const jose = `Meu nome é ${pessoa[0]}; tenho ${pessoa[1]} anos; sou ${pessoa[2]}; gosto de jogar ${pessoa[3]}, e, tenho ${pessoa[4]} de altura.`;
//     document.write(jose);
// })(pessoa)

