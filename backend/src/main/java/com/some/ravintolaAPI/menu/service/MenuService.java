package com.some.ravintolaAPI.menu.service;

import com.some.ravintolaAPI.menu.model.Meal;
import com.some.ravintolaAPI.menu.model.MealDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MenuService {

    private final MealRepo repo;

    private final MealMapper mapper;

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

    public void changeMeal(Meal meal) {
        repo.save(meal);
    }

}
