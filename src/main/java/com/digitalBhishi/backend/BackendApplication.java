package com.digitalBhishi.backend;

import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.server.ConfigurableWebServerFactory;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.stereotype.Component;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication app = new SpringApplication(BackendApplication.class);
        app.setDefaultProperties(Collections.singletonMap("server.port", "8081"));
        app.run(args);
		//SpringApplication.run(BackendApplication.class, args);
	}
	
}
@Component
class ServerPortCustomizer implements WebServerFactoryCustomizer<ConfigurableWebServerFactory> {
 
    @Override
    public void customize(ConfigurableWebServerFactory factory) {
        factory.setPort(8081);
    }


}
