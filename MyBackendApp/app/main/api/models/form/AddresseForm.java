package app.main;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import api.models.dtos.ProduitDTO;
import app.main.domain.entities.Addresse;
import domain.entities.Produit;

public record AddresseForm (
        @NotBlank
        String addresseRue,
        @NotBlank
        String addresseVille,
        @NotNull
        Integer addresseNumero,
        @NotNull
        Integer addresseCodepostal
)
    public Addresse toEntity(){
        Addresse addresse = new Addresse();
        addresse.setAddresseCodepostal(addresseCodepostal);
        addresse.setAddresseRue(addresseRue);
        addresse.setAddresseVille(addresseVille);
        addresse.setAddresseNumero(addresseNumero);
        return addresse;
    }

