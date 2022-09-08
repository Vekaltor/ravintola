package com.kacwol.ravintolaAPI.seattable;

import com.kacwol.ravintolaAPI.seattable.SeatTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeatTableRepo extends JpaRepository<SeatTable,Long> {
}
