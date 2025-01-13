package org.example.backend.services.impl;

import org.example.backend.model.Application;
import org.example.backend.persistence.ApplicationRepository;
import org.example.backend.services.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ApplicationServiceImpl implements ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    @Override
    public void clear() {
        applicationRepository.deleteAll();
    }

    @Override
    public List<Application> getApplicationsByStudentId(Long student_id) {
        return applicationRepository.findByStudentId(student_id);
    }

    @Override
    public void addApplication(Application application) {
        applicationRepository.save(application);
    }
}
