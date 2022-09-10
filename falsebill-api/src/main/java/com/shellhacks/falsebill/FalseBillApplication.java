package com.shellhacks.falsebill;

import com.shellhacks.falsebill.model.User;
import com.shellhacks.falsebill.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FalseBillApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(FalseBillApplication.class, args);
    }

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        this.userRepository.save(new User("firstname", "lastname", "email"));
    }
}
