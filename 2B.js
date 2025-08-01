const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número: "));

if(numero % 2 == 0){
    console.log(`É um número par!`)
}else{
    console.log(`É um número ímpar)`)
}