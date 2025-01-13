package org.example.backend.model;

public enum ApplicationStatus {
    PENDING,
    ACCEPTED,
    REJECTED;


    @Override
    public String toString() {
        return this.name().charAt(0) + this.name().substring(1).toLowerCase();
    }
}
