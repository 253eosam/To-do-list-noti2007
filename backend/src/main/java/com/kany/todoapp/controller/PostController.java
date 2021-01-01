package com.kany.todoapp.controller;

import com.kany.todoapp.domain.Post;
import com.kany.todoapp.service.PostService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/posts")
public class PostController {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    private final PostService postService;

    @GetMapping()
    public ResponseEntity<List<Post>> findAll() {

        return new ResponseEntity<>(postService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Post> findById(@PathVariable Long id) {

        Post post = postService.findById(id);

        return new ResponseEntity<>(post, HttpStatus.OK);
    }

    @GetMapping("/users/{name}")
    public ResponseEntity<List<Post>> findByUserName(@PathVariable String name) {

        List<Post> posts = postService.findByUserName(name);

        return new ResponseEntity<>(posts, HttpStatus.OK);
    }

    @GetMapping("/condition/{name}")
    public ResponseEntity<List<Post>> findByCondition(@PathVariable String name, @RequestParam("completed") boolean completed, @RequestParam("keyWord") String keyWord) {

        List<Post> posts = postService.findByCondition(name, completed, keyWord);

        return new ResponseEntity<>(posts, HttpStatus.OK);
    }

    @PostMapping(value = "/{name}", consumes = "application/json")
    public ResponseEntity<Void> save(@RequestBody Post post, @PathVariable String name) {

        postService.save(post, name);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping(value = "/{id}", consumes = "application/json")
    public ResponseEntity<Post> update(@RequestBody Post post) {

        postService.update(post);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {

        postService.deleteById(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
