package com.Backend.demo.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
public class Controller {

    @GetMapping
    public String StartServer() {
        return "Server is Running !";
    }

    @Autowired
    private Service service;

    @PostMapping("/signin")
    public String signIn(@RequestBody User user) {
        Optional<User> existingUser = service.findByUsername(user.getUsername());
        if (existingUser.isPresent() && existingUser.get().getPassword().equals(user.getPassword())) {
            return "Connexion réussie";
        }
        return "Nom d'utilisateur ou mot de passe incorrect";
    }
}