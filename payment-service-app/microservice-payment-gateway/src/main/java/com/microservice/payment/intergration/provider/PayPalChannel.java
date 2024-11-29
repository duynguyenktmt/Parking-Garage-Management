package com.microservice.payment.intergration.provider;

import com.microservice.payment.entity.PaymentChannel2;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@DiscriminatorValue("PAYPAL")
@Data
public class PayPalChannel extends PaymentChannel2 {
    private String clientId;
    private String clientSecret;
}
