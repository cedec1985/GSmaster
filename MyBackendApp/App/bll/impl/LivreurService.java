package impl;

import java.util.List;

import java.gs.java.fs.domain.entities.Livreur;

public interface LivreurService {
    Livreur getOne(Long id);
    List<Livreur> getAll();
    Livreur update(Long id, Livreur livreur);
    boolean delete(Long id);
    Livreur add(Livreur livreur);
}
