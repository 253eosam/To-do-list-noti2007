package com.kany.todoapp.repository;

import com.kany.todoapp.domain.Post;
import org.springframework.data.repository.CrudRepository;

public interface IPostRepository extends CrudRepository<Post, Long> {

}
