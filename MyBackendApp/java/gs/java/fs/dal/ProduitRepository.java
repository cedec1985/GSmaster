package java.gs.java.fs.dal;


import java.gs.java.fs.domain.entities.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProduitRepository extends JpaRepository<Produit, Long> {


}
