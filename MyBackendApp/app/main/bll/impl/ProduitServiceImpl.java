package app.main;

import app.main.dal.ProduitRepository;
import app.main.bll.ProduitService;
import app.main.domain.entities.Produit;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@Transactional
public class ProduitServiceImpl implements ProduitService {

    private final ProduitRepository produitRepository;

    public ProduitServiceImpl(ProduitRepository produitRepository) {
        this.produitRepository = produitRepository;
    }

    @Override
    public Produit getOne(Long id) {
        return produitRepository.findById(id).orElseThrow(()->new RuntimeException("aucun produit trouvé avec cet ID"));
    }
    @Override
    public Produit getOneId(Long id) {
        return produitRepository.findById(id).orElseThrow(()->new RuntimeException("aucun mobilier trouvé avec cet ID"));
    }
    @Override
    public List<Produit> getAll() {
        return produitRepository.findAll();
    }

    @Override
    public Produit add(Produit produit) {
        return produitRepository.save(produit);
    }

    @Override
    public Produit update(Long id, Produit produit) {
        produit.setId(id);
        return produitRepository.save(produit);
    }
    @Override
    public Produit delete(Long id) {
        Produit produit = getOne(id);
        produitRepository.delete(produit);
        return produit;
    }


}

