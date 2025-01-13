package org.example.backend.model.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.backend.model.Application;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApplicationDTO {
    private Long id;
    private Long studentId;
    private String studentName;
    private Long internshipId;
    private String internshipName;
    private byte[] sentCV;
    private String status;
    private LocalDate applicationDate;

    public ApplicationDTO(Application application) {
        this.id = application.getId();
        this.studentId = application.getStudent().getId();
        this.studentName = application.getStudent().getLastname() + " " + application.getStudent().getFirstname();
        this.internshipId = application.getInternship().getId();
        this.internshipName = application.getInternship().getName();
        this.sentCV = application.getSentCV();
        this.status = application.getStatus().toString();
        this.applicationDate = application.getApplicationDate();
    }
}
