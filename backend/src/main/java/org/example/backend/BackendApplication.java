package org.example.backend;

import org.example.backend.persistence.StudentRepository;
import org.example.backend.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {


	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
		System.out.println("badabimbadabum");



	}

}
