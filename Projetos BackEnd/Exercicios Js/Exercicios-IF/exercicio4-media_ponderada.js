/* 
   4) O sistema de avaliação de determinada disciplina, 
   é composto por três provas. A primeira prova tem peso 4, 
   a Segunda tem peso 3 e a terceira prova tem peso 3. 
   Faça um algoritmo para calcular a média final de um aluno 
   desta disciplina. 
   Caso a média seja maior ou igual a 7 mostre APROVADO, 
   se a média for entre 5 e 7, mostre em RECUPERAÇÃO, 
   e se for menor do que 5 mostre REPROVADO. 
*/

var nota1 = parseFloat(prompt("Digite a primeira nota"));
var nota2 = parseFloat(prompt("Digite a segunda nota"));
var nota3 = parseFloat(prompt("Digite a terceira nota"));
               
var peso1 = 4;
var peso2 = 3;
var peso3 = 3;

var mediaPonderada = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / 
    (peso1 + peso2 + peso3);

if (mediaPonderada >= 7) {
    alert("A média foi: " + mediaPonderada + ", e você foi Aprovado(a)");
} else if(mediaPonderada >= 5 && mediaPonderada < 7) {
    alert("A média foi: " + mediaPonderada + ", e você está de Recuperação");
} else {
    alert("A média foi: " + mediaPonderada + ", e você foi Reprovado(a)");
} 