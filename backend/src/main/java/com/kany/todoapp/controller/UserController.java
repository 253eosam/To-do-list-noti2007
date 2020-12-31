package com.kany.todoapp.controller;

import com.kany.todoapp.domain.User;
import com.kany.todoapp.service.UserService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    private final UserService userService;

    @GetMapping("/{name}")
    public ResponseEntity<User> find(@PathVariable String name) {
        LOGGER.debug("call find user ({})", name);

        User user = userService.findByName(name);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping(value = "/{name}", consumes = "application/json")
    public ResponseEntity<User> change(@RequestBody User user, @PathVariable String name) {
        LOGGER.debug("call change user ({}), change name ({})", user.toString(), name);

        User changeUser = userService.change(user, name);

        return new ResponseEntity<>(changeUser, HttpStatus.OK);
    }
}
