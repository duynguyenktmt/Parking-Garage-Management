package com.parking.garage.user_management_service.repository;

import com.parking.garage.user_management_service.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository  {
    //not extend JpaRe... here due to just want to use some specific methods not all
    List<User> findAll();
    User save(User user);
    User findByUsername (String username);
    // Optional<User> findByUsername(String username); //keep this for considering
    // Additional query methods can be defined here
}
