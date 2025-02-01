package App;

import api.validation.validator.UsernameValidator;
import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import org.springframework.core.annotation.AliasFor;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.*;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Target({TYPE, FIELD, ANNOTATION_TYPE})
@Retention(RUNTIME)
@Constraint(validatedBy = UsernameValidator.class)

public @interface Username {
    String message() default "le nom d'utilisateur doit être valide";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};

    @AliasFor("username")
      int CharMin() default 5;
}
