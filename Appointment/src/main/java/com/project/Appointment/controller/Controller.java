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
    public ResponseEntity<AppointmentResponseClient> create(@RequestHeader String userName, @RequestBody Appointment appointment){
        AppointmentResponseClient newAppointment = appointmentService.createNewAppointment(appointment,userName);
        if (newAppointment == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(newAppointment,HttpStatus.CREATED);
    }


    @GetMapping("/getAllByClient")
    public ResponseEntity<List<AppointmentResponseClient>> getAllByClient(@RequestHeader String userName){
        List<AppointmentResponseClient> allByClient = appointmentService.getAllByClient(userName);
        if (allByClient == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(allByClient,HttpStatus.OK);
    }


    @GetMapping("/getAllByProvider")
    public  ResponseEntity<List<AppointmentResponseProvider>>  getAllByProvider(@RequestHeader String userName){
        List<AppointmentResponseProvider> allByProvider =  appointmentService.getAllByProvider(userName);
        if (allByProvider == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(allByProvider,HttpStatus.OK);
    }


}
