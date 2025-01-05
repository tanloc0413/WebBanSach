package com.cdweb.springboot.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import com.cdweb.springboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cdweb.springboot.config.JwtProvider;
import com.cdweb.springboot.entities.PasswordResetToken;
//import com.cdweb.springboot.entities.Token;
import com.cdweb.springboot.entities.User;
import com.cdweb.springboot.repository.AuthResponse;
import com.cdweb.springboot.repository.PasswordResetTokenRepository;
//import com.cdweb.springboot.repository.TokenRepository;
import com.cdweb.springboot.repository.UserRepository;
import com.cdweb.springboot.request.LoginRequest;
import com.cdweb.springboot.response.ResponseApi;
import com.cdweb.springboot.service.EmailService;
import com.cdweb.springboot.service.Impl.UserDetailsServiceImpl;

@RestController
@RequestMapping("api/auth")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserDetailsServiceImpl userDetailsServiceImpl;
    
    @Autowired
    private PasswordResetTokenRepository passwordResetTokenRepository;

    @Autowired
    private EmailService emailService;
    
//    private TokenRepository tokenRepository;
    
    @PostMapping("/reset-password/request")
    public ResponseApi resetPassword(@RequestParam("email") String email) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            return new ResponseApi("failure", "Email not found");
        }

        String token = UUID.randomUUID().toString();
        
        PasswordResetToken passwordResetToken = new PasswordResetToken(token, user);
        passwordResetTokenRepository.save(passwordResetToken);

        String resetUrl = "http://localhost:3000/reset-password/result?token=" + token;
        emailService.sendEmail(email, "Reset Password", "Click the link to reset your password: " + resetUrl);

        return new ResponseApi("success", "Password reset email sent");
    }

    @PostMapping("/reset-password/confirm")
    public ResponseApi confirmReset(@RequestParam("token") String token, @RequestParam("password") String password,
    		@RequestParam("rePassword") String rePassword) {
    	System.out.println("Token: "+ token);
       PasswordResetToken passwordResetToken = passwordResetTokenRepository.findByToken(token);
        if (passwordResetToken == null) {
            return new ResponseApi("failure", "Invalid token");
        }
        if(!rePassword.equals(password)) return new ResponseApi("failure", "Password Incorrect");
        
        User user = passwordResetToken.getUser();
        user.setPassword(passwordEncoder.encode(password));
        userRepository.save(user);

        passwordResetTokenRepository.delete(passwordResetToken);
        System.out.println("thanh cong soi pas qows");
        return new ResponseApi("success", "Password reset successful");
    }
    @PostMapping("/change-password")
    public Boolean changePassword(@RequestParam String email, @RequestParam String oldPassword) {
        User user = userRepository.findByEmailAndPassword(email, oldPassword);
        if(user!=null) {
        	return true; 
        }
        
        return false;
    }
    
    @PostMapping("/sign-up")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new AuthResponse(null,null,null,null,null,null, "Email is already used"));
        }
        
        System.out.println("user register: "+user);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setUserName(user.getEmail().split("@")[0]);
        user.setRole("ROLE_USER");
        userRepository.save(user);

//        Authentication authentication = new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//
//        String token = jwtProvider.generateToken(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(new AuthResponse(null,null,null,null,null,null, "Signup Success"));
    }

    @PostMapping("/sign-in")
    public ResponseEntity<AuthResponse> loginUserHandler(@RequestBody LoginRequest loginRequest) {
    	String email = loginRequest.getEmail();
    	String password = loginRequest.getPassword();
    	
        Authentication authentication = authenticate(email, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        User user = userRepository.findByEmail(email);
        String token = jwtProvider.generateToken(user);
//        saveToken(user, token);
        
        return ResponseEntity.status(HttpStatus.CREATED).body(new AuthResponse(user.getId(), user.getEmail(), user.getUserName(), user.getFullName(), 
        		user.getMobile(), token,"Signin Success"));
    }

//	private void saveToken(User user, String token) {
//		Token t = new Token();
//        t.setRefreshToken(token);
//        t.setLoggedOut(false);
//        t.setUser(user);
//        tokenRepository.save(t);
//	}

    private Authentication authenticate(String email, String password) {
        UserDetails userDetails = userDetailsServiceImpl.loadUserByUsername(email);
        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Invalid password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }

//    @PostMapping("/forgot-password")
//    public ResponseEntity<String> forgotPassword(@RequestParam String email) {
//        UserService user = userDetailsServiceImpl.loadUserByUsername(email);
//        if (user == null) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Email không tồn tại!");
//        }
//
//        String otp = emailService.generateOTP();
//        emailService.sendEmail(email, "Mã xác nhận đặt lại mật khẩu",
//                "Mã OTP của bạn là: " + otp);
//
//        userService.saveOTP(email, otp); // Lưu OTP tạm thời trong cơ sở dữ liệu hoặc bộ nhớ cache.
//        return ResponseEntity.ok("OTP đã được gửi tới email của bạn.");
//    }
}
