package com.parking.garage.notification_management_service.service;

import com.parking.garage.notification_management_service.model.Notification;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.data.redis.core.RedisTemplate;

import java.util.List;

@Service
public class NotificationService {

    private final KafkaTemplate<String, String> kafkaTemplate;
    private final RedisTemplate<String, String> redisTemplate;

    public NotificationService(KafkaTemplate<String, String> kafkaTemplate, RedisTemplate<String, String> redisTemplate) {
        this.kafkaTemplate = kafkaTemplate;
        this.redisTemplate = redisTemplate;
    }

    public void sendNotification(Notification notification) {
        // Send notification to Kafka
        kafkaTemplate.send("notification-topic", notification.getMessage());

        // Store notification in Redis
        redisTemplate.opsForValue().set(notification.getId(), notification.getMessage());
    }

    public List<Notification> getUserNotifications(String userId) {
        return List.of();
    }
}