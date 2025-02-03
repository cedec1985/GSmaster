package MyBackendApp.app.main.api.models.form;

import MyBackendApp.app.main.domain.entities.Produit;
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
