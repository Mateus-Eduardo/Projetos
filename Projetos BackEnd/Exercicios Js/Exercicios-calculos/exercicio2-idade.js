/*
    2) Crie um programa que lê o ano de nascimento de 
    uma pessoa e o ano atual. Calcule e mostre qual é: a idade da 
    pessoa em anos, a idade da pessoa em meses, a idade da 
    pessoa em dias e a idade da pessoa em semanas.
*/ 

// Entrada
var anoNascimento = parseInt( prompt("Digite o ano de nascimento") );
var anoAtual = parseInt( prompt("Digite o ano de atual") );

// Processamento
var idadeEmAnos = anoAtual - anoNascimento;
var idadeEmMeses = idadeEmAnos * 12;
var idadeEmSemanas = idadeEmAnos * 52;
var idadeEmDias = idadeEmAnos * 365;

// Saída
console.log("Idade em anos: " + idadeEmAnos);
console.log("Idade em meses: " + idadeEmMeses);
console.log("Idade em semanas: " + idadeEmSemanas);
console.log("Idade em dias: " + idadeEmDias);



