package com.kacwol.ravintolaAPI.menu.service;

import com.kacwol.ravintolaAPI.menu.model.Meal;
import com.kacwol.ravintolaAPI.menu.model.MealDto;
import org.springframework.stereotype.Component;

@Component
public class MealMapper {

    public Meal dtoToEntity(MealDto dto){

        if(dto.getPrice()<0){
            throw new RuntimeException();
        }

        return Meal.builder()
                .name(dto.getName())
                .description(dto.getDescription())
                .price(dto.getPrice())
                .mealCategory(dto.getMealCategory())
                .weight(dto.getWeight())
                .imageSrc(dto.getImageSrc())
                .isRecommended(dto.isRecommended())
                .build();
    }

    public MealDto entityToDto(Meal entity){
        return MealDto.builder()
                .name(entity.getName())
                .description(entity.getDescription())
                .price(entity.getPrice())
                .mealCategory(entity.getMealCategory())
                .weight(entity.getWeight())
                .imageSrc(entity.getImageSrc())
                .isRecommended(entity.isRecommended())
                .build();
    }

}
