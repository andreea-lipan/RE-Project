package org.example.backend.model;

import jakarta.persistence.Entity;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@SuperBuilder // make cool chainigng
public class Company extends Utilizator {
    private String loginEmail;
    private String loginPassword;
    private String companyName;
    private String companyType;
    private String phoneNumber;
    private String email;
    private String address;
    private String website;
    private String shortDescription;
    private String longDescription;
    private String workplace;
    private String previousInternships;
}
