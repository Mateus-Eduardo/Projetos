class Musica
{
    public string nome;
    public string artista;
    public int duracao;
    public bool disponivel;

    public void ExibirFichaTecnica()
    {
        Console.WriteLine($" Musica: {nome}");
        Console.WriteLine($" Artista: {artista}");
        Console.WriteLine($" duração: {duracao}");
        if (disponivel)
            Console.WriteLine("Está disponivel no plano");

        else Console.WriteLine("Adquira o plano plus");

    }
}
