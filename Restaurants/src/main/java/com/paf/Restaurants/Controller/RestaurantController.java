package com.paf.Restaurants.Controller;

import com.paf.Restaurants.Exception.UserNotFoundException;
import com.paf.Restaurants.Model.Restaurant;
import com.paf.Restaurants.Repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;

@RestController

@CrossOrigin("http://localhost:3000")
public class RestaurantController {

    @Autowired
    private RestaurantRepository restaurantRepository;
    @PostMapping("/restaurant")
    Restaurant newRestaurant(@RequestBody Restaurant newRestaurant){
        return restaurantRepository.save(newRestaurant);
    }
    @GetMapping("/restaurants")
    List<Restaurant> getAllRestaurants(){
        return restaurantRepository.findAll();
    }
    @GetMapping("/restaurant/{id}")
    Restaurant getRestaurantById (@PathVariable long id){
        return restaurantRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }
    @PutMapping("/restaurant/{id}")
    Restaurant updateRestaurant(@RequestBody Restaurant newRestaurant, @PathVariable Long id) {
        return restaurantRepository.findById(id)
                .map(restaurant -> {
                    restaurant.setRestaurantName(newRestaurant.getRestaurantName());
                    restaurant.setAddress(newRestaurant.getAddress());
                    restaurant.setEmail(newRestaurant.getEmail());
                    return restaurantRepository.save(restaurant);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }
    @DeleteMapping("/restaurant/{id}")
    String deleteRestaurant(@PathVariable Long id){
        if(!restaurantRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        restaurantRepository.deleteById(id);
        return  "Restaurant with id "+id+" has been deleted success.";
    }
}
