package com.microservice.payment.entity;

import jakarta.persistence.*;
import lombok.Data;

/*
    Used for special implement while integrating specific providers
* */

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "payment_type")
@Data
public abstract class PaymentChannel2 {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name; // e.g., "PayPal", "Momo", "Payoneer"
}
