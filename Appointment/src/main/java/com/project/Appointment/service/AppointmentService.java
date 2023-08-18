package com.project.Appointment.service;

import com.project.Appointment.model.Appointment;
import com.project.Appointment.model.AppointmentDetails;
import org.json.JSONObject;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface AppointmentService {
    AppointmentDetails createNewAppointment(Appointment appointment);

    List<AppointmentDetails> getAllByClient(int clientId);

    List<AppointmentDetails> getAllByProvider(int providerId);
}
