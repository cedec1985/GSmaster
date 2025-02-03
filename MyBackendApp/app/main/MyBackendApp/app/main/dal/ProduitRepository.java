package MyBackendApp.app.main.dal;


import MyBackendApp.app.main.domain.entities.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProduitRepository extends JpaRepository<Produit, Long> {


}
