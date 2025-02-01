package java.gs.java.fs.api.models.form;

import java.gs.java.fs.domain.entities.Commande;
import java.gs.java.fs.domain.entities.Livreur;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;


public record CommandeForm(

        @NotNull
        Long id,
        @NotNull Integer quantite,
        @NotNull
        Integer n_commande,
        @NotNull
        LocalDate date_commande,
        @NotNull
        Integer montant,
        Livreur delivered_by_livreur_id

        ) {

    public Commande toEntity(){
        Commande commande = new Commande();
        commande.setId(id);
        commande.setQuantite(quantite);
        commande.setNCommande(n_commande);
        commande.setDateCommande(date_commande);
        commande.setMontant(montant);
        return commande;
    }
}
