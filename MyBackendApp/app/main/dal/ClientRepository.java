package app.main;

import app.main.domain.entities.Client;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

   @Query("select c from Client c where c.mail = :email")
   Optional<Client> findClientByEmail(String email);

   @Query("select c from Client c where c = c")
   @NotNull
   List<Client> findAll(Client client);

   @Modifying
   @Query("select Client c from Client where c.id =:id")
   Client findClientBy(long id);
   Client delete (long id);

   @Modifying
   @Query("select c from Client c where c.id =:id")
   Client findClientById(long id);
   Client update (long id);
}