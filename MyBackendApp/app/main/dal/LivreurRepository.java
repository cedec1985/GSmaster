package app.main;

import app.main.domain.entities.Livreur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface LivreurRepository extends JpaRepository<Livreur, Integer>{
}