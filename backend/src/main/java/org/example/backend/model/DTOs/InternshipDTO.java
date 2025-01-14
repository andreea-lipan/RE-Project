package org.example.backend.model.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.backend.model.Internship;

import java.sql.Date;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class InternshipDTO {
    private Long id;
    private String name;
    private String length;
    private String workType;
    private String location;
    private Date deadline;
    private String description;
    private String stepsToApply;
    private String requiredKnowledge;
    private String salary;
    private Long companyId;

    public InternshipDTO(Internship internship) {
        this.id = internship.getId();
        this.name = internship.getName();
        this.length = internship.getLength();
        this.workType = internship.getWorkType();
        this.location = internship.getLocation();
        this.deadline = internship.getDeadline();
        this.description = internship.getDescription();
        this.stepsToApply = internship.getStepsToApply();
        this.requiredKnowledge = internship.getRequiredKnowledge();
        this.salary = internship.getSalary();
        this.companyId = internship.getCompany().getId();
    }

    public Internship toInternship() {
        Internship internship = new Internship();
        internship.setId(id);
        internship.setName(name);
        internship.setLength(length);
        internship.setLocation(location);
        internship.setWorkType(workType);
        internship.setDeadline(deadline);
        internship.setDescription(description);
        internship.setStepsToApply(stepsToApply);
        internship.setRequiredKnowledge(requiredKnowledge);
        internship.setSalary(salary);
        return internship;
    }
}
