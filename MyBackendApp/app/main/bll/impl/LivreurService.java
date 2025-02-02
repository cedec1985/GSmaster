package app.main;

import java.util.List;

import app.main.domain.entities.Livreur;

public interface LivreurService {
    Livreur getOne(Long id);
    List<Livreur> getAll();
    Livreur update(Long id, Livreur livreur);
    boolean delete(Long id);
    Livreur add(Livreur livreur);
}
