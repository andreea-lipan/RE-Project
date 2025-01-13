package org.example.backend.controllers;


import org.example.backend.model.DTOs.ApplicationDTO;
import org.example.backend.model.DTOs.ApplicationUpdateRequest;
import org.example.backend.services.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/applications")
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    @GetMapping
    public ResponseEntity<?> getAllApplications(@RequestParam(required = false) Long studentId, @RequestParam(required = false) Long internshipId) {
        try {
            if (studentId != null) {
                return ResponseEntity.ok(applicationService.getApplicationsByStudentId(studentId));
            } else if (internshipId != null) {
                return ResponseEntity.ok(applicationService.getApplicationsByInternshipId(internshipId));
            }
            return ResponseEntity.badRequest().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/size")
    public ResponseEntity<?> getConcurrentApplicants(@RequestBody Long internshipId) {
        try {
            return ResponseEntity.ok(applicationService.getConcurrentApplicants(internshipId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("{id}")
    public ResponseEntity<?> updateApplicationStatus(@PathVariable Long id, @RequestBody ApplicationUpdateRequest request) {
        try {
            applicationService.updateApplicationStatus(id, request);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping
    public ResponseEntity<?> addApplication(@RequestBody ApplicationDTO applicationDTO) {
        try {
            applicationService.addApplication(applicationDTO);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
