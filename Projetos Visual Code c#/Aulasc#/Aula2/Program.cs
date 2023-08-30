using System;

class Aula02
{
    static void Main(string[] args)
    {
        // Escreve "Olá Mundo" no console
        Console.WriteLine("Olá Mundo");

        // Escreve o primeiro argumento passado na linha de comando
        // args é um array de strings contendo argumentos passados ao programa
        // args.GetValue(0) obtém o primeiro argumento
        Console.Write(args.GetValue(0));
    }
}
