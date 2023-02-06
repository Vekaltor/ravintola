package com.kacwol.ravintolaAPI.controller;

import com.kacwol.ravintolaAPI.seattable.SeatTable;
import com.kacwol.ravintolaAPI.seattable.SeatTableDto;
import com.kacwol.ravintolaAPI.seattable.SeatTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000","http://ravintola.toadres.pl","https://ravintola.toadres.pl"})
@RequestMapping("api/seattable")
public class SeatTableController {

    private final SeatTableService service;

    @Autowired
    public SeatTableController(SeatTableService service) {
        this.service = service;
    }

    @PostMapping
    public void addTable(@RequestBody SeatTableDto table) {
        service.addSeatTable(table);
    }

    @GetMapping("/{id}")
    public SeatTable getTableById(@PathVariable Long id) {
        return service.getSeatTable(id);
    }

    @GetMapping
    public List<SeatTable> getTables() {
        return service.getSeatTables();
    }

    @PutMapping
    public void changeSeatTable(SeatTable seatTable) {
        service.changeSeatTable(seatTable);
    }
}
