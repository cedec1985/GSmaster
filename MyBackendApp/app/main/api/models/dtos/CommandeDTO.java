package app.main;

import app.main.domain.entities.Commande;

import java.math.BigInteger;
import java.time.LocalDate;

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