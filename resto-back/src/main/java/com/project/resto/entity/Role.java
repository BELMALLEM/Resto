package com.project.resto.entity;

import com.project.resto.utils.enums.ERole;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "role")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", length = 20, nullable = false)
    @Enumerated(EnumType.STRING)
    private ERole name;

    public Role(ERole name) {
        super();
        this.name = name;
    }
}