package com.kany.todoapp.repository;

import com.kany.todoapp.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface IUserRepository extends CrudRepository<User, Long> {

    User findByName(String name);
}
