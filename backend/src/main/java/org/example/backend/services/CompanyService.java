package org.example.backend.services;


import org.example.backend.model.Company;
import org.example.backend.model.Student;

import java.util.List;

public interface CompanyService {

    List<Company> getAllCompanies();

    Company getCompanyById(Long id);
}