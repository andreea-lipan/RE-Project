package org.example.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String length() {return length;}

    public void setLength(String length) {this.length = length;}

    public String worktype() {return worktype;}

    public void setWorktype(String worktype) {this.worktype = worktype;}

    public Date deadline() {return deadline;}

    public void setDeadline(Date deadline) {this.deadline = deadline;}

    public String location() {return location;}

    public void setLocation(String location) {this.location = location;}

    public String description() {return description;}

    public void setDescription(String description) {this.description = description;}

    public String steps() {return steps;}

    public void setSteps(String steps) {this.steps = steps;}

    public String skills() {return skills;}

    public void setSkills(String skills) {this.skills = skills;}

    public String salary() {return salary;}

    public void setSalary(String salary) {this.salary = salary;}
}
