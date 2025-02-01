package App;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication(scanBasePackages = "App",exclude ={DataSourceAutoConfiguration.class})

@ComponentScan("App.utils")
public class Main {
    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }
}

