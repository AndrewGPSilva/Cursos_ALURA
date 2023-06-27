class Musica
{
    public string nome;
    public int duracao;
    public bool disponivel;

    public Musica(string nome, int duracao, bool disponivel)
    {
        this.nome = nome;
        this.duracao = duracao;
        this.disponivel = disponivel;
    }

    Musica musica1 = new Musica("Andrew", 300, true);
}