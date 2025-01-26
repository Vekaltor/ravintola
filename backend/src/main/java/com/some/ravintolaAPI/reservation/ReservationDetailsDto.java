package com.some.ravintolaAPI.reservation;

import com.some.ravintolaAPI.seattable.SeatTableDto;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class ReservationDetailsDto {

    private String name;

    private String surname;

    private String email;

    private int peopleAmount;

    private LocalDateTime dateTime;

    Long seatTableId;

    SeatTableDto seatTable;

}
