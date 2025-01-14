package org.example.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.backend.model.enums.Specialization;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Student extends Utilizator {
    private String firstname;
    private String lastname;

    @Enumerated(EnumType.STRING)
    private Specialization specialization;

    @Column(name = "cv")
    private byte[] cv;
}
