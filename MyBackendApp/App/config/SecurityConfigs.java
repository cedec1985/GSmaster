package App;

import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;

public interface SecurityConfigs {
    void configure(AuthenticationManagerBuilder auth) throws Exception;
}
