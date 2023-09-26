package com.project.Provider.model;

public class ProviderResponse {
    private int id;
    private String name;
    private String email;
    private String phone;
    private String service;
    private double price;

    private String address;

    public ProviderResponse() {
    }

    public ProviderResponse(int id, String name, String email, String phone, String service, double price, String address) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.service = service;
        this.price = price;
        this.address = address;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
