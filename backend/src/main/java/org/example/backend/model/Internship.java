package org.example.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;


@Setter
@Getter
@Data
@AllArgsConstructor
@NoArgsConstructor
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

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "stepstoapply", columnDefinition = "TEXT")
    private String stepsToApply;

    @Column(name = "requiredknowledge", columnDefinition = "TEXT")
    private String requiredKnowledge;

    @Column(name = "salary")
    private String salary;

    @ManyToOne
    @JoinColumn(name = "company_id", referencedColumnName = "user_id")
    private Company company;

}
