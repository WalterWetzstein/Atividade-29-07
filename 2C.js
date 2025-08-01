const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite a idade da pessoa: "));

if(idade <= 12){
    console.log(`É uma criança`);
}
else if(idade <= 17){
    console.log(`É um adolescente`);
}
else if(idade <= 64){
    console.log(`É uma pessoa adulta`);
}
else if(idade > 64){
    console.log(`É uma pessoa idosa`);
}