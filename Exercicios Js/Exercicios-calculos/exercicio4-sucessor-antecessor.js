/*
    4) Construir um programa que leia um valor numérico inteiro e apresente como 
    resultado os seus valores: sucessor e antecessor.
*/


// Entrada
var numeroDigitado = parseInt(prompt("Digite o número desejado"));

// Processamento
var sucessor = numeroDigitado + 1;
var antecessor = numeroDigitado - 1;

// Saída
console.log("Sucessor: " + sucessor);
console.log("Antecessor: " + antecessor);