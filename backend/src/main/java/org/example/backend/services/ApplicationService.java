package org.example.backend.services;

import org.example.backend.model.DTOs.ApplicationDTO;
import org.example.backend.model.DTOs.ApplicationUpdateRequest;

import java.util.List;

public interface ApplicationService {

    void clear();

    List<ApplicationDTO> getApplicationsByStudentId(Long studentId);

    void addApplication(ApplicationDTO applicationDTO);

    void updateApplicationStatus(Long id, ApplicationUpdateRequest request);

    List<ApplicationDTO> getApplicationsByInternshipId(Long internshipId);

    Long getConcurrentApplicants(Long internshipId);
}
