package MyBackendApp.app.main.domain.entities;

import MyBackendApp.app.main.api.validation.constraints.Password;
import MyBackendApp.main.api.validation.constraints.Username;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

@Getter
@Setter
@Entity
@Table(name = "client")
public class Client implements UserDetails {

    @Transient
    private Client client;
    public Client() { }
    public Client(Client client) {
        this.client = client;
    }

    public Client(String mail, String password) {
        this.mail = mail;
        this.password = password;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false,insertable = false, updatable = false)
    private Long id;

    @Username
    @Column(name = "nom", nullable = false)
    private String nom;

    @Column(name = "prenom", nullable = false)
    private String prenom;

    @Embedded
    private Addresse addresse;

    @Password
    @Column(name = "password", nullable = false)
    private String password;

    @NotBlank
    @Column(name = "mail", nullable = false, length = 50)
    private String mail;

    @Column(name = "telephone", nullable = false)
    private Integer telephone;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        ArrayList<SimpleGrantedAuthority> roles = new ArrayList<>();
        roles.add(new SimpleGrantedAuthority("ROLE_CLIENT"));
            roles.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
        return roles;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return mail;
    }
}
