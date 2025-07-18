package MyBackendApp.app.main.bll.impl;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import MyBackendApp.app.main.domain.entities.Client;

public class UserDetailModel implements UserDetails{
     private String username;
     private String password;

    public UserDetailModel(Client user){
        this.username = user.getUsername();
        this.password = user.getPassword();
    }

    @Override
    public String getPassword() { return this.password; }

    @Override
    public String getUsername() { return this.username; }

    @Override
    public boolean isAccountNonExpired() { return false; }

    @Override
    public boolean isAccountNonLocked() { return false; }

    @Override
    public boolean isCredentialsNonExpired() { return false; }

    @Override
    public boolean isEnabled() { return false; }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
      
        throw new UnsupportedOperationException("Unimplemented method 'getAuthorities'");
    }
}
