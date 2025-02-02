package app.main;

import app.main.domain.entities.Commande;

import java.util.List;

public interface CommandeService {

    Commande register(Commande commande);
    List<Commande> getAll(Commande commande);
    Commande getOne(Long id);
    boolean cancel (Long id);
    Commande update(Long id);
}