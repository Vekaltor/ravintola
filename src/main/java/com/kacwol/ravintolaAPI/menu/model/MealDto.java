package com.kacwol.ravintolaAPI.menu.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@AllArgsConstructor
@Getter
@Builder
public class MealDto {

    private String name;

    private String description;

    private MealCategory mealCategory;

    private long weight;

    private double price;

    private String imageSrc;

    private boolean isRecommended;
}
