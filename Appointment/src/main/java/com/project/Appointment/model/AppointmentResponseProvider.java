package com.project.Appointment.model;

import java.text.SimpleDateFormat;

public class AppointmentResponseProvider {

    private int id;

    private String appointmentDate;
    private String time;
    private String clientName;
    private String phone;
    private String email;

    public AppointmentResponseProvider() {
    }

    public AppointmentResponseProvider(Client client, Appointment appointment) {
        clientName = client.getName();
        phone = client.getPhone();
        email = client.getEmail();
        id = appointment.getId();
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

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
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

    public String getAppointmentDate() {
        return appointmentDate;
    }

    public void setAppointmentDate(String appointmentDate) {
        this.appointmentDate = appointmentDate;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
