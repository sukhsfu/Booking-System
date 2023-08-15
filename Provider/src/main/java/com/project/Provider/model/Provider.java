package com.project.Provider.model;


import jakarta.persistence.*;

@Entity
@Table(name = "provider")
public class Provider {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int providerId;
    private String name;
    private String email;
    private String phone;
    private String specialization;
    private double price;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "location_id")
    private Location location;

    public Provider() {
    }

    public Provider(String name, String email, String phone, String specialization, Location location, double price) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.specialization = specialization;
        this.location = location;
        this.price = price;
    }

    public int getProviderId() {
        return providerId;
    }

    public void setProviderId(int providerId) {
        this.providerId = providerId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
