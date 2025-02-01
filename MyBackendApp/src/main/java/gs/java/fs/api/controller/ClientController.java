package java.gs.java.fs.api.controller;
import java.gs.java.fs.domain.entities.Client;
import java.gs.java.fs.api.models.dtos.ClientDTO;
import java.gs.java.fs.api.models.form.ClientForm;
import java.gs.java.fs.bll.AuthRequest;
import java.gs.java.fs.bll.AuthResponse;
import java.gs.java.fs.bll.ClientService;
import jakarta.validation.Valid;
import java.gs.java.fs.utils.JwtTokenUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/client")
@CrossOrigin("*")

public class ClientController {
    private final ClientService clientService;

    final
    AuthenticationManager authManager;
    final
    JwtTokenUtil jwtUtil;

    public ClientController(ClientService clientService, AuthenticationManager authManager, JwtTokenUtil jwtUtil) {
        this.clientService = clientService;
        this.authManager = authManager;
        this.jwtUtil = jwtUtil;
    }
    @GetMapping
    public ResponseEntity<List<ClientDTO>> getAll(Client client) {
        List<Client> users = clientService.getAll(client);
        List<ClientDTO> dtos = users.stream()
                .map(ClientDTO::fromEntity)
                .toList();
        return ResponseEntity.ok( dtos );
    }
    @GetMapping("/{id}")
    public ResponseEntity<ClientDTO> getOne(@PathVariable Long id) {
        Client user = clientService.getOne(id);
        ClientDTO dto = ClientDTO.fromEntity(user);
        return ResponseEntity.ok(dto);
    }
    //@PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping("/insert")
    public ResponseEntity<ClientDTO> create(@RequestBody @Valid ClientForm form){
        Client user = clientService.create( form.ToEntity());
        ClientDTO dto = ClientDTO.fromEntity(user);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(dto);
    }
    @PutMapping("/{id}")
    public ResponseEntity<ClientDTO> update(@PathVariable Long id) {
        clientService.update(id,clientService.getOne(id));
        ClientDTO dto = ClientDTO.fromEntity(clientService.getOne(id));
        return ResponseEntity.ok(dto);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<ClientDTO> delete(@PathVariable Long id) {
        Client user = clientService.delete( id );
        ClientDTO dto = ClientDTO.fromEntity( user );
        return ResponseEntity.ok( dto );
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid AuthRequest request) {
        try {
            Authentication authentication = authManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(), request.getPassword()
                    )
            );

            Client user = (Client) authentication.getPrincipal();
            String accessToken = jwtUtil.generateAccessToken(user);
            AuthResponse response = new AuthResponse(user.getMail(), user.getPassword(),accessToken);

            return ResponseEntity.ok().body(response);

        } catch (BadCredentialsException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

}
