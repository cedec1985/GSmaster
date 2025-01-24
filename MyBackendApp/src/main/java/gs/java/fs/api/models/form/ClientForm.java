package java.gs.java.fs.api.models.form;

import java.gs.java.fs.domain.entities.Client;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ClientForm(
        @NotBlank
        String nom,
        @NotBlank
        String prenom,
        @NotBlank
        String mail,
        @NotNull
        Integer telephone,
        @Valid
        AddresseForm addresse

) {
    public Client ToEntity(){
        Client client = new Client();
        client.setNom( nom );
        client.setAddresse(addresse.toEntity());
        client.setMail(mail);
        client.setPrenom(prenom);
        client.setTelephone(telephone);
        return client;
    }

}
