package com.project.apigateway.fiegnProxy;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.context.annotation.Lazy;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Lazy
@FeignClient(name = "identityService")
public interface IdentityProxy {

    @GetMapping("/auth/validate")
    public void validateToken(@RequestParam String token);
}
