package org.example.backend.services.impl;

import org.example.backend.model.Company;
import org.example.backend.model.Specialization;
import org.example.backend.model.Student;
import org.example.backend.model.UserRole;
import org.example.backend.persistence.CompanyRepository;
import org.example.backend.services.CompanyService;
import org.example.backend.services.exceptions.RepoException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    @Override
    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }

    @Override
    public Company getCompanyById(Long id) {
        return companyRepository.findById(id).orElseThrow(() -> new RepoException("Company not found!"));
    }
}