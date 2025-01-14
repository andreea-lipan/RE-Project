
package org.example.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.example.backend.model.enums.UserRole;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@SuperBuilder // make cool chainigng
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
