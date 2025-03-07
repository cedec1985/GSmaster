package MyBackendApp.app.main.bll.impl;
import MyBackendApp.app.main.dal.LivreurRepository;
import MyBackendApp.app.main.bll.impl.LivreurService;
import MyBackendApp.app.main.domain.entities.Livreur;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@Transactional
public class LivreurServiceImpl implements LivreurService {

    private final LivreurRepository livreurRepository;

    public LivreurServiceImpl(LivreurRepository livreurRepository) {
        this.livreurRepository = livreurRepository;
    }
    @Override
    public Livreur getOne(Long id) {
        return livreurRepository.findById(Math.toIntExact(id)).orElseThrow(()->new RuntimeException("aucun livreur trouvé avec cet ID"));
    }
    @Override
    public List<Livreur> getAll(Livreur livreur) {
        return livreurRepository.findAll();
    }
    @Override
    public Livreur update(Long id, Livreur livreur) {
        livreur.setId(id);
        return livreurRepository.save(livreur);
    }
    @Override
    public boolean delete(Long id) {
        Livreur livreur = getOne(id);
        livreurRepository.delete(livreur);
        return true;
    }
    @Override
    public Livreur add(Livreur livreur) {
        return livreurRepository.save(livreur);
    }
}
