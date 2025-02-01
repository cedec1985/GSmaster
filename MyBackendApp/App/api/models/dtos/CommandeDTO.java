package java.gs.java.fs.api.models.dtos;

import java.gs.java.fs.domain.entities.Commande;
import java.time.LocalDate;

/**
 * DTO for {@link Commande}
 */

public record CommandeDTO (
    Long id,
    Integer montant,
    LocalDate dateCommande,
    Integer quantite,
    Integer nCommande
)
    {
    public static CommandeDTO fromEntity(Commande commande) {
        if(commande==null)
            return null;
        return new CommandeDTO(
                commande.getId(),
                commande.getMontant(),
                commande.getDateCommande(),
                commande.getQuantite(),
                commande.getNCommande()
            );

    }
}