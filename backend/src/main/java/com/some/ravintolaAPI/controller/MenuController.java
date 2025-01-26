package com.some.ravintolaAPI.controller;

import com.some.ravintolaAPI.menu.model.Meal;
import com.some.ravintolaAPI.menu.model.MealDto;
import com.some.ravintolaAPI.menu.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
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
    @PreAuthorize("hasRole('ADMIN')") // Dostęp tylko dla ADMIN
    public MealDto getById(@PathVariable Long id){
        return service.getMeal(id);
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')") // Dostęp tylko dla ADMIN
    public void addMeal(@RequestBody MealDto dto){
        service.addMeal(dto);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')") // Dostęp tylko dla ADMIN
    public void deleteMeal(@PathVariable Long id) {
        service.deleteMeal(id);
    }

    @PutMapping
    @PreAuthorize("hasRole('ADMIN')") // Dostęp tylko dla ADMIN
    public void changeMeal(@RequestBody Meal meal) {
        service.changeMeal(meal);
    }
}
