package com.microservice.payment.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "payment_method")
public class PaymentMethod {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String methodType;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne
    @JoinColumn(name = "gateway_id")
    private PaymentChannel paymentChannel;
    // Getters and Setters
}
