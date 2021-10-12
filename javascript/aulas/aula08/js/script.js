/* TEMPLATE STRING
*
* let str = `Qualquer conteúdo!`;
* let str2 = `Uma outra string ${str}`;
*
* console.log(str2);
*/

/* ARRAYS são uma coleção de dados
*
* O array é constituído por elementos
* No exemplo abaixo, o tamanho do array é 4, por motivo de ter 4 elementos/"frutas".
* O Array começa SEMPRE no índice 0.
* No exemplo abaixo:
* - Uva está na posição 0;
* - Banana está na posição 1;
* - Laranja está na posição 2;
* - Melancia está na posição 3.
*/

/*
* const frutas = ["Uva", "Banana", "Laranja", "Melancia"];
* let euGosto = `Eu gosto de ${frutas[2]}`;
* 
* console.log(euGosto);
* 
* console.log(frutas[0]);
* console.log(frutas[1]);
* console.log(frutas[2]);
* console.log(frutas[3]);
*/

const pessoa = [
    "José", // Índice 0;
    23, // Índice 1;
    "Solteiro", // Índice 2;
    "Bola", // Índice 3;
    1.70, // Índice 4;
    
    cores = ["Azul", "Preto", "Vermelho", "Salmão", "Ocre"] // cores está no índice/posição 5.
];

let key = 3;

key++;

console.log(pessoa.length);
console.log("Leônidas"[0], "Leônidas"[1]);
console.log(pessoa[5][key]); // Array Bidimensional

/*
* (function(p){
*     const jose = `Meu nome é ${pessoa[0]}.
*         Tenho ${pessoa[1]} anos.
*         Sou ${pessoa[2]}.
*         Também gosto de jogar ${pessoa[3]}.
*         Minha altura é de ${pessoa[4]} metros.`;
* 
*     document.write(jose);
* })(pessoa)
*/