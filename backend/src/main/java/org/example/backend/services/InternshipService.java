package org.example.backend.services;

import org.example.backend.model.Internship;
import org.springframework.stereotype.Service;

import java.util.List;

public interface InternshipService {
    void populate();
    void addInternship(Internship internship);
    List<Internship> getAllInternships();
}
