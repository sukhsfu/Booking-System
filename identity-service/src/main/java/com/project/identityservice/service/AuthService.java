package com.project.identityservice.service;


import com.project.identityservice.entity.UserCredential;
import com.project.identityservice.repository.UserCredentialRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class AuthService {

    @Autowired
    private UserCredentialRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    public String saveUser(UserCredential credential){
        if(repository.findByUserName(credential.getUserName()).isPresent()){
            UserCredential user = repository.findByUserName(credential.getUserName()).get();
            if(passwordEncoder.matches(credential.getPassword(),user.getPassword()) && user.getRoles().size() == 1 && !Objects.equals(user.getRoles().iterator().next(), credential.getRoles().iterator().next())){
                user.getRoles().add(credential.getRoles().iterator().next());
                repository.save(user);
                return "User added to the System";
            }
            else{
                return "UserName Already Taken";
            }

        }
        credential.setPassword(passwordEncoder.encode(credential.getPassword()));
        repository.save(credential);
        return "User added to the System";
    }

    public String generateToken(String  username){
        return jwtService.generateToken(username);
    }

    public String validateToken(String token){
       return jwtService.validateToken(token);
    }


}
