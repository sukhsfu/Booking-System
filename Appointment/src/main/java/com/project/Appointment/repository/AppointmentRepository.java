package com.project.Appointment.repository;

import com.project.Appointment.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment,Integer> {
    List<Appointment> findAllByClientId(int clientId);

    List<Appointment> findAllByProviderId(int providerId);
}
