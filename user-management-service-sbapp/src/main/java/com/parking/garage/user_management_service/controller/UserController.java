package com.parking.garage.user_management_service.controller;

import com.parking.garage.user_management_service.model.User;
import com.parking.garage.user_management_service.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping
    public ResponseEntity<User> createUser (@RequestBody User user) {
        User createdUser  = userService.createUser (user);
        return ResponseEntity.ok(createdUser );
    }
}
