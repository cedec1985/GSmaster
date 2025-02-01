package App;

import api.validation.constraints.Username;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.util.Arrays;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class UsernameValidator implements ConstraintValidator<Username, String> {

    private static final String[] FORBIDDEN_USERNAMES = {"404", "edit", "me", "admin"};
    int charSize ;

    @Override
    public void initialize(Username constraintAnnotation) {
        this.charSize = constraintAnnotation.CharMin();
    }

    @Override
    public boolean isValid(String username, ConstraintValidatorContext constraintValidatorContext) {
        if (username == null)
            return false;

        final String USERNAME_PATTERN = "^[a-zA-Z0-9]{0,20}$";
            return username.matches(USERNAME_PATTERN) && !Arrays.asList(FORBIDDEN_USERNAMES).contains(username.toLowerCase());
        }}

