package com.fit.backend.service;

public interface EmailService {
    public void sendMessage(String form, String to, String subject, String text);
}
