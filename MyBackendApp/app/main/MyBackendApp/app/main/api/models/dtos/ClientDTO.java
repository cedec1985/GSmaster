package MyBackendApp.app.main.api.models.dtos;

import MyBackendApp.app.main.domain.entities.Addresse;
import MyBackendApp.app.main.domain.entities.Client;

public record ClientDTO(
        Long id,
        String nom,
        String prenom,
        Addresse addresse,
        String mail,
        Integer telephone,
        String password) {

    public static ClientDTO fromEntity(Client client) {
        if (client == null)
            return null;

        return new ClientDTO(
                client.getId(),
                client.getPassword(),
                client.getNom(),
                client.getAddresse(),
                client.getPrenom(),
                client.getTelephone(),
                client.getMail()
        );
    }

}