package com.some.ravintolaAPI.menu.service;

import com.some.ravintolaAPI.menu.model.Meal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MealRepo extends JpaRepository<Meal,Long> {
}
