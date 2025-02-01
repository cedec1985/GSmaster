package java.gs.java.fs.domain.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "fournisseur")
public class Livreur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false,insertable = false, updatable = false)
    private Long id;

    @Column(name = "nom", nullable = false, length = 50)
    private String nom;

    @Column(name = "prenom", nullable = false, length = 50)
    private String prenom;

    @Column(name = "nom_contact", nullable = false, length = 50)
    private String nomContact;

    @Column(name ="N_TVA", nullable = false, length = 25)
    private String N_TVA;

    @OneToMany (mappedBy = "deliveredBy")
    private List<Commande> commandes;

}