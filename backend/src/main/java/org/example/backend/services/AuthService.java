package org.example.backend.services;

import org.example.backend.model.Company;
import org.example.backend.model.DTOs.LoginRequest;
import org.example.backend.model.DTOs.LoginResponse;

public interface AuthService {
    LoginResponse logIn(LoginRequest loginRequest);
    void registerCompany(Company company);
}
