package impl;

import java.gs.java.fs.domain.entities.Produit;

import java.util.List;

public interface ProduitService {
    Produit getOne(Long id);
    Produit getOneId(Long id);
    List<Produit> getAll();
    Produit add(Produit produit);
    Produit update(Long id, Produit produit);
    Produit delete(Long id);

}
