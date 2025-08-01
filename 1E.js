const prompt = require("prompt-sync")();

let distanciaViagem = Number(prompt("Distância da viagem: "));
let consumoMedioKmL = Number(prompt("Consumo médio do carro (em km/l): "));
let precoGasolina = Number(prompt("Preço da gasolina: "));

let litrosNecessarios = distanciaViagem / consumoMedioKmL;
let custoViagem = litrosNecessarios * precoGasolina;

console.log(`A quantidade de litros necessários para ${distanciaViagem}km é de: ${litrosNecessarios.toFixed(2)}`);
console.log(`A viagem vai custar: ${custoViagem.toFixed(2)}`);