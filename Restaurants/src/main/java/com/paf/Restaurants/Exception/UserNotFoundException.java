package com.paf.Restaurants.Exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException (Long id){
        super("Could not Found the Restaurant with id "+ id);
    }
}
