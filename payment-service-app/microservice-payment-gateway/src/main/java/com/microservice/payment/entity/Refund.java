package com.microservice.payment.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "refund")
public class Refund {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double amount;

    @ManyToOne
    @JoinColumn(name = "transaction_id")
    private Transaction transaction;

    // Getters and Setters
}
