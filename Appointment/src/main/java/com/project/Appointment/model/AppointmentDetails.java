package com.project.Appointment.model;

public class AppointmentDetails {

    private String client;
    private String provider;
    private Appointment appointment;

    public AppointmentDetails() {
    }

    public AppointmentDetails(String client, String provider, Appointment appointment) {
        this.client = client;
        this.provider = provider;
        this.appointment = appointment;
    }

    public String getClient() {
        return client;
    }

    public void setClient(String client) {
        this.client = client;
    }

    public String getProvider() {
        return provider;
    }

    public void setProvider(String provider) {
        this.provider = provider;
    }

    public Appointment getAppointment() {
        return appointment;
    }

    public void setAppointment(Appointment appointment) {
        this.appointment = appointment;
    }
}
