package MyBackendApp.app.main.bll.impl;

import java.util.List;

import MyBackendApp.app.main.domain.entities.Livreur;

public interface LivreurService {
    Livreur getOne(Long id);
    List<Livreur> getAll(Livreur livreur);
    Livreur update(Long id, Livreur livreur);
    boolean delete(Long id);
    Livreur add(Livreur livreur);
}
