package java.gs.java.fs.api.models.form;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.gs.java.fs.domain.entities.Addresse;

public record AddresseForm (
        @NotBlank
        String addresseRue,
        @NotBlank
        String addresseVille,
        @NotNull
        Integer addresseNumero,
        @NotNull
        Integer addresseCodepostal
){
    
    public Addresse toEntity(){
        Addresse addresse = new Addresse();
        addresse.setAddresseCodepostal(addresseCodepostal);
        addresse.setAddresseRue(addresseRue);
        addresse.setAddresseVille(addresseVille);
        addresse.setAddresseNumero(addresseNumero);
        return addresse;
    }
}
