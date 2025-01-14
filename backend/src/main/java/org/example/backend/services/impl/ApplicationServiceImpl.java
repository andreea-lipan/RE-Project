package org.example.backend.services.impl;

import org.example.backend.model.Application;
import org.example.backend.model.DTOs.ApplicationDTO;
import org.example.backend.model.DTOs.ApplicationUpdateRequest;
import org.example.backend.model.Internship;
import org.example.backend.model.Student;
import org.example.backend.model.enums.ApplicationStatus;
import org.example.backend.persistence.ApplicationRepository;
import org.example.backend.persistence.InternshipRepository;
import org.example.backend.persistence.StudentRepository;
import org.example.backend.services.ApplicationService;
import org.example.backend.services.MockDataService;
import org.example.backend.services.exceptions.RepoException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ApplicationServiceImpl implements ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private InternshipRepository internshipRepository;

    @Autowired
    private MockDataService mockDataService;

    public List<Long> randomInternshipIds(){
        List<Long> internshipIds = internshipRepository.findAll().stream().map(Internship::getId).toList();

        // Create a copy of the original list to avoid modifying it
        List<Long> shuffledList = new ArrayList<>(internshipIds);

        // Shuffle the list randomly
        Collections.shuffle(shuffledList);

        // Return the first 5 IDs from the shuffled list
        return shuffledList.subList(0, 7);
    }

    @Override
    public void populate(){
        List<Student> students = studentRepository.findAll();
//        students = students.subList(2, students.size()); // so that the first few students dont have a cv already uploaded

        // studentu care aplica la toate
        List<Internship> internships = internshipRepository.findAll();
//        Student studentAplicat = students.stream().filter(x->x.getId()==2).findFirst().get();


        for (Student student : students) {
            if (!Objects.equals(student.getEmail(), "student1@facultate.ro") && !Objects.equals(student.getEmail(), "student2@facultate.ro")) {
                // aplica partial
                List<Long> internshipIds = randomInternshipIds();
                for (Long internshipId : internshipIds) {
                    Application application = new Application();
                    Internship internship = internshipRepository.findById(internshipId).orElseThrow(() -> new RepoException("Internship not found"));
                    application.setStudent(student);
                    application.setInternship(internship);
                    application.setStatus(ApplicationStatus.PENDING);
                    application.setSentCV(student.getCv());
                    application.setApplicationDate(LocalDate.now());
                    applicationRepository.save(application);
                }
            } else if (student.getEmail().equals("student2@facultate.ro")) {
                // aplica la toate
                for (Internship internship : internships) {
                    Application application = new Application();
                    application.setStudent(student);
                    application.setInternship(internship);
                    application.setStatus(ApplicationStatus.PENDING);
                    application.setSentCV(student.getCv());
                    application.setApplicationDate(LocalDate.now());
                    applicationRepository.save(application);
                }
            }

        }
    }

    @Override
    public void clear() {
        applicationRepository.deleteAll();
    }

    @Override
    public List<ApplicationDTO> getApplicationsByStudentId(Long studentId) {
        List<Application> applications = applicationRepository.findApplicationsByStudentId(studentId);

        return applications.stream()
                .sorted(Comparator.comparing(Application::getApplicationDate).reversed())
                .map(ApplicationDTO::new)
                .collect(Collectors.toList());
    }

    @Override
    public void addApplication(ApplicationDTO applicationDTO) {
        Application application = new Application();
        Student student = studentRepository.findById(applicationDTO.getStudentId()).orElseThrow(() -> new RepoException("Student not found"));
        Internship internship = internshipRepository.findById(applicationDTO.getInternshipId()).orElseThrow(() -> new RepoException("Internship not found"));
        application.setStudent(student);
        application.setInternship(internship);
        application.setStatus(ApplicationStatus.PENDING);
        application.setSentCV(student.getCv());
        application.setApplicationDate(LocalDate.now());

        applicationRepository.save(application);
    }

    @Override
    public void updateApplicationStatus(Long id, ApplicationUpdateRequest request) {
        Application application = applicationRepository.findById(id).orElseThrow(() -> new RepoException("Application not found"));
        ApplicationStatus newStatus = ApplicationStatus.valueOf(request.getStatus().toUpperCase());
        application.setStatus(newStatus);
        applicationRepository.save(application);
    }

    @Override
    public List<ApplicationDTO> getApplicationsByInternshipId(Long internshipId) {
        List<Application> applications = applicationRepository.findApplicationsByInternshipId(internshipId);
        List<ApplicationDTO> applicationDTOS = new ArrayList<>();
        for (Application application : applications) {
            applicationDTOS.add(new ApplicationDTO(application));
        }

        return applicationDTOS;
    }

    @Override
    public Long getConcurrentApplicants(Long internshipId) {
        List<Application> applications = applicationRepository.findApplicationsByInternshipId(internshipId);
        return applications.stream().filter(application -> !application.getStatus().equals(ApplicationStatus.REJECTED)).count();
    }
}
