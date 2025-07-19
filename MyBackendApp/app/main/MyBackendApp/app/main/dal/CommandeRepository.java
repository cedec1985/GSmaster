package MyBackendApp.app.main.dal;

import org.jetbrains.annotations.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import MyBackendApp.app.main.domain.entities.Commande;
import java.util.List;

@Repository
public interface CommandeRepository extends JpaRepository<Commande, Long> {

    @Query("select com from Commande com where com = com")
    @NotNull
    List<Commande> findAll(Commande commande);

    @Modifying
    @Query("select Commande com from Commande where com.id =:id")
    Commande findCommandeBy(long id);
    Commande delete (long id);

    @Modifying
    @Query("select com from Commande com where com.id =:id")
    Commande findCommandeById(long id);
    Commande update (long id);

}