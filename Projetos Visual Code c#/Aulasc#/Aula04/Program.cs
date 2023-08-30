using System;


class Aul05 
{
    //Exemplo de Variavel que me retorna um resultado de Multiplicação

     static void Main()
      {
        int Res = 10 * 10;
        Console.WriteLine(Res);
     }

    //Exemplo de Variavel que me retorna um resultado Verdadeiro ou falso em uma condição

    // static void Main()
    // {
    //     bool Conta = 10 > 0;
    //     Console.WriteLine(Conta);
    // }

    // Exemplo de Variavel utilizando um operador logico
    static void booleano()
    {
    // & = AND / E Retorna True se todas operações derem Verdadeiras
    // | = OR / OU Retorna false caso todas as operaçoes derem falsas
        bool res = (5 > 3) & (3 > 5);
        Console.WriteLine(res);
    }
}

