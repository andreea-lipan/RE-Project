package org.example.backend.controllers;

import org.example.backend.model.Company;
import org.example.backend.model.DTOs.CompanyDTO;
import org.example.backend.model.DTOs.LoginRequest;
import org.example.backend.model.DTOs.LoginResponse;
import org.example.backend.model.Internship;
import org.example.backend.services.AuthService;
import org.example.backend.services.InternshipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("login")
    public ResponseEntity<?> logIn(@RequestBody LoginRequest loginRequest) {
        try {
            LoginResponse response = authService.logIn(loginRequest);
            return ResponseEntity.ok().body(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("company-signup")
    public ResponseEntity<?> registerCompany(@RequestBody CompanyDTO companyDTO) {
        try {
            Company company = companyDTO.toCompany();
            authService.registerCompany(company);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
