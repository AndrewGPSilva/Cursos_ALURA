public class Serie {
    String nome;
    String categoria;

    public Serie(String nome, String categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }

    public String getLerNome() {
        return this.nome;
    }

    public String getLerCategoria() {
        return this.categoria;
    }
}
