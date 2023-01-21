package com.project.resto.service.impl;

import com.project.resto.entity.Dish;
import com.project.resto.repository.DishRepository;
import com.project.resto.service.DishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DishServiceImpl implements DishService {

    private final DishRepository dishRepository;

    @Autowired
    public DishServiceImpl(DishRepository dishRepository) {
        this.dishRepository = dishRepository;
    }

    @Override
    public List<Dish> fetchDishList() {
        return dishRepository.findAll();
    }

    @Override
    public void saveDish(Dish dish) {
        dishRepository.save(dish);
    }

    @Override
    public void updateDish(Dish dish, Long dishId) {
        dishRepository.save(dish);
    }

    @Override
    public void deleteDish(Long dishId) {
        dishRepository.deleteById(dishId);
    }
}
