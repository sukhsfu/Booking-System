package com.project.identityservice.controller;

import com.project.identityservice.entity.UserCredential;
import com.project.identityservice.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/auth")
public class AuthController {


    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private AuthService service;

    @PostMapping("/register")
    public String addNewUser(@RequestBody UserCredential user){
        service.saveUser(user);
        return getToken(user);
    }

    @PostMapping("/token")
    public String getToken(@RequestBody UserCredential userCredential){
        Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userCredential.getUserName(), userCredential.getPassword()));
        if(authenticate.isAuthenticated()){
            return service.generateToken(userCredential.getUserName());
        }
        else{
            throw new RuntimeException("invalid access");
        }

    }

    @GetMapping("/validate/provider")
    public String validateProviderToken(@RequestAttribute String userName, @RequestParam String token){
        return userName;
    }

    @GetMapping("/validate/client")
    public String validateClientToken(@RequestAttribute String userName, @RequestParam String token){
        return userName;
    }
    @GetMapping("/validate/appointment")
    public String validateAppointmentToken(@RequestAttribute String userName , @RequestParam String token){
        return userName;
    }
}
