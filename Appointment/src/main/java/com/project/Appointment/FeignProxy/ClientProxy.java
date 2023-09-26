package com.project.Appointment.FeignProxy;

import com.project.Appointment.model.Client;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import static com.project.Appointment.Constants.FINDBYID;

@FeignClient(name = "client", url = "${CLIENT_URI:http://localhost:8001}")
public interface ClientProxy {

    @GetMapping("/client"+FINDBYID)
    Client getClientById(@PathVariable int id);
}
