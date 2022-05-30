// match () -> O método "match()" procura uma palavra em uma string.
// g = Global/ i = Ignora se é maiúsculo ou minúsculo/ m

// let nome = "Leônidas Amurabi Jorge";

// console.log(nome.match("L"));

/* ================================================================================= */

// O método search () procura pela ocorrência, retornando a posição na cadeia da string.

// console.log(nome.search(/m/i));

/* ================================================================================= */

// O método replace () substitui uma string por outra. Simples assim, ele pesquisa.

// let str = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. A iusto iure accusantium perferendis nobis, alias eveniet fugit consectetur sequi ea tempora mollitia magnam nihil dolorem nemo, optio ratione vero eum.`;

// let strOutra = str.replace(/sit/gi, "não");

// console.log(strOutra);

/* ================================================================================= */

// O método localeCompare() compara, efetua a comparação entre duas strings.
// Se as duas strings forem iguais, o retorno será 0;
// Se as duas strings forem diferentes, o retorno será -1 ou 1;

// let gato = "gato";
// let outroGato = "gato";

// console.log(gato.localeCompare(/Gato/gi));

/* ================================================================================= */

// toString() -> Irá converter um valor qualquer em String.

// let num = Number("10");

// console.log(num.toString());

/* ================================================================================= */

// toLowerCase() -> Converte uma string inteira em caracteres minúsculos (caixa baixa).

// let str = `LOREM ipsum dolor sit amet consectetur, adipisicing elit. A iusto iure accusantium perferendis nobis, alias eveniet fugit consectetur sequi ea tempora mollitia magnam nihil dolorem nemo, optio ratione vero eum.`;

// console.log(str.toLowerCase());

// let gato = "gato";
// let outroGato = "GATO";

// let cat1 = gato.toLowerCase();
// let cat2 = outroGato.toLowerCase();

// console.log(cat1.localeCompare(cat2));

/* ================================================================================= */

// toUpperCase() -> Converte uma string inteira em caracteres maiúsculos (caixa alta).

// let str = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. A iusto iure accusantium perferendis nobis, alias eveniet fugit consectetur sequi ea tempora mollitia magnam nihil dolorem nemo, optio ratione vero eum.`;

// console.log(str.toUpperCase());

/* ================================================================================= */

// trim() -> Faz a remoção de espaços antes e depois da string especificada.

// let str1 = `         Lorem ipsum dolor sit amet consectetur, adipisicing elit. A iusto iure accusantium perferendis nobis, alias eveniet fugit consectetur sequi ea tempora mollitia magnam nihil dolorem nemo, optio ratione vero eum.        `;

// console.log(str1.trim());

// console.log(str1);

/* ================================================================================= */

// NaN -> Significa Not as Number (Não é um Número)
// Quando uma String for passada para Number(), parseInt()ou parseFloat(), e, não dê certo a conversão para Number(), será retornado NaN.
// Função isNaN() irá retornar verdadeiro (NÃO É NÚMERO) ou falso (É NÚMERO).

// let num = Number("oio");
// console.log(num); // retornou NaN
// console.log(isNaN(num));

// if (!isNaN(num)) {
//     console.log("Isto é um número.");
// } else {
//     console.log("Isto não é um número.");
// }

/* ================================================================================= */

// toFixed() -> Esta função analisa um valor flutuante e retorna uma String conforme o parâmetro de casas.

// let valor = 2.456;

// console.log(valor.toFixed(2)); // O número entre parênteses é a quantidade de casas decimais

/* ================================================================================= */

// toLocaseString() -> Este método irá retornar uma String com uma representação da moeda definida como no parâmetro currency (moeda corrente).
// toLocaleString("pt-br", {style: "currency", currency: "BRL"});

let valor = 2.456;

console.log(valor.toLocaleString("pt-br", {style: "currency", currency: "BRL"}));