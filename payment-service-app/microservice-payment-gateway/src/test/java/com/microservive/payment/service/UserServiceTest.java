package com.microservive.payment.service;

import com.microservice.payment.entity.User;
import com.microservice.payment.repository.UserRepository;
import com.microservice.payment.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class UserServiceTest {
    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testCreateUser () {
        User user = new User();
        user.setUsername("testUser ");

        when(userRepository.save(any(User.class))).thenReturn(user);

        User createdUser  = userService.createUser(user);
        assertEquals("testUser ", createdUser.getUsername());
        verify(userRepository, times(1)).save(user);
    }
}
