package java.gs.java.fs;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication(scanBasePackages = "java.gs.java.fs",exclude ={DataSourceAutoConfiguration.class})

@ComponentScan("java.gs.java.fs")
public class Main {
    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }
}

