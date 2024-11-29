package com.microservice.payment.intergration.provider;

import com.microservice.payment.entity.PaymentChannel2;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@DiscriminatorValue("MOMO")
@Data
public class MomoChannel extends PaymentChannel2 {
    private String accessKey;
    private String secretKey;
}
