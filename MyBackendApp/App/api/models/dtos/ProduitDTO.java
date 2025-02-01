package java.gs.java.fs.api.models.dtos;


import java.gs.java.fs.domain.entities.Produit;

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