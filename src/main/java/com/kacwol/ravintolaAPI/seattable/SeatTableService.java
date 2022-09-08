package com.kacwol.ravintolaAPI.seattable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeatTableService {

    private final SeatTableRepo repo;

    @Autowired
    public SeatTableService(SeatTableRepo repo) {
        this.repo = repo;
    }

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
}
