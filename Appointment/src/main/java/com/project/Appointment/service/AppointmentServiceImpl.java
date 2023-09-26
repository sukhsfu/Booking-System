package com.project.Appointment.service;

import com.project.Appointment.helper.ServiceCaller;
import com.project.Appointment.model.*;
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
    public AppointmentResponseClient createNewAppointment(Appointment appointment) {
        Client client = serviceCaller.getClientById(appointment.getClientId());
        Provider provider= serviceCaller.getProviderById(appointment.getProviderId());
        if (client == null || provider == null){
            return null;
        }

        Appointment appointment1 = repository.save(appointment);




        return new AppointmentResponseClient(provider,appointment1);

    }

    @Override
    public List<AppointmentResponseClient> getAllByClient(int clientId) {
       List<Appointment> appointments =  repository.findAllByClientId(clientId);
        Client client = serviceCaller.getClientById(clientId);
        if (appointments.isEmpty() || client == null){
           return null;
       }

        return appointments.stream().map((appointment -> {
            Provider provider = serviceCaller.getProviderById(appointment.getProviderId());
            return new AppointmentResponseClient(provider, appointment);
        })).toList();
    }

    @Override
    public List<AppointmentResponseProvider> getAllByProvider(int providerId) {
        List<Appointment> appointments =  repository.findAllByProviderId(providerId);
        Provider provider = serviceCaller.getProviderById(providerId);
        if (appointments.isEmpty() || provider == null){
            return null;
        }

        return appointments.stream().map((appointment -> {
            Client client = serviceCaller.getClientById(appointment.getClientId());
            return new AppointmentResponseProvider(client, appointment);
        })).toList();
    }
}
