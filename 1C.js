const prompt = require("prompt-sync")();

let numero1 = prompt("Valor do primeiro número: ");
let numero2 = prompt("Valor do segundo número: ");

console.log(`O valor da soma é igual a ${Number(numero1)+Number(numero2)}`);