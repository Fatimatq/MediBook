package com.backend.dao;

import javax.persistence.*;

@Entity
@Table(name = "Consultation")
public class Consultation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "consultation_id")
    private Long consultationId;

    @ManyToOne
    @JoinColumn(name = "rendezvous_id", referencedColumnName = "id")
    private RendezVous rendezvous;

    @ManyToOne
    @JoinColumn(name = "doctor_id", referencedColumnName = "id_docteur")
    private Docteur doctor;

    @ManyToOne
    @JoinColumn(name = "patient_id", referencedColumnName = "id_patient")
    private Patient patient;

    @Column(name = "motif_consultation")
    private String motifConsultation;

    @Lob
    @Column(name = "traitement_image")
    private byte[] traitementImage;

    @Lob
    @Column(name = "traitement_fichier")
    private byte[] traitementFichier;

    public Long getConsultationId() {
        return consultationId;
    }

    public void setConsultationId(Long consultationId) {
        this.consultationId = consultationId;
    }

    public RendezVous getRendezvous() {
        return rendezvous;
    }

    public void setRendezvous(RendezVous rendezvous) {
        this.rendezvous = rendezvous;
    }

    public Docteur getDoctor() {
        return doctor;
    }

    public void setDoctor(Docteur doctor) {
        this.doctor = doctor;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public String getMotifConsultation() {
        return motifConsultation;
    }

    public void setMotifConsultation(String motifConsultation) {
        this.motifConsultation = motifConsultation;
    }

    public byte[] getTraitementImage() {
        return traitementImage;
    }

    public void setTraitementImage(byte[] traitementImage) {
        this.traitementImage = traitementImage;
    }

    public byte[] getTraitementFichier() {
        return traitementFichier;
    }

    public void setTraitementFichier(byte[] traitementFichier) {
        this.traitementFichier = traitementFichier;
    }

    // Ajoutez les constructeurs, getters et setters ici
}
