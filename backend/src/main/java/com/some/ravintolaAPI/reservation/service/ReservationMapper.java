package com.some.ravintolaAPI.reservation.service;

import com.some.ravintolaAPI.reservation.Reservation;
import com.some.ravintolaAPI.reservation.ReservationCreateDto;
import com.some.ravintolaAPI.reservation.ReservationDetailsDto;
import com.some.ravintolaAPI.reservation.ReservationResponseDto;
import com.some.ravintolaAPI.seattable.SeatTable;
import com.some.ravintolaAPI.seattable.SeatTableDto;
import org.springframework.stereotype.Component;

@Component
public class ReservationMapper {

    public Reservation dtoToEntity(ReservationCreateDto dto, SeatTable table) {
        return Reservation.builder()
                .name(dto.getName())
                .surname(dto.getSurname())
                .email(dto.getEmail())
                .table(table)
                .peopleAmount(dto.getPeopleAmount())
                .dateTime(dto.getDateTime())
                .build();
    }

    public ReservationResponseDto entityToDto(Reservation entity) {
        return new ReservationResponseDto(
                entity.getId(),
                entity.getPeopleAmount(),
                entity.getDateTime(),
                entity.getTable().getId()
        );
    }

    public ReservationDetailsDto entityToDetailsDto(Reservation entity) {
        return new ReservationDetailsDto(
                entity.getName(),
                entity.getSurname(),
                entity.getEmail(),
                entity.getPeopleAmount(),
                entity.getDateTime(),
                entity.getTable().getId(),
                new SeatTableDto(
                        entity.getTable().getMinSeats(),
                        entity.getTable().getMaxSeats()
                )
        );

    }


}
