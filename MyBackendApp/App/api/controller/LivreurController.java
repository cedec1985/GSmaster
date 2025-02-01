package java.gs.java.fs.api.controller;
import java.gs.java.fs.api.models.dtos.LivreurDTO;
import java.gs.java.fs.api.models.form.LivreurForm;
import java.gs.java.fs.bll.LivreurService;
import java.gs.java.fs.domain.entities.Livreur;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

    @RestController
    @RequestMapping("/livreur")
    @CrossOrigin("*")

    public class LivreurController {
        private final LivreurService livreurService;
        public LivreurController(LivreurService livreurService) {
            this.livreurService = livreurService;
        }
        @GetMapping
        public ResponseEntity<List<LivreurDTO>> getAll() {
            return ResponseEntity.ok(
                    livreurService.getAll().stream()
                            .map( LivreurDTO::fromEntity )
                            .toList()
            );
        }
        @GetMapping("/{id}")
        public ResponseEntity<LivreurDTO> getOne(@PathVariable Long id){
            return ResponseEntity.ok(
                    LivreurDTO.fromEntity( livreurService.getOne(id) )
            );
        }
        @PostMapping
        public ResponseEntity<LivreurDTO> add(@RequestBody @Valid LivreurForm form){
            Livreur toDeliver = form.toEntity();
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(
                            LivreurDTO.fromEntity( livreurService.add( toDeliver ) )
                    );
        }

        @PutMapping("/{id}")
        public ResponseEntity<LivreurDTO> update(@PathVariable Long id, @RequestBody @Valid LivreurForm form ){
            return ResponseEntity.ok(
                    LivreurDTO.fromEntity( livreurService.update(id, form.toEntity()) )
            );
        }

        @DeleteMapping("/{id}")
        public ResponseEntity<Void> delete(@PathVariable Long id){
            if (livreurService.delete(id)) {
                return ResponseEntity.noContent().build();
            } else {
                return ResponseEntity.notFound().build();
            }
        }
    }
