package com.kacwol.ravintolaAPI.controller;


import com.kacwol.ravintolaAPI.menu.model.Meal;
import com.kacwol.ravintolaAPI.menu.model.MealDto;
import com.kacwol.ravintolaAPI.menu.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
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
