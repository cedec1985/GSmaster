package MyBackendApp.app.main.dal;

import org.springframework.data.jpa.repository.JpaRepository;
import MyBackendApp.app.main.domain.entities.Client;

public interface UserInfoRepository extends JpaRepository<Client, Long> {
    graphql.com.google.common.base.Optional<Client> findByUsername(String username);
}
