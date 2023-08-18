package com.project.Appointment.controller;

import com.project.Appointment.model.Appointment;
import com.project.Appointment.model.AppointmentDetails;
import com.project.Appointment.service.AppointmentService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointment")
public class Controller {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/create")
    public ResponseEntity<AppointmentDetails> create(@RequestBody Appointment appointment){
        AppointmentDetails newAppointment = appointmentService.createNewAppointment(appointment);
        if (newAppointment == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(newAppointment,HttpStatus.CREATED);
    }


    @GetMapping("/getAllByClient/{clientId}")
    public ResponseEntity<List<AppointmentDetails>> getAllByClient(@PathVariable int clientId){
        List<AppointmentDetails> allByClient = appointmentService.getAllByClient(clientId);
        if (allByClient == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(allByClient,HttpStatus.FOUND);
    }


    @GetMapping("/getAllByProvider/{providerId}")
    public  ResponseEntity<List<AppointmentDetails>>  getAllByProvider(@PathVariable int providerId){
        List<AppointmentDetails> allByProvider =  appointmentService.getAllByProvider(providerId);
        if (allByProvider == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(allByProvider,HttpStatus.FOUND);
    }


}
