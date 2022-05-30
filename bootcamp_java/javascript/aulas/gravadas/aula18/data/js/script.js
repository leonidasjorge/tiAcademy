/*
* GET = Pega os dados.
*
* getDate()     = Trás o resultado do dia;
* getMonth()    = Retorna o mês utilizado;
* getFullYear() = Retorna o ano com 4 dígitos;
* getHours()    = Retorna o valor das horas;
* getMinutes()  = Trás os minutos informados.
*
* SET = Envia dados.
*
* setDate()     = Modifica o valor dia;
* setMonth()    = Modifica o valor mês;
* setFullYear() = Modifica o valor ano de 4 dígitos;
* setHours()    = Modifica o valor das horas;
* setMinutes()  = Modifica os minutos.
*/

let meses = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
];

let diaSemana = [
    'domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'
];

let data = new Date();
console.log(`Hoje é ${diaSemana[data.getDay()]}, ${data.getDate()} de ${meses[data.getMonth()]} de ${data.getFullYear()}.`);

let dataFormatada = data.toLocaleString('pt-br', {year: 'numeric', month:'2-digit', day:'2-digit'});
console.log(dataFormatada);