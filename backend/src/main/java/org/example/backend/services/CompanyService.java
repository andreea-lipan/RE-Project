package org.example.backend.services;

import org.example.backend.model.Company;
import org.example.backend.model.Student;

import java.util.List;

public interface CompanyService {

    // temporary functions used to populate and clear the DB
    void populate();
    void clear();

    List<Company> getAllCompanies();
}
