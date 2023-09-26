package com.project.Appointment.model;

import java.text.SimpleDateFormat;

public class AppointmentResponseClient {
    private int id;

    private String appointmentDate;
    private String time;

    private String providerName;
    private String phone;
    private String email;
    private String address;

    public AppointmentResponseClient() {
    }
    public AppointmentResponseClient(Provider provider, Appointment appointment) {

        id = appointment.getId();
        providerName = provider.getName();
        phone = provider.getPhone();
        email = provider.getEmail();
        address = provider.getAddress();
        if (appointment.getAppointmentDate() != null){
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            SimpleDateFormat timeFormat = new SimpleDateFormat("hh:mm a");
            appointmentDate = dateFormat.format(appointment.getAppointmentDate());
            time = timeFormat.format(appointment.getAppointmentDate());
        }

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAppointmentDate() {
        return appointmentDate;
    }

    public void setAppointmentDate(String appointmentDate) {
        this.appointmentDate = appointmentDate;
    }

    public String getProviderName() {
        return providerName;
    }

    public void setProviderName(String providerName) {
        this.providerName = providerName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
