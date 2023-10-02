package com.project.identityservice.config;

import com.project.identityservice.entity.UserCredential;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public class CustomUserDetails implements UserDetails {

    private String userName;
    private String password;

    private Collection<? extends GrantedAuthority> authorities;


    public CustomUserDetails(UserCredential userCredential) {
        this.userName = userCredential.getUserName();
        this.password = userCredential.getPassword();
        this.authorities = userCredential.getRoles().stream().map(role -> new SimpleGrantedAuthority(role.toString())).toList();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() { return authorities; }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return userName;
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
