package MyBackendApp.app.main.bll.impl;

import MyBackendApp.app.main.dal.ClientRepository;
import MyBackendApp.app.main.domain.entities.Client;
import jakarta.annotation.Resource;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional

public class ClientServiceImpl implements ClientService {

   @Resource
    private final ClientRepository clientRepository;

    public ClientServiceImpl(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Override
    public Client getOne(Long id) {
        return clientRepository.findById(id).orElseThrow(() -> new RuntimeException("aucun client trouvé avec cet ID"));
    }

    @Override
    public List<Client> getAll(Client client) {
        return clientRepository.findAll(client);
    }

    @Override
    public Client create(Client toCreate) {
        return clientRepository.save(toCreate);
    }

    @Override
    public Client update(Long id, Client toUpdate) {
        toUpdate.setId(id);
        return clientRepository.save(clientRepository.findClientById(id));
    }

    @Override
    public Client delete(Long id) {
        Client toDelete = getOne(id);
        clientRepository.delete(clientRepository.findClientBy(id));
        return toDelete;
    }

}
