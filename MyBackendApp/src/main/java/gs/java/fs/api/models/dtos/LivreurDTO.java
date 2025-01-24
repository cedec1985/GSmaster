package java.gs.java.fs.api.models.dtos;
import java.gs.java.fs.domain.entities.Livreur;

public record LivreurDTO(
        Long id,
        String nom,
        String prenom,
        String nomContact

) {
    public static LivreurDTO fromEntity(Livreur livraison) {
        if (livraison == null)
            return null;

        return new LivreurDTO(
                livraison.getId(),
                livraison.getNom(),
                livraison.getPrenom(),
                livraison.getNomContact()
                );
    }
}