package com.project.Appointment.FeignProxy;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import static com.project.Appointment.Constants.*;

@FeignClient(name = "provider")
public interface ProviderProxy {

    @GetMapping("/provider"+FINDBYID)
    ResponseEntity<String> getProviderById(@PathVariable int id);
}
