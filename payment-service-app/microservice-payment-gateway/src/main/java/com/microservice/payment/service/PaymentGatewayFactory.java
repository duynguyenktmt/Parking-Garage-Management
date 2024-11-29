package com.microservice.payment.service;

import com.microservice.payment.entity.PaymentChannel;
import com.microservice.payment.entity.PaymentMethod;

@Service
public class PaymentGatewayFactory {

    @Autowired
    private PaymentChannelRepository paymentChannelRepository; // Repository to access PaymentChannel entities

    public PaymentGateway getPaymentGateway(PaymentMethod paymentMethod) {
        PaymentChannel paymentChannel = paymentMethod.getPaymentChannel();
        // Logic to return the appropriate PaymentGateway instance based on the payment channel
        // For example, you could have a map of payment channels to their respective gateway implementations
        return createPaymentGateway(paymentChannel);
    }

    private PaymentGateway createPaymentGateway(PaymentChannel paymentChannel) {
        // Logic to instantiate the correct PaymentGateway based on the paymentChannel
        switch (paymentChannel.getName()) {
            case "PayPal":
                return new PayPalGateway(paymentChannel.getApiKey(), paymentChannel.getSecretKey());
            case "Momo":
                return new MomoGateway(paymentChannel.getApiKey(), paymentChannel.getSecretKey());
            // Add more cases for other payment channels
            default:
                throw new IllegalArgumentException("Unsupported payment channel: " + paymentChannel.getName());
        }
    }
}
