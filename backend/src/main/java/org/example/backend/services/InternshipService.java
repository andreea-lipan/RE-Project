package org.example.backend.services;

import org.example.backend.model.Internship;

import java.util.List;

public interface InternshipService {
    void populate();
    void addInternship(Internship internship);
    List<Internship> getAllInternships();

    Internship getInternshipById(Long id);
}
