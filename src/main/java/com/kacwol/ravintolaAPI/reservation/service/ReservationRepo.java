package com.kacwol.ravintolaAPI.reservation.service;

import com.kacwol.ravintolaAPI.reservation.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepo extends JpaRepository<Reservation,Long> {
}
