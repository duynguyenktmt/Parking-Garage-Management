package com.parking.garage.user_management_service.service;

import com.parking.garage.user_management_service.model.User;
import com.parking.garage.user_management_service.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User createUser (User user) {
        return userRepository.save(user);
    }
    // Other service methods can be added here
}
