package com.microservice.payment.rest.entities;

public class BaseResponse {
    private int code;
    private String message;
    private Object data;

    public BaseResponse(int code, String message, Object data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public static BaseResponse of(int code, String message, Object data) {
        return new BaseResponse(code, message, data);
    }

    // Getters and Setters
}