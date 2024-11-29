package com.microservice.payment.repository;

import com.microservice.payment.entity.Merchant;
import com.microservice.payment.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    void registerUser (User user, Merchant merchant);
}
