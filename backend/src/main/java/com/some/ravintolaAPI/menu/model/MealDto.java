package com.some.ravintolaAPI.menu.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.codehaus.jackson.annotate.JsonProperty;

@AllArgsConstructor
@Getter
@Builder
public class MealDto {

    private Long id;

    private String name;

    private String description;

    private MealCategory mealCategory;

    private Long weight;

    private double price;

    private String image;

    private boolean isRecommended;

    @JsonProperty(value = "isRecommended")
    public boolean getIsRecommended() {
        return isRecommended;
    }


}
