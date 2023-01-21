package com.project.resto.controller;

import com.project.resto.entity.Dish;
import com.project.resto.service.DishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", maxAge = 3600)
public class DishController {

    private final DishService dishService;

    @Autowired
    public DishController(DishService dishService) {
        this.dishService = dishService;
    }

    //Read operation
    @GetMapping("/dishes")
    public List<Dish> fetchDishList(){
        return dishService.fetchDishList();
    }

    //Save operation
    @PostMapping("/dishes")
    public void saveDish(Dish dish){
        dishService.saveDish(dish);
    }

    //Update operation
    @PutMapping("/dishes/{id}")
    public void updateDish(@RequestBody Dish dish, @PathVariable Long dishId){
        dishService.updateDish(dish, dishId);
    }

    //Delete Operation
    @GetMapping("/dishes/{id}")
    public void deleteDish(@PathVariable Long dishId){
        dishService.deleteDish(dishId);
    }

}
