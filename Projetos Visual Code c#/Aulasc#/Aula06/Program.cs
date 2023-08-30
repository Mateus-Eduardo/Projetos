using System;
// Formatação na saida o console;...
class Aula06
{
    static void Main()
    {
        double valorCompra = 10;
        double valorVenda = 5.50;
        double valorLucro = 0.1;

        valorVenda = valorCompra + (valorCompra * valorLucro);

        string produto="pastel";

        Console.WriteLine("Produto..........:{0,15}", produto);
        Console.WriteLine("Val.Compra.......:{0,15:c}", valorCompra);
        Console.WriteLine("Lucro............:{0,15}:p", valorLucro );
        Console.WriteLine("ValorDeVenda.....:{0,15}:c", valorVenda);

    }

}