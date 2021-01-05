package com.kany.todoapp.controller;

import com.kany.todoapp.domain.User;
import com.kany.todoapp.service.UserService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    @ApiOperation("사용자 이름으로 조회")
    @ApiImplicitParam(name = "name", value = "사용자 닉네임")
    @GetMapping("/{name}")
    public ResponseEntity<User> find(@PathVariable String name) {

        User user = userService.findByName(name);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @ApiOperation("사용자 변경")
    @ApiImplicitParam(name = "name", value = "변경할 닉네임")
    @PostMapping("/{name}")
    public ResponseEntity<User> change(@PathVariable String name) {

        User changeUser = userService.change(name);

        return new ResponseEntity<>(changeUser, HttpStatus.OK);
    }
}
