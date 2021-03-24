package com.example.bootHello;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class BootHelloApplication {

	public static void main(String[] args) {
		ApplicationContext applicationContext = SpringApplication.run(BootHelloApplication.class, args);
		for (String name : applicationContext.getBeanDefinitionNames()) {
			System.out.println(name);
		}
	}

}
