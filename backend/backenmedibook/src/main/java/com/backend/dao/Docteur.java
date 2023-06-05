package com.backend.dao;

import javax.persistence.*;

import lombok.Data;

@Data
@Entity
@Table(name = "docteur")
public class Docteur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_docteur;

    @Column
    private String nom;

    @Column
    private String prenom;

    @Column
    private String specialite;

    @Column
    private String password;

    @Column
    private String adresse;

    @Column
    private String numeroTelephone;



}
