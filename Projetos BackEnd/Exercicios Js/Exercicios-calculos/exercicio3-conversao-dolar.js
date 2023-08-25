/*
    3) Elaborar um programa que apresente o valor da conversão 
       em real (R$) de um valor lido em dólar (US$). 
       O programa deve solicitar o valor da cotação do dólar.
*/

// Entrada
var valorEmDolar = parseFloat( prompt("Digite a quantidade de dólares que deseja converter") );
var cotacaoDolar = parseFloat( prompt("Digite a cotação do dólar") );

// Processamento
var valorEmReal = valorEmDolar * cotacaoDolar;

// Saída
console.log("Valor em reais: " + valorEmReal.toFixed(2));
