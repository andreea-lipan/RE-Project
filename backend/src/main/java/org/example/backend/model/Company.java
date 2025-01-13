package org.example.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@SuperBuilder // make cool chainigng
public class Company extends Utilizator {
    private String companyName;
    private String companyType;
    private String phoneNumber;
    private String publicEmail;
    private String address;
    private String website;

    @Column(columnDefinition = "TEXT")
    private String shortDescription;

    @Column(columnDefinition = "TEXT")
    private String longDescription;

    @Column(columnDefinition = "TEXT")
    private String workplace;

    @Column(columnDefinition = "TEXT")
    private String previousInternships;
}
