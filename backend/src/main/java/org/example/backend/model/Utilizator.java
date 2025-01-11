
package org.example.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Utilizator {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @Column(unique = true,name = "email")
    private String email = "";

    private String password = "";

    @Enumerated(EnumType.STRING)
    private UserRole role;
}
