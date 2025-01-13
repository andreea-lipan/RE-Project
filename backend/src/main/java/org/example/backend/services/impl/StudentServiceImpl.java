package org.example.backend.services.impl;

import org.example.backend.model.Specialization;
import org.example.backend.model.Student;
import org.example.backend.model.UserRole;
import org.example.backend.persistence.StudentRepository;
import org.example.backend.services.StudentService;
import org.example.backend.services.exceptions.RepoException;
import org.example.backend.services.exceptions.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public void populate() {
        for (int i = 1; i <= 10; i++) {
            Student student = new Student("FirstName" + i, "LastName" + i, Specialization.INFO_EN, null);
            student.setEmail("email" + i + "@facultate.ro");
            student.setPassword("parola" + i);
            student.setRole(UserRole.STUDENT);
            studentRepository.save(student);
        }
    }

    public void clear() {
        studentRepository.deleteAll();
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public void uploadCV(Long id, MultipartFile cv) {
        Student student = studentRepository.findById(id).orElseThrow(() -> new RepoException("Student not found!"));

        try {
            byte[] cvBytes = cv.getBytes();
            student.setCv(cvBytes);
            studentRepository.save(student);
        } catch (IOException e) {
            throw new ServiceException("IO shit! " + e.getMessage());
        } catch (Exception e) {
            throw new ServiceException("Could not save CV!" + e.getMessage());
        }

    }

    @Override
    public Student getStudentById(Long id) {
        return studentRepository.findById(id).orElseThrow(() -> new RepoException("Student not found!"));
    }

    @Override
    public Boolean hasCV(Long id) {
        Student student = studentRepository.findById(id).orElseThrow(() -> new RepoException("Student not found"));

        return student.getCv() != null;
    }


}
