package java.gs.java.fs.bll;


import java.gs.java.fs.api.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

@Data
public class AuthRequest {

        @NotBlank
        @Email
        @Length(min = 5, max = 50)
        private String email;

        @NotBlank @Length(min = 5, max = 10)
        private String password;

    public AuthRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }

}

