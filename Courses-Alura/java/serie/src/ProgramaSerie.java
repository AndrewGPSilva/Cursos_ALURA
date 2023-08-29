import java.util.ArrayList;
import java.util.Collections;

public class ProgramaSerie {
    public static void main(String[] args) throws Exception {
        //System.out.println("Ai sim em");

        var MinhaSerie = new Serie("Harry Potter",  "Fantasia");
        // System.out.println("O úsuario Andrew gosta de " + MinhaSerie.getLerNome() + " da categoria: " + MinhaSerie.getLerCategoria());

        ArrayList<Serie> MinhasSeries = new ArrayList<>();

        MinhasSeries.add(new Serie("One Piece", "Anime"));
        MinhasSeries.add(new Serie("Naruto", "Anime"));
        MinhasSeries.add(new Serie("Demon Slayer", "anime"));

        Collections.sort(MinhasSeries);

        for(Serie Series: MinhasSeries) {
            //System.out.println("O anime " + Series.getLerNome());
            System.out.println(Series.getLerNome());
        }
    }
}
