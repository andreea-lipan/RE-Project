package org.example.backend.services.impl;

import org.example.backend.model.Company;
import org.example.backend.model.DTOs.InternshipDTO;
import org.example.backend.model.Internship;
import org.example.backend.persistence.CompanyRepository;
import org.example.backend.persistence.InternshipRepository;
import org.example.backend.services.InternshipService;
import org.example.backend.services.MockDataService;
import org.example.backend.services.exceptions.RepoException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class InternshipServiceImpl implements InternshipService {

    @Autowired
    private InternshipRepository internshipRepository;

    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private MockDataService mockDataService;

    public Long randomCompanyId(){
        List<Company> companies = companyRepository.findAll();
        return companies.get((int)(Math.random()*companies.size())).getId();
    }

    @Override
    public void populate(){

        for(int i = 1; i <= 30; i++){
            Internship internship = new Internship();
            internship.setName(mockDataService.randomInternshipName());
            internship.setCompany(companyRepository.findById(randomCompanyId()).orElseThrow(() -> new RepoException("Company not found")));
            internship.setSalary(mockDataService.randomSalary());
            internship.setLength(mockDataService.randomLength());
            internship.setWorkType(mockDataService.randomWorkType());
            internship.setLocation(mockDataService.randomLocation());
            internship.setDescription(mockDataService.randomDescription());
            internship.setRequiredKnowledge(mockDataService.randomRequiredKnowledge());
            internship.setStepsToApply(mockDataService.randomStepsToApply());
            internship.setDeadline(mockDataService.randomDeadline());
            internshipRepository.save(internship);
        }
    }

    @Override
    public void addInternship(InternshipDTO internshipDTO) {
        Internship internship = internshipDTO.toInternship();
        Company company = companyRepository.findById(internshipDTO.getCompanyId()).orElseThrow(() -> new RepoException("Company not found"));
        internship.setCompany(company);
        internshipRepository.save(internship);
    }

    @Override
    public List<InternshipDTO> getAllInternships() {
        List<Internship> internships = internshipRepository.findAll();
        List<InternshipDTO> internshipDTOS = new ArrayList<>();
        for (Internship internship : internships) {
            internshipDTOS.add(new InternshipDTO(internship));
        }
        return internshipDTOS;
    }

    @Override
    public List<InternshipDTO> getAllInternshipsByCompanyId(Long companyId) {
        List<Internship> internships = internshipRepository.findInternshipsByCompany_Id(companyId);
        List<InternshipDTO> internshipDTOS = new ArrayList<>();
        for (Internship internship : internships) {
            internshipDTOS.add(new InternshipDTO(internship));
        }
        return internshipDTOS;
    }

    @Override
    public InternshipDTO getInternshipById(Long id) {
        Internship internship = internshipRepository.findById(id).orElseThrow(() -> new RepoException("Internship not found"));
        return new InternshipDTO(internship);
    }
}
