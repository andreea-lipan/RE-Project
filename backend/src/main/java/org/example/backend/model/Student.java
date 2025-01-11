package org.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Student extends Utilizator {
    private String firstname;
    private String lastname;

    @Enumerated(EnumType.STRING)
    private Specialization specialization;
}
