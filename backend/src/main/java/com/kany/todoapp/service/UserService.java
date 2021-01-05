package com.kany.todoapp.service;

import com.kany.todoapp.domain.User;
import com.kany.todoapp.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {

    private final IUserRepository userRepository;

    public User findByName(String name) {
        return userRepository.findByName(name);
    }

    public User change(String name) {
        User changeUser = userRepository.findByName(name);

        if (changeUser == null) {
            return userRepository.save(User.builder().name(name).build());
        }
        return changeUser;
    }
}
