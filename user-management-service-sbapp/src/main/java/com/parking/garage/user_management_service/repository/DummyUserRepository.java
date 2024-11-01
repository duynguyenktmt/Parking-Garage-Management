package com.parking.garage.user_management_service.repository;

import com.parking.garage.user_management_service.model.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class DummyUserRepository implements UserRepository {
    private List<User> users = new ArrayList<>();

    public DummyUserRepository() {
        // Add some dummy users using the default constructor and setters
        User adminUser  = new User();
        adminUser.setId(1L);
        adminUser.setUsername("admin_dummy");
        adminUser.setPassword("password1");
        users.add(adminUser);

        User regularUser  = new User();
        regularUser.setId(2L);
        regularUser.setUsername("user_dummy");
        regularUser.setPassword("password2");
        users.add(regularUser);

        // Add some dummy users using the Builder pattern
        // a more concise way to create User objects without having to call multiple setter methods
        users.add(User.builder()
                .id(3L)
                .username("user_dummy")
                .password("password11")
                .build());

        users.add(User.builder()
                .id(4L)
                .username("user_dummy")
                .password("password21")
                .build());
    }

    @Override
    public List<User> findAll() {
        return users;
    }

    @Override
    public User save(User user) {
        // Simulate saving by adding to the list
        users.add(user);
        return user;
    }

    @Override
    public User findByUsername(String username) {
        return null;
    }
}
