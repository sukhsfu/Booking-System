package com.project.Appointment.controller;

import com.project.Appointment.model.Appointment;
import com.project.Appointment.model.AppointmentResponseClient;
import com.project.Appointment.model.AppointmentResponseProvider;
import com.project.Appointment.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/appointment")
public class Controller {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/create")
    public ResponseEntity<AppointmentResponseClient> create(@RequestBody Appointment appointment){
        AppointmentResponseClient newAppointment = appointmentService.createNewAppointment(appointment);
        if (newAppointment == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(newAppointment,HttpStatus.CREATED);
    }


    @GetMapping("/getAllByClient/{clientId}")
    public ResponseEntity<List<AppointmentResponseClient>> getAllByClient(@PathVariable int clientId){
        List<AppointmentResponseClient> allByClient = appointmentService.getAllByClient(clientId);
        if (allByClient == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(allByClient,HttpStatus.OK);
    }


    @GetMapping("/getAllByProvider/{providerId}")
    public  ResponseEntity<List<AppointmentResponseProvider>>  getAllByProvider(@PathVariable int providerId){
        List<AppointmentResponseProvider> allByProvider =  appointmentService.getAllByProvider(providerId);
        if (allByProvider == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(allByProvider,HttpStatus.OK);
    }


}
