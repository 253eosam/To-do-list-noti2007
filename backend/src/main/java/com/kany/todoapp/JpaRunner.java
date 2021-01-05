package com.kany.todoapp;

import com.kany.todoapp.domain.Post;
import com.kany.todoapp.domain.User;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import javax.naming.Name;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

@Component
@Transactional
public class JpaRunner implements ApplicationRunner {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        User user = User.builder().name("test").build();

        Post post = new Post();
        post.setContent("desc");
        post.setUser(user);
        post.setCompleted(false);

        entityManager.persist(user);
        entityManager.persist(post);
    }
}
