package App;
import java.gs.java.fs.domain.entities.Client;
import io.jsonwebtoken.Jwts;
import org.springframework.stereotype.Component;
import java.nio.charset.StandardCharsets;
import java.util.Date;


@Component
    public class JwtTokenUtil {
        private static final long EXPIRE_DURATION = 24 * 60 * 60 * 1000; // 24 hour

       final byte[] secret = "C#sLuAwsf/X?yjVQ*UZ+Ty&f>1<RHo-Vd4DvQX)QVe@#+G?AOQ~ZjQ~q'0JAa(nIQ}_Xk0cgM'>!$W`>MBRc^{o<cL'OGnh@<p}WziAK=WZ\"b='r)uQ+[!ZPywM&RR".getBytes(StandardCharsets.UTF_8);

        public String generateAccessToken(Client client) {
            return Jwts.builder().subject(String.format("%s,%s", client.getPassword(), client.getMail())).issuer("CodeJava").issuedAt(new Date()).expiration(new Date(System.currentTimeMillis() + EXPIRE_DURATION))
                    .compact();

        }
    }
