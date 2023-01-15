package com.project.resto.service;

import com.project.resto.entity.Dish;

import java.util.List;

public interface DishService {

    //Save operation
    void saveDish(Dish dish);

    //Read operation
    List<Dish> fetchDishList();

    //Update operation
    void updateDish(Dish dish, Long dishId);

    //Delete operation
    void deleteDish(Long dishId);
}
