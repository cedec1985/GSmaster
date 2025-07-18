package MyBackendApp.app.main.domain.entities;
import java.time.LocalDate;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "commande")
public class Commande {

    private Commande commande;
    public Commande() { }
    public Commande(Commande commande) {
        this.commande= commande;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "montant", nullable = false, precision = 5, scale = 2) // scale =  2 chiffres après la virgule
    private Integer montant;

    @Column(name = "date_commande", nullable = false)
    private LocalDate dateCommande;

    @Column(name = "quantite", nullable = false)
    private Integer quantite;

    @Column(name = "n_commande", nullable = false)
    private Integer nCommande;

    @ManyToOne(cascade = CascadeType.ALL)
    Livreur deliveredBy;
}
