package org.example.backend.controllers;

import org.example.backend.model.DTOs.InternshipDTO;
import org.example.backend.services.InternshipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/internships")
public class InternshipController {
    @Autowired
    private InternshipService internshipService;

    @GetMapping("populate")
    private ResponseEntity<?> populateInternships() {
        try {
            internshipService.populate();
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }


    @GetMapping("{id}")
    public ResponseEntity<?> getInternshipById(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(internshipService.getInternshipById(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping()
    public ResponseEntity<?> getAllInternshipsByCompanyId(@RequestParam(required = false) Long companyId) {
        try {
            if (companyId == null) {
                return ResponseEntity.ok(internshipService.getAllInternships());
            }
            return ResponseEntity.ok(internshipService.getAllInternshipsByCompanyId(companyId));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping
    public ResponseEntity<?> addInternship(@RequestBody InternshipDTO internshipDTO) {
        try {
            internshipService.addInternship(internshipDTO);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
