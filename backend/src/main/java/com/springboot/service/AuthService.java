package com.springboot.service;

import com.springboot.model.User;
import com.springboot.repository.UserRepository;
import com.springboot.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public String login(String username, String password){

        Optional<User> userOpt = userRepository.findByEmail(username);
        // 로그 지워야함
        System.out.println("userOpt: " + userOpt);
        if(userOpt.isEmpty()){
            throw new RuntimeException("존재하지않는 사용자입니다");
        }
        User user = userOpt.get();
        if(!passwordEncoder.matches(password, user.getPassword())){
            throw new RuntimeException("비밀번호가 일치하지 않습니다");
        }
        return jwtUtil.generateToken(user.getUsername());
    }

    public User signup(String username,  String email, String password){

        if(userRepository.findByEmail(email).isPresent()){
            throw new RuntimeException("이미 존재하는 이메일입니다");
        }

        String encodedPassword = passwordEncoder.encode(password);

        User user =  new User();
        user.setEmail(email);
        user.setUsername(username);
        user.setPassword(encodedPassword);
        user.setRole("USER");

        return userRepository.save(user);
    }
}
