// concat () -> Junta 2 ou mais arrays;

/*
let nomes = ["Marcelo", "Suelem", "Leônidas", "Daiane", "Laura"];
let nomes2 = ["Pedro", "Paulo", "Maria", "Leon"];

let todosNomes = nomes.concat(nomes2);

console.log(nomes);
console.log(nomes2);
console.log(todosNomes);

let qtdArrayNomes = `O array nomes possui ${nomes.length} elementos.`;
let qtdArrayNomes2 = `O array nomes2 possui ${nomes2.length} elementos.`;
let qtdArrayNomesTodos = `Os dois arrays juntos possuem ${todosNomes.length} elementos.`;

console.log(qtdArrayNomes);
console.log(qtdArrayNomes2);
console.log(qtdArrayNomesTodos);
*/

/* ================================================================================= */

// indexOf () -> Procura um determinado elemento de um array; retorna uma posição.

/*
let nomes2 = ["Pedro", "Paulo", "Maria", "Leon"];
console.log(nomes2.indexOf("Leon")); // retorna a posição/índice 3
console.log(nomes2.indexOf("Leonidas")); // retorna a posição/índice -1, porque, não tem ele, ou seja, quando não encontrar a informação, retorna -1.

let buscaNome = "Leon";

if (nomes2.indexOf(buscaNome) != (-1)) {
    alert(`Eu encontrei o nome ${buscaNome} e está na posição ${nomes2.indexOf(buscaNome)}`);
} else {
    alert(`Não encontrei o nome ${buscaNome}`);
}
*/

/* ================================================================================= */

// join () -> Transforma elementos de um array em uma string.
/*
let nomes2 = ["Pedro", "Paulo", "Maria", "Leon"];

console.log(nomes2);
console.log(nomes2.join());
*/

/* ================================================================================= */

// push () -> Insere elementos no fim do array.
// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];

// frutas.push("Maçã", "Laranja", "Pera");
// frutas.push("Banana");

// console.log(frutas.indexOf("Jaca"));

// let insertFruta = "Amora";

// if (frutas.indexOf(insertFruta) == (-1)){
    
//     console.log(`A fruta ${insertFruta} não está na lista.`);
//     frutas.push(insertFruta);

// } else {

//     console.log(`A fruta ${insertFruta} já está na lista.`);
// }

// console.log(frutas);

/* ================================================================================= */

// pop () -> Remove o último elemento da lista.
// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];

// frutas.pop();
// console.log(frutas);

/* ================================================================================= */

// reverse() -> Inverte a ordem dos elementos de um array.
// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];

// frutas.reverse();
// console.log(frutas);
// console.log(frutas[0]);

/* ================================================================================= */

// shift () -> Remove o primeiro elemento.
// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];

// frutas.shift();
// console.log(frutas);

/* ================================================================================= */

// sort () -> Ordena elementos de um array.
// let numeros = [200, 2, 1, 189, 77];
// let alfa = ["n", "p", "c", "a", "b", "j"];

// numeros.sort();
// console.log(numeros);

// alfa.sort();
// console.log(alfa);

/* ================================================================================= */

// toString() -> Converte um array em uma string e retorna esta string.
// let frutas = ["Uva", "Pera", "Jaca", "Nevascaranga"];

// console.log(frutas.toString());

/* ================================================================================= */

// unshift () -> Insere um elemento no ínicio do Array.
/* ================================================================================= */

// splice () -> Corta ou remove um elemento de um array em um ponto indicado.
// agrupar com indexOf ().


// let nomes2 = ["Pedro", "Paulo", "Maria", "Leon"];
// let novaLista = nomes2.splice(0, 1);

// console.log(novaLista);
// console.log(nomes2);