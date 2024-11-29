package com.microservice.payment.repository;

import com.microservice.payment.entity.PaymentMethod;
import com.microservice.payment.entity.Refund;
import com.microservice.payment.entity.Transaction;
import com.microservice.payment.entity.User;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository {
    void processPayment(User user, PaymentMethod paymentMethod, Transaction transaction);
    void processRefund(Transaction transaction, Refund refund);
}
