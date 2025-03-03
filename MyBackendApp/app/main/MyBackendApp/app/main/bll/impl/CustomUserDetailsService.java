package MyBackendApp.app.main.bll.impl;

import MyBackendApp.app.main.dal.ClientRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final ClientRepository clientRepository;

    public CustomUserDetailsService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        var optional = clientRepository.findClientByEmail(email);
        return (UserDetails) optional.orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

}