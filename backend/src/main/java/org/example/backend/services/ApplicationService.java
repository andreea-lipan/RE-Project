package org.example.backend.services;

import org.example.backend.model.Application;

import java.util.List;

public interface ApplicationService {

    void clear();

    List<Application> getApplicationsByStudentId(Long student_id);

    void addApplication(Application application);
}
