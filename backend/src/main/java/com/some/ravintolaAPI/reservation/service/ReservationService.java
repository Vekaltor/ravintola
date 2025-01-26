package com.some.ravintolaAPI.reservation.service;

import com.some.ravintolaAPI.reservation.Reservation;
import com.some.ravintolaAPI.reservation.ReservationCreateDto;
import com.some.ravintolaAPI.reservation.ReservationDetailsDto;
import com.some.ravintolaAPI.reservation.ReservationResponseDto;
import com.some.ravintolaAPI.seattable.SeatTable;
import com.some.ravintolaAPI.seattable.SeatTableService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReservationService {

    private final ReservationRepo repo;

    private final ReservationMapper mapper;

    private final SeatTableService tableService;

    public Reservation getEntityById(Long id){
        return repo.findById(id).orElseThrow();
    }

    public List<ReservationResponseDto> getReservations() {
        return repo.findAll()
                .stream()
                .map(mapper::entityToDto)
                .toList();
    }

    public void addReservation(ReservationCreateDto dto){
        SeatTable table = tableService.getEntityById(dto.getTableId());
        repo.save(mapper.dtoToEntity(dto,table));
    }

    public ReservationDetailsDto getReservationDetails(Long id) {
        return mapper.entityToDetailsDto(getEntityById(id));
    }
}
