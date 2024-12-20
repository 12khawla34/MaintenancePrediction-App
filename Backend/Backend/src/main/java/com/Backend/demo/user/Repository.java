package com.Backend.demo.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface Repository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
