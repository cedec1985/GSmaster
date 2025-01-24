package java.gs.java.fs.api.models.form;

import java.gs.java.fs.domain.entities.Description;
import java.gs.java.fs.domain.entities.Produit;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ProduitForm (

    @NotBlank
    String nom,
    @NotNull
    Integer prixDeVente,
     @NotNull
    Long id,
     @NotNull
    Integer stock
    )
{
    public Produit toEntity(){
        Produit produit = new Produit();
        produit.setNom( nom );
         produit.setPrixDeVente(prixDeVente);
         produit.setId(id);
         produit.setStock(stock);
        return produit;
    }
}
