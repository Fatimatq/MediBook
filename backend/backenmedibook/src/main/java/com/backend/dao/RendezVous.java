package com.backend.dao;

import javax.persistence.*;
import java.time.LocalDateTime;

import lombok.Data;

@Data
@Entity
@Table(name = "rendez_vous")
public class RendezVous {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private LocalDateTime dateRendezVousStart;
    
    @Column(nullable = false)
    private LocalDateTime dateRendezVousEnd;
    
    @Column(nullable = false)
    private String description;

    
    @ManyToOne
    @JoinColumn(name = "ID_Patient")
    private Patient patient;

    @ManyToOne
    @JoinColumn(name = "id_docteur")
    private Docteur docteur;

    // Ajoutez d'autres attributs ou méthodes au besoin

}
