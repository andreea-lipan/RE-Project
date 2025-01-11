package org.example.backend.services;

import org.example.backend.model.Internship;
import org.example.backend.model.Student;
import org.springframework.stereotype.Service;

import java.util.List;


public interface StudentService {
    // temporary functions used to populate and clear the DB
    void populate();
    void clear();

    List<Student> getAllStudents();
}
