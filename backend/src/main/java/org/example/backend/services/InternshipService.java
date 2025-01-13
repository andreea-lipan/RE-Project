package org.example.backend.services;

import org.example.backend.model.DTOs.InternshipDTO;
import org.example.backend.model.Internship;

import java.util.List;

public interface InternshipService {
    void populate();
    void addInternship(InternshipDTO internshipDTO);
    List<InternshipDTO> getAllInternships();

    List<InternshipDTO> getAllInternshipsByCompanyId(Long companyId);

    InternshipDTO getInternshipById(Long id);
}
