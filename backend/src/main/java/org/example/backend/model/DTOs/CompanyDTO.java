package org.example.backend.model.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.backend.model.Company;
import org.example.backend.model.enums.UserRole;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CompanyDTO {
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

    public Company toCompany() {
        return Company.builder()
                .email(loginEmail)
                .password(loginPassword)
                .role(UserRole.COMPANY)
                .companyName(companyName)
                .companyType(companyType)
                .phoneNumber(phoneNumber)
                .publicEmail(email)
                .address(address)
                .website(website)
                .shortDescription(shortDescription)
                .longDescription(longDescription)
                .workplace(workplace)
                .previousInternships(previousInternships)
                .build();
    }
}
