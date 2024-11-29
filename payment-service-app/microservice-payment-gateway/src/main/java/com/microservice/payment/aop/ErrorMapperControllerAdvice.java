package com.microservice.payment.aop;

import com.microservice.payment.common.CommonPINErrorCode;
import com.microservice.payment.common.logging.LLogger;
import com.microservice.payment.rest.entities.BaseResponse;
import jakarta.ws.rs.ForbiddenException;
import org.hibernate.service.spi.ServiceException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.logging.Level;
import java.util.logging.Logger;

@RestControllerAdvice
public class ErrorMapperControllerAdvice {
    private static final Logger LOGGER = LLogger.getLogger(ErrorMapperControllerAdvice.class);

    @ExceptionHandler(ServiceException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<BaseResponse> handlerError(ServiceException ex) {
        LOGGER.log(Level.SEVERE, "[application error] - ServiceException - %s".formatted(ex.getMessage()), ex);
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(BaseResponse.of(CommonPINErrorCode.SYSERROR.getCode(), ex.getMessage(), null));
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<BaseResponse> handlerPaymentServiceException(Exception ex) {
        LOGGER.log(Level.SEVERE, "[application error] - PaymentServiceException - %s".formatted(ex.getMessage()), ex);
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(BaseResponse.of(HttpStatus.BAD_REQUEST.value(), ex.getMessage(), null));
    }
    @ExceptionHandler(HttpMessageNotReadableException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<BaseResponse> handlerHttpMessageNotReadableException(HttpMessageNotReadableException exception) {
        LOGGER.log(Level.SEVERE, "[application error] %s".formatted(exception.getMessage()), exception);
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(BaseResponse.of(HttpStatus.BAD_REQUEST.value(), exception.getMessage(), exception.getMessage()));
    }
    @ExceptionHandler(ForbiddenException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public ResponseEntity<BaseResponse> handlerForbiddenException(ForbiddenException exception) {
        LOGGER.log(Level.SEVERE, "[application error] %s".formatted(exception.getMessage()), exception);
        return ResponseEntity
                .status(HttpStatus.FORBIDDEN)
                .body(BaseResponse.of(HttpStatus.FORBIDDEN.value(), exception.getMessage(), exception.getMessage()));
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<BaseResponse> handlerException(Exception exception) {
        LOGGER.log(Level.SEVERE, "[application error] %s".formatted(exception.getMessage()), exception);
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(BaseResponse.of(HttpStatus.INTERNAL_SERVER_ERROR.value(), "Error happened while processing request.", null));
    }
}
