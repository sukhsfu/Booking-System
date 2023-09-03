package com.project.Appointment.FeignProxy;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import static com.project.Appointment.Constants.*;

@FeignClient(name = "provider", url = "${PROVIDER_URI:http://localhost:8000}")
public interface ProviderProxy {

    @GetMapping("/provider"+FINDBYID)
    String getProviderById(@PathVariable int id);
}
