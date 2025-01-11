package org.example.backend.persistence;

import org.example.backend.model.Utilizator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<Utilizator, Long> {
    Optional<Utilizator> findUserByEmail(String email);
    Optional<Utilizator> findUserByEmailAndPassword(String email, String password);
}
