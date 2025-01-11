package org.example.backend.services.impl;

import org.example.backend.model.Specialization;
import org.example.backend.model.Student;
import org.example.backend.model.UserRole;
import org.example.backend.persistence.StudentRepository;
import org.example.backend.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public void populate(){
        for(int i = 1; i <= 10; i++){
            Student student = new Student("FirstName" + i, "LastName" + i,  Specialization.INFO_EN);
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


}
