package com.kacwol.ravintolaAPI.menu.service;

import com.kacwol.ravintolaAPI.menu.model.Meal;
import com.kacwol.ravintolaAPI.menu.model.MealDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {

    private final MealRepo repo;

    private final MealMapper mapper;

    @Autowired
    public MenuService(MealRepo mealRepo, MealMapper mapper) {
        this.repo = mealRepo;
        this.mapper = mapper;
    }

    public void addMeal(MealDto dto) {
        repo.save(mapper.dtoToEntity(dto));
    }

    public Meal getMealEntity(Long id) {
        return repo.findById(id).orElseThrow();
    }

    public MealDto getMeal(Long id) {
        return mapper.entityToDto(getMealEntity(id));
    }

    public List<Meal> getAllMeals() {
        return repo.findAll();
    }

    public void deleteMeal(Long id) {
        repo.deleteById(id);
    }

}
