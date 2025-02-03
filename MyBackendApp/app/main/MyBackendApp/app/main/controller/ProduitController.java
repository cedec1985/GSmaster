package MyBackendApp.app.main.controller;
import app.main.models.dtos.ProduitDTO;
import app.main.models.form.ProduitForm;
import app.main.bll.ProduitService;
import app.main.domain.entities.Produit;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/produit")
@CrossOrigin("*")

    public class ProduitController {
        private final ProduitService produitService;
        public ProduitController(ProduitService produitService) {
            this.produitService=produitService;
        }

        @GetMapping
        public ResponseEntity<List<ProduitDTO>> getAll() {
            return ResponseEntity.ok(
                    produitService.getAll().stream()
                            .map( ProduitDTO::fromEntity)
                            .toList()
            );
        }
        @GetMapping("/{id}")
        public ResponseEntity<ProduitDTO> getOne(@PathVariable Long id){
            return ResponseEntity.ok(
                    ProduitDTO.fromEntity( produitService.getOne(id))
            );
        }
        @GetMapping("/mobilier/{id}")
        public ResponseEntity<ProduitDTO> getOneId(@PathVariable Long id){
            return ResponseEntity.ok(
                    ProduitDTO.fromEntity( produitService.getOneId(id))
            );
        }
        @PostMapping("/add")
        public ResponseEntity<ProduitDTO> add(@RequestBody @Valid ProduitForm form){
            Produit produit = produitService.add( form.toEntity());
            ProduitDTO dto = ProduitDTO.fromEntity(produit);
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(dto);
        }
        @PutMapping("/{id}")
        public ResponseEntity<ProduitDTO> update(@PathVariable Long id, @RequestBody @Valid ProduitForm form) {
            Produit produit= produitService.getOne(id);
            produit.setNom(form.nom());
            produit.setPrixDeVente(form.prixDeVente());
            Produit product = produitService.add(produit);
            return ResponseEntity.ok(ProduitDTO.fromEntity(product));
        }
        @DeleteMapping("/{id}")
        public ResponseEntity<Void> delete(@PathVariable Long id){
            produitService.delete(id);
            return ResponseEntity.ok().build();
        }
    }


