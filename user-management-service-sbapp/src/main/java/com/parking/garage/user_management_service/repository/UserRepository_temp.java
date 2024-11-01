package com.parking.garage.user_management_service.repository;

import com.parking.garage.user_management_service.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository_temp  extends JpaRepository<User, Long> {
    List<User> findAll();
    User save(User user);
    // Additional query methods can be defined here
}
