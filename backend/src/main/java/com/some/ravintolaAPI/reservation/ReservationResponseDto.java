package com.some.ravintolaAPI.reservation;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class ReservationResponseDto {

    private Long id;

    private int peopleAmount;

    @JsonFormat(pattern ="dd/MM/yyyy HH:mm")
    private LocalDateTime dateTime;

    private Long tableId;
}
