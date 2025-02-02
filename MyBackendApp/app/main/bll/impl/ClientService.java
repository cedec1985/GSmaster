package impl;

import domain.entities.Client;

import java.util.List;


public interface ClientService {

    Client getOne(Long id);
    List<Client> getAll(Client client);
    Client create(Client toCreate);
    Client update(Long id, Client toUpdate);
    Client delete(Long id);

}

