package com.some.ravintolaAPI.seattable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeatTableRepo extends JpaRepository<SeatTable,Long> {
}
