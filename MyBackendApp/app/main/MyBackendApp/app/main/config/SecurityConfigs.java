package MyBackendApp.app.main.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import MyBackendApp.app.main.bll.impl.UserDetailsServiceImpl;
import MyBackendApp.app.main.dal.UserInfoRepository;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(securedEnabled = true)

    public class SecurityConfigs extends UserDetailsServiceImpl{
        
        public SecurityConfigs(UserInfoRepository userinfoRepository) {
        super(userinfoRepository);
    
    }
        @Autowired
        private CustomAuthenticationProvider authenticationProvider;

       @Bean
        PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
        }
        @Bean
        UserDetailsService userDetailsService() {
            UserDetails user = User.builder()
                .username("user")
                .password(passwordEncoder().encode("password"))
                .roles("USER")
                .build();
            return new InMemoryUserDetailsManager(user);
        }
        @Bean
        public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http.csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                    .requestMatchers("/login/**", "/swagger-ui/**").permitAll()
                    .anyRequest().authenticated()
                )
                .authenticationProvider(authenticationProvider)
                .build();   
        }
    }