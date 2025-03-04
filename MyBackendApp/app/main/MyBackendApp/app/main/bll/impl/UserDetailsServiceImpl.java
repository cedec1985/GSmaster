package MyBackendApp.app.main.bll.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import MyBackendApp.app.main.dal.UserInfoRepository;
import MyBackendApp.app.main.domain.entities.Client;
import graphql.com.google.common.base.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserInfoRepository userinfoRepository;

    public UserDetailsServiceImpl(UserInfoRepository userinfoRepository) {
        this.userinfoRepository = userinfoRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<Client> user = userinfoRepository.findByUsername(username);
        return user.isPresent() ? (UserDetails) userinfoRepository.findByUsername(username): null;
    }
}
