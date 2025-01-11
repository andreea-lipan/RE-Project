package org.example.backend.model;

import jakarta.persistence.Entity;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Company extends Utilizator {
    private String name;
}
