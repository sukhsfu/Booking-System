package com.project.Appointment.service;

import com.project.Appointment.helper.ServiceCaller;
import com.project.Appointment.model.Appointment;
import com.project.Appointment.model.AppointmentDetails;
import com.project.Appointment.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;



@Service
public class AppointmentServiceImpl implements AppointmentService{


    @Autowired
    private AppointmentRepository repository;

    @Autowired
    private ServiceCaller serviceCaller;




    @Override
    public  AppointmentDetails createNewAppointment(Appointment appointment) {
        String client = serviceCaller.getClientById(appointment.getClientId());
        String provider= serviceCaller.getProviderById(appointment.getProviderId());
        if (client == null || provider == null){
            return null;
        }

        Appointment appointment1 = repository.save(appointment);

        AppointmentDetails appointmentDetails = new AppointmentDetails();
        appointmentDetails.setClient(client);
        appointmentDetails.setProvider(provider);
        appointmentDetails.setAppointment(appointment1);


        return appointmentDetails;

    }

    @Override
    public List<AppointmentDetails> getAllByClient(int clientId) {
       List<Appointment> appointments =  repository.findAllByClientId(clientId);
        String client = serviceCaller.getClientById(clientId);
        if (appointments.isEmpty() || client == null){
           return null;
       }
        List<AppointmentDetails> appointmentDetailsList = appointments.stream().map((appointment -> {
            String provider = serviceCaller.getProviderById(appointment.getProviderId());
            AppointmentDetails appointmentDetails = new AppointmentDetails(client, provider, appointment);
            return appointmentDetails;
        })).toList();

        return appointmentDetailsList;
    }

    @Override
    public List<AppointmentDetails> getAllByProvider(int providerId) {
        List<Appointment> appointments =  repository.findAllByProviderId(providerId);
        String provider = serviceCaller.getProviderById(providerId);
        if (appointments.isEmpty() || provider == null){
            return null;
        }
        List<AppointmentDetails> appointmentDetailsList = appointments.stream().map((appointment -> {
            String client = serviceCaller.getClientById(appointment.getClientId());
            AppointmentDetails appointmentDetails = new AppointmentDetails(client, provider, appointment);
            return appointmentDetails;
        })).toList();

        return appointmentDetailsList;
    }
}
