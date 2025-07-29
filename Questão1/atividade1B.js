const prompt = require("prompt-sync")();

let numeroA = Number(prompt("digite um numero:"));
let numeroB = Number(prompt("digite um numero:"));

console.log(numeroA + numeroB);

console.log("A soma entre os numero e:", numeroA + numeroB);

if(numeroB===0){
    console.log("impossivel dividir por zero!");
}else{
    console.log("a divisao entre os numero é: ", divisao);
}