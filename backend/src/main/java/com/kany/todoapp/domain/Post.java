package com.kany.todoapp.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String content;

    private LocalDateTime created_at = LocalDateTime.now();

    private LocalDateTime updated_at;

    @Column(nullable = false)
    private boolean completed;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;
}
