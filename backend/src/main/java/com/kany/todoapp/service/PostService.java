package com.kany.todoapp.service;

import com.kany.todoapp.domain.Post;
import com.kany.todoapp.repository.IPostRepository;
import com.kany.todoapp.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class PostService {

    private final IPostRepository postRepository;
    private final IUserRepository userRepository;

    public List<Post> findAll() {
        return (List<Post>) postRepository.findAll();
    }

    public Post findById(Long id) {
        return postRepository.findById(id).orElseGet(null);
    }

    public List<Post> findByUserName(String name) {
        Long userId = userRepository.findByName(name).getId();
        return postRepository.findByUserId(userId);
    }

    public void update(Post post) {
        post.setUpdated_at(LocalDateTime.now());
        postRepository.save(post);
    }

    public void save(Post post, String name) {
        post.setUser(userRepository.findByName(name));
        postRepository.save(post);
    }

    public void deleteById(Long id) {
        postRepository.deleteById(id);
    }

    public List<Post> findByCondition(String name, boolean completed, String keyWord) {
        Long userId = userRepository.findByName(name).getId();
        List<Post> posts = postRepository.findByUserIdAndContentContaining(userId, keyWord);

        if (completed) {
            return posts.stream().filter(post -> !post.isCompleted()).collect(Collectors.toList());
        }
        return posts;
    }

    public void toggleCompleted(Long id) {
        Post post = postRepository.findById(id).orElseGet(null);
        post.setCompleted(!post.isCompleted());
        postRepository.save(post);
    }
}
