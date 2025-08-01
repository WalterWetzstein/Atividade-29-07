const prompt = require("prompt-sync")();

let numeros = new Array(5);

numeros[0] = Number(prompt("Digite o número 1: "));
numeros[1] = Number(prompt("Digite o número 2: "));
numeros[2] = Number(prompt("Digite o número 3: "));
numeros[3] = Number(prompt("Digite o número 4: "));
numeros[4] = Number(prompt("Digite o número 5: "));

let maiorNumero = numeros[0];

for(let i = 1; i < 5; i++){
    if(numeros[i] > maiorNumero){
        maiorNumero = numeros[i];
    }
}

console.log(`O maior número foi o: `,maiorNumero)


