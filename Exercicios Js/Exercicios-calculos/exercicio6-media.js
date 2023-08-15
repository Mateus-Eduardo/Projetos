/*
    6) Faça um algoritmo que leia as 5 notas de um aluno e 
       calcule a média final deste aluno.
*/

// Entradas
var nota1 = parseFloat( prompt("Digite a primeira nota") );
var nota2 = parseFloat( prompt("Digite a segunda nota") );
var nota3 = parseFloat( prompt("Digite a terceira nota") );
var nota4 = parseFloat( prompt("Digite a quarta nota") );
var nota5 = parseFloat( prompt("Digite a quinta nota") );

// Processamentos
var media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

// Saídas
console.log("Média: " + media);