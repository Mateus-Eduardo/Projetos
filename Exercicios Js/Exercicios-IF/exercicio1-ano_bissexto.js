/*
  1) Elaborar um algoritmo que informe se um ano informado 
  pelo usuário é bissexto ou não.
*/ 
var ano = parseInt(prompt("Digite o ano"));
debugger;
var anoEhBissexto = ano % 4 == 0 || ano % 100 == 0 || ano % 400 == 0;

if (anoEhBissexto) {
    alert("Ano bissexto");
} else {
    console.log("Ano não bissexto");
}