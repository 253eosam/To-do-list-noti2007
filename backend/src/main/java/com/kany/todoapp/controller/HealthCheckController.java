package com.kany.todoapp.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/health")
public class HealthCheckController {

    @GetMapping("/check")
    @ResponseStatus(value = HttpStatus.OK)
    public String healthCheck() {
        return "ok";
    }
}
