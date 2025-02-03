package MyBackendApp.app.main.bll.impl;

import lombok.Data;

@Data
public class AuthResponse {
        private String email;
        private String accessToken;
        private String password;

        public AuthResponse(String email, String accessToken, String password) {
            this.email = email;
            this.accessToken = accessToken;
            this.password = password;
        }
}
