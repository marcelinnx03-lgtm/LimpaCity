package com.limpacity.controller;

import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin/session")
public class OwnerSessionController {

    @GetMapping
    public ResponseEntity<Map<String, String>> session(Authentication authentication) {
        return ResponseEntity.ok(Map.of(
                "status", "authenticated",
                "owner", authentication.getName()));
    }
}
