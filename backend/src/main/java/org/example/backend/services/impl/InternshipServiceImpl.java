package org.example.backend.services.impl;

import org.example.backend.model.Internship;
import org.example.backend.persistence.InternshipRepository;
import org.example.backend.services.InternshipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InternshipServiceImpl implements InternshipService {

    @Autowired
    private InternshipRepository internshipRepository;

    @Override
    public void populate(){
        for(int i = 1; i <= 10; i++){
            Internship internship = new Internship("Internship" + i);
            internshipRepository.save(internship);
        }
    }

    @Override
    public void addInternship(Internship internship) {
        internshipRepository.save(internship);
    }

    @Override
    public List<Internship> getAllInternships() {
        return internshipRepository.findAll();
    }
}
