package com.project.Provider.model;

public class ProviderResponseAppointment {
    private String name;
    private String email;
    private String phone;

    private String street;

    private String cityState;

    private String postalCode;

    public ProviderResponseAppointment() {
    }

    public ProviderResponseAppointment(String name, String email, String phone, String street, String cityState, String postalCode) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.street = street;
        this.cityState = cityState;
        this.postalCode = postalCode;
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

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCityState() {
        return cityState;
    }

    public void setCityState(String cityState) {
        this.cityState = cityState;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }
}
