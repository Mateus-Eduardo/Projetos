
class Program
{
    static string mensagemDeBoasVindas = "Boas vindas ao Screen Sound";
    static Dictionary<string, List<int>> bandasRegistradas = new Dictionary<string, List<int>>();

    static void Main(string[] args)
    {
        ExibirLogo();
        ExibirOpcoesDoMenu();
    }

    static void ExibirLogo()
    {
        Console.WriteLine(@"
░██████╗░█████╗░██████╗░███████╗███████╗███╗░░██╗  ░██████╗░█████╗░██╗░░░██╗███╗░░██╗██████╗░
██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝████╗░██║  ██╔════╝██╔══██╗██║░░░██║████╗░██║██╔══██╗
╚█████╗░██║░░╚═╝██████╔╝█████╗░░█████╗░░██╔██╗██║  ╚█████╗░██║░░██║██║░░░██║██╔██╗██║██║░░██║
░╚═══██╗██║░░██╗██╔══██╗██╔══╝░░██╔══╝░░██║╚████║  ░╚═══██╗██║░░██║██║░░░██║██║╚████║██║░░██║
██████╔╝╚█████╔╝██║░░██║███████╗███████╗██║░╚███║  ██████╔╝╚█████╔╝╚██████╔╝██║░╚███║██████╔╝
╚═════╝░░╚════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚══╝  ╚═════╝░░╚════╝░░╚═════╝░╚═╝░░╚══╝╚═════╝░");
        Console.WriteLine(mensagemDeBoasVindas);
    }

    static void ExibirOpcoesDoMenu()
    {
        Console.WriteLine("\nDigite 1 para registrar uma banda");
        Console.WriteLine("Digite 2 para mostrar todas as bandas");
        Console.WriteLine("Digite 3 para avaliar uma banda");
        Console.WriteLine("Digite 4 para exibir a média de uma banda");
        Console.WriteLine("Digite -1 para sair");
        Console.Write("\nDigite a sua opção: ");

        string opcaoEscolhida = Console.ReadLine()!;
        int opcaoEscolhidaNumerica = int.Parse(opcaoEscolhida);

        switch (opcaoEscolhidaNumerica)
        {
            case 1:
                RegistrarBanda();
                break;
            case 2:
                MostrarBandasRegistradas();
                break;
            case 3:
                AvaliarUmaBanda();
                break;
            case 4:
                ExibirMedia();
                break;
            case -1:
                Console.WriteLine("tchau tchau :)");
                break;
            default:
                Console.WriteLine("opção inválida");
                break;
        }
    }

    static void RegistrarBanda()
    {
        Console.Clear();
        ExibirTituloDaOpcao("Registro de bandas");

        Console.Write("Digite o nome da banda que deseja registrar: ");
        string nomeDaBanda = Console.ReadLine()!;

        bandasRegistradas.Add(nomeDaBanda, new List<int> { 1 });
        Console.WriteLine($"A banda {nomeDaBanda} foi registrada com sucesso!");

        Thread.Sleep(2000);
        Console.Clear();
        ExibirOpcoesDoMenu();
    }

    static void MostrarBandasRegistradas()
    {
        Console.Clear();
        ExibirTituloDaOpcao("Exibindo todas as bandas registradas");

        foreach (string banda in bandasRegistradas.Keys)
        {
            Console.WriteLine($"Banda: {banda}");
        }

        Console.WriteLine("\nDigite uma tecla para voltar ao menu principal");
        Console.ReadKey();
        Console.Clear();
        ExibirOpcoesDoMenu();
    }

    static void ExibirTituloDaOpcao(string titulo)
    {
        int quantidadeDeLetras = titulo.Length;
        string asteriscos = new string('*', quantidadeDeLetras);
        Console.WriteLine(asteriscos);
        Console.WriteLine(titulo);
        Console.WriteLine(asteriscos + "\n");
    }

    static void AvaliarUmaBanda()
    {
        Console.Clear();
        ExibirTituloDaOpcao("Avaliar banda");
        Console.Write("Digite o nome da banda que deseja avaliar: ");
        string nomeDaBanda = Console.ReadLine()!;

        if (bandasRegistradas.ContainsKey(nomeDaBanda))
        {
            Console.Write("Digite a nota para a banda: ");
            int nota = int.Parse(Console.ReadLine()!);

            if (bandasRegistradas[nomeDaBanda].Contains(nota))
            {
                bandasRegistradas[nomeDaBanda].Add(nota);
                Console.WriteLine($"Avaliação {nota} atribuída à banda {nomeDaBanda}");
            }
            else
            {
                Console.WriteLine("Você já atribuiu essa nota à banda anteriormente.");
            }
        }
        else
        {
            Console.WriteLine($"\nA banda {nomeDaBanda} não foi encontrada!");
        }

        Console.WriteLine("Digite uma tecla para voltar ao menu principal");
        Console.ReadKey();
        Console.Clear();
        ExibirOpcoesDoMenu();
    }

    static void ExibirMedia()
    {
        Console.Clear();
        ExibirTituloDaOpcao("Exibir média da banda");
        Console.Write("Digite o nome da banda que deseja exibir a média: ");
        string nomeDaBanda = Console.ReadLine();

        if (bandasRegistradas.ContainsKey(nomeDaBanda))
        {
            List<int> notasDaBanda = bandasRegistradas[nomeDaBanda];
            Console.WriteLine($"\nA média da banda {nomeDaBanda} é {notasDaBanda.Average()}.");
        }
        else
        {
            Console.WriteLine($"\n A banda {nomeDaBanda} não foi encontrada.");
        }

        Console.WriteLine("Digite uma tecla para voltar ao menu principal.");
        Console.ReadKey();
        Console.Clear();
        ExibirOpcoesDoMenu();
    }

}
