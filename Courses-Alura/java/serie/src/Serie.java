public class Serie implements Comparable<Serie> {
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

    @Override
    public int compareTo(Serie OutraSerie) {
        return this.nome.compareTo(OutraSerie.getLerNome());
    }
}
