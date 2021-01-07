package com.kany.todoapp.controller;

import com.kany.todoapp.domain.Post;
import com.kany.todoapp.dto.SearchConditionDTO;
import com.kany.todoapp.service.PostService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/posts")
public class PostController {

    private final PostService postService;

    @GetMapping()
    @ApiOperation("전체 게시글 조회")
    public ResponseEntity<List<Post>> findAll() {

        return new ResponseEntity<>(postService.findAll(), HttpStatus.OK);
    }

    @ApiOperation("게시글 단건 조회")
    @ApiImplicitParam(name = "id", value = "게시글 ID")
    @GetMapping("/{id}")
    public ResponseEntity<Post> findById(@PathVariable Long id) {

        Post post = postService.findById(id);

        return new ResponseEntity<>(post, HttpStatus.OK);
    }

    @ApiOperation("사용자별 게시글 조회")
    @ApiImplicitParam(name = "name", value = "사용자 닉네임")
    @GetMapping("/users/{name}")
    public ResponseEntity<List<Post>> findByUserName(@PathVariable String name) {

        List<Post> posts = postService.findByUserName(name);

        return new ResponseEntity<>(posts, HttpStatus.OK);
    }

    @ApiOperation("조건 조회")
    @ApiImplicitParam(name = "name", value = "사용자 닉네임")
    @PostMapping("/condition/{name}")
    public ResponseEntity<List<Post>> findByCondition(@PathVariable String name, @RequestBody SearchConditionDTO searchConditionDTO) {

        List<Post> posts = postService.findByCondition(name, searchConditionDTO);

        return new ResponseEntity<>(posts, HttpStatus.OK);
    }

    @ApiOperation("게시글 등록")
    @ApiImplicitParam(name = "name", value = "사용자 닉네임")
    @PostMapping(value = "/{name}", consumes = "application/json")
    public ResponseEntity<Void> save(@PathVariable String name, @RequestBody Post post) {

        postService.save(post, name);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @ApiOperation("게시글 수정")
    @ApiImplicitParam(name = "id", value = "게시글 ID")
    @PutMapping(value = "/{id}", consumes = "application/json")
    public ResponseEntity<Post> update(@PathVariable Long id, @RequestBody Post post) {

        postService.update(id, post);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @ApiOperation("게시글 삭제")
    @ApiImplicitParam(name = "id", value = "게시글 ID")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {

        postService.deleteById(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @ApiOperation("게시글 완료여부 수정 (toggle)")
    @ApiImplicitParam(name = "id", value = "게시글 ID")
    @PatchMapping("/{id}")
    public ResponseEntity<Void> toggleCompleted(@PathVariable Long id) {

        postService.toggleCompleted(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
