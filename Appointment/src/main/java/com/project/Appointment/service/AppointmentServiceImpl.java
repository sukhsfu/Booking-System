package com.project.Appointment.service;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.Appointment.helper.ServiceCaller;
import com.project.Appointment.model.Appointment;
import com.project.Appointment.model.AppointmentDetails;
import com.project.Appointment.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.ErrorResponse;
import org.springframework.web.client.RestTemplate;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.List;
import java.util.stream.Stream;

import static com.project.Appointment.Constants.*;


@Service
public class AppointmentServiceImpl implements AppointmentService{


    @Autowired
    private AppointmentRepository repository;


    @Override
    public  AppointmentDetails createNewAppointment(Appointment appointment) {


        String forEntityClient = ServiceCaller.getClientDetails(appointment.getClientId());
        String forEntityProvider = ServiceCaller.getProviderDetails(appointment.getProviderId());
        if (forEntityClient == null || forEntityProvider == null){
            return null;
        }

        Appointment appointment1 = repository.save(appointment);

        AppointmentDetails appointmentDetails = new AppointmentDetails();
        appointmentDetails.setClient(forEntityClient);
        appointmentDetails.setProvider(forEntityProvider);
        appointmentDetails.setAppointment(appointment1);


        return appointmentDetails;

    }

    @Override
    public List<AppointmentDetails> getAllByClient(int clientId) {
       List<Appointment> appointments =  repository.findAllByClientId(clientId);
       String client = ServiceCaller.getClientDetails(clientId);
       if (appointments.isEmpty() || client == null){
           return null;
       }
        List<AppointmentDetails> appointmentDetailsList = appointments.stream().map((appointment -> {
            String provider = ServiceCaller.getProviderDetails(appointment.getProviderId());
            AppointmentDetails appointmentDetails = new AppointmentDetails(client, provider, appointment);
            return appointmentDetails;
        })).toList();

        return appointmentDetailsList;
    }

    @Override
    public List<AppointmentDetails> getAllByProvider(int providerId) {
        List<Appointment> appointments =  repository.findAllByProviderId(providerId);
        String provider = ServiceCaller.getProviderDetails(providerId);
        if (appointments.isEmpty() || provider == null){
            return null;
        }
        List<AppointmentDetails> appointmentDetailsList = appointments.stream().map((appointment -> {
            String client = ServiceCaller.getClientDetails(appointment.getClientId());
            AppointmentDetails appointmentDetails = new AppointmentDetails(client, provider, appointment);
            return appointmentDetails;
        })).toList();

        return appointmentDetailsList;
    }
}
