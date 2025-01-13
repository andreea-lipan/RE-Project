package org.example.backend.persistence;

import org.example.backend.model.Internship;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InternshipRepository extends JpaRepository<Internship, Long> {
    List<Internship> findInternshipsByCompany_Id(Long companyId);
}
