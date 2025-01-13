package org.example.backend.services.impl;

import org.example.backend.model.Application;
import org.example.backend.model.ApplicationStatus;
import org.example.backend.model.DTOs.ApplicationDTO;
import org.example.backend.model.DTOs.ApplicationUpdateRequest;
import org.example.backend.model.Internship;
import org.example.backend.model.Student;
import org.example.backend.persistence.ApplicationRepository;
import org.example.backend.persistence.InternshipRepository;
import org.example.backend.persistence.StudentRepository;
import org.example.backend.services.ApplicationService;
import org.example.backend.services.exceptions.RepoException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class ApplicationServiceImpl implements ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private InternshipRepository internshipRepository;

    @Override
    public void clear() {
        applicationRepository.deleteAll();
    }

    @Override
    public List<ApplicationDTO> getApplicationsByStudentId(Long studentId) {
        List<Application> applications = applicationRepository.findApplicationsByStudentId(studentId);
        List<ApplicationDTO> applicationDTOS = new ArrayList<>();
        for (Application application : applications) {
            applicationDTOS.add(new ApplicationDTO(application));
        }

        return applicationDTOS;
    }

    @Override
    public void addApplication(ApplicationDTO applicationDTO) {
        Application application = new Application();
        Student student = studentRepository.findById(applicationDTO.getStudentId()).orElseThrow(() -> new RepoException("Student not found"));
        Internship internship = internshipRepository.findById(applicationDTO.getInternshipId()).orElseThrow(() -> new RepoException("Internship not found"));
        application.setStudent(student);
        application.setInternship(internship);
        application.setStatus(ApplicationStatus.PENDING);
        application.setSentCV(student.getCv());
        application.setApplicationDate(LocalDate.now());

        applicationRepository.save(application);
    }

    @Override
    public void updateApplicationStatus(Long id, ApplicationUpdateRequest request) {
        Application application = applicationRepository.findById(id).orElseThrow(() -> new RepoException("Application not found"));
        ApplicationStatus newStatus = ApplicationStatus.valueOf(request.getStatus().toUpperCase());
        application.setStatus(newStatus);
        applicationRepository.save(application);
    }

    @Override
    public List<ApplicationDTO> getApplicationsByInternshipId(Long internshipId) {
        List<Application> applications = applicationRepository.findApplicationsByInternshipId(internshipId);
        List<ApplicationDTO> applicationDTOS = new ArrayList<>();
        for (Application application : applications) {
            applicationDTOS.add(new ApplicationDTO(application));
        }

        return applicationDTOS;
    }

    @Override
    public Long getConcurrentApplicants(Long internshipId) {
        List<Application> applications = applicationRepository.findApplicationsByInternshipId(internshipId);
        return applications.stream().filter(application -> !application.getStatus().equals(ApplicationStatus.REJECTED)).count();
    }
}
