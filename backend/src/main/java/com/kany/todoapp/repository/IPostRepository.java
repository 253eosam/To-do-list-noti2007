package com.kany.todoapp.repository;

import com.kany.todoapp.domain.Post;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface IPostRepository extends CrudRepository<Post, Long> {

    List<Post> findByUserId(Long id);

    List<Post> findByUserIdAndContentContaining(Long userId, String keyword);
}
