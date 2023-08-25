/* 
    7) O custo ao consumidor de um carro novo é a soma do 
       custo de fábrica com a percentagem do distribuidor e 
       dos impostos (aplicados ao custo de fábrica). 
       Supondo que a percentagem do distribuidor seja de 28% e os 
       impostos de 45%, escrever um algoritmo que leia o custo de 
       fábrica de um carro e escreva o custo ao consumidor.
*/
// Entradas
var custoFabrica = parseFloat( prompt("Digite o custo de fábrica") );

// Processamento
var imposto = custoFabrica * (45/100);
var valorDistribuidor = custoFabrica * (28/100);
var custoConsumidor = custoFabrica + imposto + valorDistribuidor;

// Saída
console.log("Custo ao consumidor: " + custoConsumidor);