package App;

import domain.entities.Livreur;
import jakarta.validation.constraints.NotBlank;

public record LivreurForm(
        @NotBlank
        String nom,
        @NotBlank
        String prenom,
        @NotBlank
        String nom_contact
) {
    public Livreur toEntity(){
        Livreur livreur = new Livreur();
        livreur.setNom( nom );
        livreur.setPrenom(prenom);
        livreur.setNomContact(nom_contact);
        return livreur;
    }
}

