package org.example.backend.services;

import org.example.backend.model.enums.Specialization;

import java.sql.Date;


public interface MockDataService {
    String randomCompanyName();
    String randomEmail();
    String randomCompanyType();
    String randomPhoneNumber();
    String randomAddress();
    String randomWebsite();
    String randomShortDescription();
    String randomLongDescription();
    String randomWorkplace();
    String randomPreviousInternships();
    String randomFirstName();
    String randomLastName();
    Specialization randomSpecialization();
    String randomInternshipName();
    String randomLength();
    String randomWorkType();
    Date randomDeadline();
    String randomLocation();
    String randomDescription();
    String randomStepsToApply();
    String randomRequiredKnowledge();
    String randomSalary();
}
