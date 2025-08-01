const prompt = require("prompt-sync")();

let valorTotal = Number(prompt("Digite o valor total: "));
let quantidadeClientesEfetuadores = Number(prompt("Digite a quantidade de clientes que pagarão: "));

let valorDividido = valorTotal / quantidadeClientesEfetuadores;

console.log(`O valor dividido foi de: R$${valorDividido.toFixed(2)}`);