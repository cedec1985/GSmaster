package MyBackendApp.app.main.config;

import java.util.Collections;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    @Override
    public Authentication authenticate(Authentication authentication) {
        String username = "user";
        String password = "password";

        // Simuler une authentification contre une base de données
        if ("user".equals(username) && passwordEncoder.matches(password, passwordEncoder.encode("password"))) {
            // Authentification réussie
            return new UsernamePasswordAuthenticationToken(
                    username, password, Collections.singletonList(new SimpleGrantedAuthority("USER"))
            );
        } else {
            // Authentification échouée
            return null;
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}
