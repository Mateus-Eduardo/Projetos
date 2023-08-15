/* 
   5) Elabore um algoritmo que leia 3 valores inteiros 
      e mostre o maior valor entre eles.
*/
var valor1 = parseInt(prompt("Digite o primeiro número"));
var valor2 = parseInt(prompt("Digite o segundo número"));
var valor3 = parseInt(prompt("Digite o terceiro número"));

if (valor1 > valor2 && valor1 > valor3) {
    alert("O maior valor é " + valor1);
} else if (valor2 > valor1 && valor2 > valor3) {
    alert("O maior valor é " + valor2);
} else if (valor3 > valor1 && valor3 > valor2) {
    alert("O maior valor é " + valor3);
} else {
    alert("Os valores são iguais");
}