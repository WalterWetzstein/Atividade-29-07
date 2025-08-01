const prompt = require("prompt-sync")();

let nome = prompt("Nome: ");
let idade = prompt("Idade: ");
let altura = prompt("Digite a sua altura (em metros): ");

console.log(`Meu nome é ${nome}, tenho ${idade} anos e ${altura}m de altura.`);