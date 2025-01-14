package org.example.backend.services;

import org.example.backend.model.Student;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


public interface StudentService {
    // temporary functions used to populate and clear the DB
    void populate();
    void clear();

    List<Student> getAllStudents();

    void uploadCV(Long id,  MultipartFile cv);

    Student getStudentById(Long id);

    Boolean hasCV(Long id);
}
