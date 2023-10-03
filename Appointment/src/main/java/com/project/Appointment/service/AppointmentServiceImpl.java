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
    public AppointmentResponseClient createNewAppointment(Appointment appointment, String userName) {
        int clientId = serviceCaller.getClientId(userName);
        Provider provider= serviceCaller.getProviderById(appointment.getProviderId());
        if (clientId == 0 || provider == null){
            return null;
        }
        appointment.setClientId(clientId);

        Appointment appointment1 = repository.save(appointment);
        return new AppointmentResponseClient(provider,appointment1);

    }

    @Override
    public List<AppointmentResponseClient> getAllByClient(String clientUserName) {
        int clientId = serviceCaller.getClientId(clientUserName);
       List<Appointment> appointments =  repository.findAllByClientId(clientId);
        if (appointments.isEmpty() || clientId == 0){
           return null;
       }

        return appointments.stream().map((appointment -> {
            Provider provider = serviceCaller.getProviderById(appointment.getProviderId());
            return new AppointmentResponseClient(provider, appointment);
        })).toList();
    }

    @Override
    public List<AppointmentResponseProvider> getAllByProvider(String providerUserName) {
        int providerId = serviceCaller.getProviderId(providerUserName);
        List<Appointment> appointments =  repository.findAllByProviderId(providerId);
        if (appointments.isEmpty() || providerId == 0){
            return null;
        }

        return appointments.stream().map((appointment -> {
            Client client = serviceCaller.getClientById(appointment.getClientId());
            return new AppointmentResponseProvider(client, appointment);
        })).toList();
    }
}
