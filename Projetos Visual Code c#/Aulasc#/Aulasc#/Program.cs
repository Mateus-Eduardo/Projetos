
// O código começa aqui quando o programa é executado
using System;
// A diretiva 'using System;' permite usar classes e funcionalidades do namespace System

class Aula01
// 'class Aula01' define a classe chamada Aula01, que encapsula o código do programa
{
    static void Main(string[] args)
    // 'static void Main(string[] args)' é o ponto de entrada do programa,
    // onde a execução começa. 'static' indica que o método pertence à classe,
    // 'void' indica que o método não retorna um valor e 'Main' é o nome do método.
    // 'string[] args' é uma matriz de strings que pode conter argumentos passados na linha de comando.
    // Aqui começamos a escrever o código real do programa
    // Console.WriteLine("Olá Mundo");
    // Este comando escreve "Olá Mundo" no console e adiciona uma quebra de linha.
    {
        Console.WriteLine("Olá Mundo");
        // Console.Write("aaaaaaaaaa");
        // Este comando escreve "aaaaaaaaaa" no console sem adicionar uma quebra de linha.
        // Isso significa que a próxima saída aparecerá na mesma linha.
        Console.Write("aaaaaaaaaa");
        // O código termina aqui
        // Quando o programa é executado, ele começará a partir do método Main.
        // Ele executará os comandos dentro do método Main na ordem em que aparecem.
        // Se o programa tiver argumentos da linha de comando, eles podem ser acessados
        // através da matriz 'args', por exemplo, 'args[0]' para o primeiro argumento.
    }
}
