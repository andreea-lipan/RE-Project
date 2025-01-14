package org.example.backend.controllers;

import org.example.backend.services.ApplicationService;
import org.example.backend.services.CompanyService;
import org.example.backend.services.InternshipService;
import org.example.backend.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/mock")
public class MockDataController {
    @Autowired
    private StudentService studentService;
    @Autowired
    private InternshipService internshipService;
    @Autowired
    private CompanyService companyService;
    @Autowired
    private ApplicationService applicationService;

    @GetMapping("populate")
    public void populate() {
        studentService.populate();
        companyService.populate();
        internshipService.populate();
        applicationService.populate();
    }
}
