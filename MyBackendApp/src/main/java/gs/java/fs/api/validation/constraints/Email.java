package java.gs.java.fs.api.validation.constraints;

import java.gs.java.fs.api.validation.validator.EmailValidator;
import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = EmailValidator.class)
@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
public @interface Email {
    String message() default "l'adresse email doit être valide";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}


