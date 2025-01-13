package org.example.backend.controllers;

import org.example.backend.services.CompanyService;
import org.example.backend.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/companies")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @GetMapping
    public ResponseEntity<?> getAllCompanies() {
        try {
            return ResponseEntity.ok(companyService.getAllCompanies());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("{id}")
    public ResponseEntity<?> getCompanyById(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(companyService.getCompanyById(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}