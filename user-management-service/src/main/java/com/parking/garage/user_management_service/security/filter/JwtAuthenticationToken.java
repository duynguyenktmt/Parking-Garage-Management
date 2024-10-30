package com.parking.garage.user_management_service.security.filter;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import java.util.Collection;

public class JwtAuthenticationToken implements Authentication{
    private final String token;
    private final Collection<? extends GrantedAuthority> authorities;
    private boolean authenticated = true; // Assuming authenticated by default
    private final Object principal;
    private Object details; // Field for storing details

    //addition constructor for some next implement ....
    public JwtAuthenticationToken(String token, Object principal, Collection<? extends GrantedAuthority> authorities) {
        this(token, principal, authorities, null); // Default details to null
    }

    public JwtAuthenticationToken(String token, Object principal, Object details, Collection<? extends GrantedAuthority> authorities) {
        this.token = token;
        this.authorities = authorities;
        this.principal = principal;
        this.details = details;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public Object getCredentials() {
        return token;
    }

    @Override
    public Object getDetails() {
        return null;
    }

    public void setDetails(Object details) {
        this.details = details; // Set the details
    }

    @Override
    public Object getPrincipal() {
        return null;
    }

    @Override
    public boolean isAuthenticated() {
        return authenticated;
    }

    @Override
    public void setAuthenticated(boolean isAuthenticated) throws IllegalArgumentException {
        this.authenticated = isAuthenticated;
    }

    @Override
    public String getName() {
        return principal != null ? principal.toString() : ""; // Return a meaningful name
    }
}
