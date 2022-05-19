/*
* EXERCÍCIO 12
*
* Crie uma função que:
* - Conte quantos caracteres uma palavra possui;
* - Converta essa mesma palavra para maiúscula;
* - Imprima somente a terceira letra dessa palavra;
* - Troque essa mesma letra da palavra pela letra "X".
*
* Exemplo de saída da função:
* - Esta palavra tem 7 caracteres.
* - A palavra "Leônidas" ficou "LEÔNIDAS".
* - A letra "R" é o terceiro caracter da palavra Leônidas.
* - Leônidas ficou LeXnidas.
*/

let palavra = "Leônidas";


// A FUNÇÃO ABAIXO É AUTO-EXECUTÁVEL
(function(){
    console.log(`- Esta palavra tem ${palavra.length} caracteres.`);
    console.log(`- Esta palavra " ${palavra} " em letras maiúsculas, ficou: ${palavra.toUpperCase()}.`);
    console.log(`- A letra ${palavra[2]}, é o terceiro caractere.`);
    console.log(`- ${palavra} ficou ${palavra.replace(palavra[2], "X")}`);
})(palavra)

