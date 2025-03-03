package MyBackendApp.app.main.bll.impl;

import java.util.List;

import MyBackendApp.app.main.domain.entities.Client;


public interface ClientService {

    Client getOne(Long id);
    List<Client> getAll(Client client);
    Client create(Client toCreate);
    Client update(Long id, Client toUpdate);
    Client delete(Long id);

}

