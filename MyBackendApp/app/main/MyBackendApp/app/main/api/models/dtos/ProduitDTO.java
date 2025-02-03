package MyBackendApp.app.main.api.models.dtos;

import MyBackendApp.app.main.domain.entities.Produit;

public record ProduitDTO(Long id,
                         String nom,

                         Integer prixDeVente,

                         Integer stock
                         )
{
    public static ProduitDTO fromEntity(Produit produit) {
        if (produit == null)
            return null;

        return new ProduitDTO(
                produit.getId(),
                produit.getNom(),
                produit.getPrixDeVente(),
                produit.getStock()
                );
    }

}