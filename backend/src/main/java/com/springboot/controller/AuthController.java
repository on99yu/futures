package com.springboot.controller;

import com.springboot.dto.LoginRequest;
import com.springboot.dto.LoginResponse;
import com.springboot.dto.SignupRequest;
import com.springboot.dto.SignupResponse;
import com.springboot.model.User;
import com.springboot.repository.UserRepository;
import com.springboot.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final AuthService authService;
    private final UserRepository userRepository;
    // @param request {"username": "...", "password": "..."}

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest request){

            LoginResponse response = authService.login(request.email(), request.password());
            return ResponseEntity.ok(response);

    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody SignupRequest request){

            var user = authService.signup(
                    request.username(),
                    request.email(),
                    request.password()
            );
            var response = new SignupResponse(user.getEmail(), user.getUsername());

            return ResponseEntity.status(HttpStatus.CREATED).body(response);

    }
}
