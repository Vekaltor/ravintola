package com.kacwol.ravintolaAPI.controller;

import com.kacwol.ravintolaAPI.reservation.ReservationCreateDto;
import com.kacwol.ravintolaAPI.reservation.ReservationDetailsDto;
import com.kacwol.ravintolaAPI.reservation.ReservationResponseDto;
import com.kacwol.ravintolaAPI.reservation.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/reservation")
public class ReservationController {

    private final ReservationService service;

    @Autowired
    public ReservationController(ReservationService service) {
        this.service = service;
    }

    @GetMapping
    public List<ReservationResponseDto> getReservations() {
        return service.getReservations();
    }

    @GetMapping("/{id}")
    public ReservationDetailsDto getReservationDetails(@PathVariable Long id) {
        return service.getReservationDetails(id);
    }

    @PostMapping
    public void makeReservation(@RequestBody ReservationCreateDto dto){
        service.addReservation(dto);
    }

}
