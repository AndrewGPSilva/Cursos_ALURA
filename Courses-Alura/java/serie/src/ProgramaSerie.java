import java.util.ArrayList;

public class ProgramaSerie {
    public static void main(String[] args) throws Exception {
        System.out.println("Ai sim em");

        var MinhaSerie = new Serie("Harry Potter",  "Fantasia");
        System.out.println("O úsuario Andrew gosta de " + MinhaSerie.getLerNome() + " da categoria: " + MinhaSerie.getLerCategoria());

        ArrayList<Serie> MinhasSeries = new ArrayList<>();

        MinhasSeries.add(new Serie("One Piece", "Anime"));
        MinhasSeries.add(new Serie("Naruto", "Anime"));
        for(Serie Series: MinhasSeries) {
            System.out.println("O anime " + Series.getLerNome());
            System.out.println("É da categoria: " + Series.getLerCategoria());
        }
    }
}
