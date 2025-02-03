package MyBackendApp.app.main.bll.impl;

import java.util.List;

import MyBackendApp.app.main.domain.entities.Produit;

public interface ProduitService {
    Produit getOne(Long id);
    Produit getOneId(Long id);
    List<Produit> getAll(Produit produit);
    Produit add(Produit produit);
    Produit update(Long id, Produit produit);
    Produit delete(Long id);

}
