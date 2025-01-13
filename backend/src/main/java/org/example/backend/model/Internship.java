package org.example.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;

@Setter
@Getter
@Data
@AllArgsConstructor
@Entity
@Table(name = "internships")
public class Internship {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "internship_id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "length")
    private String length;

    @Column(name = "worktype")
    private String workType;

    @Column(name = "deadline")
    private Date deadline;

    @Column(name = "location")
    private String location;

    @Column(name = "description")
    private String description;

    @Column(name = "stepstoapply")
    private String stepsToApply;

    @Column(name = "requiredknowledge")
    private String requiredKnowledge;

    @Column(name = "salary")
    private String salary;

    public Internship() {}

    public Internship(String name) {
        this.name = name;
    }

    public Internship(String name, String length, String workType, Date deadline, String location, String description, String stepsToApply, String requiredKnowledge, String salary) {
        this.name = name;
        this.length = length;
        this.workType = workType;
        this.deadline = deadline;
        this.location = location;
        this.description = description;
        this.stepsToApply = stepsToApply;
        this.requiredKnowledge = requiredKnowledge;
        this.salary = salary;
    }

}
