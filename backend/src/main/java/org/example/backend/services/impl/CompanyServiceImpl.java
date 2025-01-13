package org.example.backend.services.impl;

import org.example.backend.model.Company;
import org.example.backend.model.UserRole;
import org.example.backend.persistence.CompanyRepository;
import org.example.backend.services.CompanyService;
import org.example.backend.services.MockDataService;
import org.example.backend.services.exceptions.RepoException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private MockDataService mockDataService;


    @Override
    public void populate() {
        for(int i = 1; i <= 10; i++){
            Company company = new Company();
            company.setEmail(i + "@a.ro");
            company.setPassword("a");
            company.setCompanyName(mockDataService.randomCompanyName());
            company.setPublicEmail(mockDataService.randomEmail());
            company.setCompanyType(mockDataService.randomCompanyType());
            company.setPhoneNumber(mockDataService.randomPhoneNumber());
            company.setAddress(mockDataService.randomAddress());
            company.setWebsite(mockDataService.randomWebsite());
            company.setShortDescription(mockDataService.randomShortDescription());
            company.setLongDescription(mockDataService.randomLongDescription());
            company.setWorkplace(mockDataService.randomWorkplace());
            company.setPreviousInternships(mockDataService.randomPreviousInternships());
            company.setRole(UserRole.COMPANY);
            companyRepository.save(company);
        }
    }

    @Override
    public void clear() {
        companyRepository.deleteAll();
    }

    @Override
    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    @Override
    public Company getCompanyById(Long id) {
        return companyRepository.findById(id).orElseThrow(() -> new RepoException("Company not found!"));
    }
}