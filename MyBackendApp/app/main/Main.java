
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication(scanBasePackages = "app.main",exclude ={DataSourceAutoConfiguration.class})

@ComponentScan("app.main.utils")
public class Main {
    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }
}

