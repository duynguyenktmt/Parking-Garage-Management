package com.microservice.payment.common.logging;

import org.springframework.util.ConcurrentReferenceHashMap;

import java.util.Map;
import java.util.Optional;
import java.util.logging.Logger;

public class LLogger {
    private static final Logger LOGGER = Logger.getLogger(LLogger.class.getName());
    private static final Map<String, Logger> LOGGER_CACHE = new ConcurrentReferenceHashMap<>(64);

    public static Logger getLogger(Class<?> clazz) {
        String className = clazz.getName();
        if (LOGGER_CACHE.containsKey(className)) {
            return LOGGER_CACHE.get(className);
        }
        String logModule = clazz.getPackage().getImplementationTitle();
        Logger clazzLogger = Logger.getLogger(clazz.getName());
        LOGGER_CACHE.put(className, clazzLogger);
        LOGGER.fine("LLogger created logger of %s".formatted(getLogMessage(logModule, className)));
        return clazzLogger;
    }

    public static Logger getLogger(String clazzName) {
        try {
            Class<?> clazz = Class.forName(clazzName);
            return getLogger(clazz);
        } catch (ClassNotFoundException ignored) {
        }
        return Logger.getLogger(clazzName);
    }

    private static String getLogMessage(String module, String message) {
        return Optional.ofNullable(module).map(mdl -> "[ " + module + " ] " + message).orElse(message);
    }
}
