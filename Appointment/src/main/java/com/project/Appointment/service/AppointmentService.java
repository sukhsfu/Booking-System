package com.project.Appointment.service;

import com.project.Appointment.model.Appointment;
import com.project.Appointment.model.AppointmentResponseClient;
import com.project.Appointment.model.AppointmentResponseProvider;

import java.util.List;

public interface AppointmentService {
    AppointmentResponseClient createNewAppointment(Appointment appointment, String userName);

    List<AppointmentResponseClient> getAllByClient(String clientUserName);

    List<AppointmentResponseProvider> getAllByProvider(String providerUserName);
}
