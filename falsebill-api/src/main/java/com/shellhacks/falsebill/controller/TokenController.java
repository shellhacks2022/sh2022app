package com.shellhacks.falsebill.controller;

import com.shellhacks.falsebill.model.ClientUser;
import com.shellhacks.falsebill.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("users")
    public List<ClientUser> getUser(){
        return this.userRepository.findAll();
    }


}
