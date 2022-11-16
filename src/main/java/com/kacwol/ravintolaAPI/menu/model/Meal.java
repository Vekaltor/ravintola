package com.kacwol.ravintolaAPI.menu.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Meal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

//    @Enumerated(EnumType.STRING)
    private MealCategory mealCategory;

    private Long weight;

    private double price;

    @Lob
    @Column(name = "image", columnDefinition="BLOB")
    private String image;

    private boolean isRecommended;

}
