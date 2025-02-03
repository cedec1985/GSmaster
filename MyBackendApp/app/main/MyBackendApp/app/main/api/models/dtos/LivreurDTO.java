package MyBackendApp.app.main.api.models.dtos;
import MyBackendApp.app.main.domain.entities.Livreur;

public record LivreurDTO(
        Long id,
        String nom,
        String prenom,
        String nomContact

) {
    public static LivreurDTO fromEntity(Livreur livreur) {
        if (livreur == null)
            return null;

        return new LivreurDTO(
                livreur.getId(),
                livreur.getNom(),
                livreur.getPrenom(),
                livreur.getNomContact()
                );
    }
}