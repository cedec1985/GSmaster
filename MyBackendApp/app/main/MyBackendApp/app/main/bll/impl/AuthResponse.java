package MyBackendApp.app.main.bll.impl;

import lombok.Data;

@Data
public class AuthResponse {
        private String mail;
        private String accessToken;
        private String password;

        public AuthResponse(String mail, String accessToken, String password) {
            this.mail = mail;
            this.accessToken = accessToken;
            this.password = password;
        }
}
