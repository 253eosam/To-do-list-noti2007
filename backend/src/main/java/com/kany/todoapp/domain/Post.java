package com.kany.todoapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ApiModelProperty(hidden = true)
    private Long id;

    @Column(nullable = false)
    private String content;

    @ApiModelProperty(hidden = true)
    private LocalDateTime created_at = LocalDateTime.now();

    @ApiModelProperty(hidden = true)
    private LocalDateTime updated_at;

    @Column(nullable = false)
    @ApiModelProperty(hidden = true)
    private boolean completed;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name="user_id")
    @ApiModelProperty(hidden = true)
    private User user;
}
