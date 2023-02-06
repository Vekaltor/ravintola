package com.kacwol.ravintolaAPI.controller;


import com.kacwol.ravintolaAPI.menu.model.Meal;
import com.kacwol.ravintolaAPI.menu.model.MealDto;
import com.kacwol.ravintolaAPI.menu.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000","http://ravintola.toadres.pl","https://ravintola.toadres.pl"})
@RequestMapping("/api/menu")
public class MenuController {

    private final MenuService service;

    @Autowired
    public MenuController(MenuService service) {
        this.service = service;
    }

    @GetMapping
    public List<Meal> getMenu() {
        return service.getAllMeals();
    }

    @GetMapping("/{id}")
    public MealDto getById(@PathVariable Long id){
        return service.getMeal(id);
    }

    @PostMapping
    public void addMeal(@RequestBody MealDto dto){
        service.addMeal(dto);
    }

    @DeleteMapping("/{id}")
    public void deleteMeal(@PathVariable Long id) {
        service.deleteMeal(id);
    }

    @PutMapping
    public void changeMeal(@RequestBody Meal meal) {
        service.changeMeal(meal);
    }



}
