package MyBackendApp.app.main.dal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import MyBackendApp.app.main.domain.entities.Client;

public interface UserInfoRepository extends JpaRepository<Client, Long> {

    @Query("select c from Client c where c.mail = :mail")
    graphql.com.google.common.base.Optional<Client> findByUsername(String mail);
}
