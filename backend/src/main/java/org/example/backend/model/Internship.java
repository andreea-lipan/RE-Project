package org.example.backend.model;

import jakarta.persistence.*;
import lombok.*;

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
    private String worktype;

    @Column(name = "deadline")
    private Date deadline;

    @Column(name = "location")
    private String location;

    @Column(name = "description")
    private String description;

    @Column(name = "steps")
    private String steps;

    @Column(name = "skills")
    private String skills;

    @Column(name = "salary")
    private String salary;

    public Internship() {}

    public Internship(String name) {
        this.name = name;
    }

    public Internship(String name, String length, String worktype, Date deadline, String location, String description, String steps, String skills, String salary) {
        this.name = name;
        this.length = length;
        this.worktype = worktype;
        this.deadline = deadline;
        this.location = location;
        this.description = description;
        this.steps = steps;
        this.skills = skills;
        this.salary = salary;
    }

}
