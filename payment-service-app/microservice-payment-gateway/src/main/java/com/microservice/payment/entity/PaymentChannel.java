package com.microservice.payment.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Data
@Table(name = "payment_gateway")
public class PaymentChannel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name; // e.g., "PayPal", "Momo", "Payoneer"
    private String apiKey; // API key for integration
    private String secretKey; // Secret key for integration
    private String description; // Description of the payment channel
    @OneToMany(mappedBy = "paymentChannel", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<PaymentMethod> paymentMethods; // Collection of payment methods associated with this channel
}
