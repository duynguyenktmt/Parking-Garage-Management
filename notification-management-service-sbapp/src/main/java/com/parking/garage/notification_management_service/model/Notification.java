package com.parking.garage.notification_management_service.model;

import lombok.Data;

@Data
public class Notification {
    private String id;
    private String userId;
    private String message;
    private boolean isRead;
    private long timestamp;
}
