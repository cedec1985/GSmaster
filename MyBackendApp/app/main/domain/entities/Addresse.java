package app.main;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter
@Setter
public class Addresse {

    @Column(name = "addresse_rue", nullable = false, length = 50)
    private String addresseRue;

    @Column(name = "addresse_ville", nullable = false, length = 50)
    private String addresseVille;

    @Column(name = "addresse_numero", nullable = false)
    private Integer addresseNumero;

    @Column(name = "addresse_codepostal", nullable = false)
    private Integer addresseCodepostal;

}
