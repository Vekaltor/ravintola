package com.some.ravintolaAPI.seattable;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SeatTableService {

    private final SeatTableRepo repo;

    public List<SeatTable> getSeatTables() {
        return repo.findAll();
    }

    public SeatTable getEntityById(Long id){
        return repo.findById(id).orElseThrow();
    }

    public void addSeatTable(SeatTableDto dto) {
        repo.save(new SeatTable(
                null,
                dto.getMinSeats(),
                dto.getMaxSeats()
                )
        );
    }

    public SeatTable getSeatTable(Long id) {
        return repo.findById(id).orElseThrow();
    }

    public void changeSeatTable(SeatTable seatTable) {
        repo.save(seatTable);
    }
}
