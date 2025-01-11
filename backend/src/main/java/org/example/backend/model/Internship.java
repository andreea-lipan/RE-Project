package org.example.backend.model;

import jakarta.persistence.*;
import lombok.*;

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

    public Internship() {}

    public Internship(String name) {
        this.name = name;
    }

}
