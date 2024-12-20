package com.Backend.demo.user;


import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

@org.springframework.stereotype.Service
public class Service {

    @Autowired
    private Repository repository;

    public Optional<User> findByUsername(String username){
        return repository.findByUsername(username);
    }

}
