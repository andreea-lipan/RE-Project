package org.example.backend.controllers;


import org.example.backend.model.Application;
import org.example.backend.model.Internship;
import org.example.backend.services.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/applications")
public class ApplicationController {
    @Autowired
    ApplicationService applicationService;

    @GetMapping("{id}")
    public ResponseEntity<?> getApplicationsByStudentId(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(applicationService.getApplicationsByStudentId(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping
    public ResponseEntity<?> addInternship(@RequestBody Application application) {
        try {
            applicationService.addApplication(application);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
