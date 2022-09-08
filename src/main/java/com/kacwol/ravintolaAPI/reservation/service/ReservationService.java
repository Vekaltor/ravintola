package com.kacwol.ravintolaAPI.reservation.service;

import com.kacwol.ravintolaAPI.reservation.ReservationCreateDto;
import com.kacwol.ravintolaAPI.reservation.ReservationResponseDto;
import com.kacwol.ravintolaAPI.seattable.SeatTable;
import com.kacwol.ravintolaAPI.seattable.SeatTableService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationService {

    private final ReservationRepo repo;

    private final ReservationMapper mapper;

    private final SeatTableService tableService;

    public ReservationService(ReservationRepo repo, ReservationMapper mapper, SeatTableService tableService) {
        this.repo = repo;
        this.mapper = mapper;
        this.tableService = tableService;
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



}
