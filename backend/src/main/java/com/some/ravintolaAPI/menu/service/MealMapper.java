package com.some.ravintolaAPI.menu.service;

import com.some.ravintolaAPI.menu.model.Meal;
import com.some.ravintolaAPI.menu.model.MealDto;
import org.springframework.stereotype.Component;

@Component
public class MealMapper {

    public Meal dtoToEntity(MealDto dto){

        if(dto.getPrice()<0){
            throw new RuntimeException();
        }

        return Meal.builder()
                .id(dto.getId())
                .name(dto.getName())
                .description(dto.getDescription())
                .price(dto.getPrice())
                .mealCategory(dto.getMealCategory())
                .weight(dto.getWeight())
                .image(dto.getImage())
                .isRecommended(dto.getIsRecommended())
                .build();
    }

    public MealDto entityToDto(Meal entity){
        return MealDto.builder()
                .name(entity.getName())
                .description(entity.getDescription())
                .price(entity.getPrice())
                .mealCategory(entity.getMealCategory())
                .weight(entity.getWeight())
                .image(entity.getImage())
                .isRecommended(entity.getIsRecommended())
                .build();
    }

}
