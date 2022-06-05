package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.User;

import com.example.demo.repository.UserRepository;
@CrossOrigin(origins = "http://127.0.0.1:4200")

@RestController // Defines that this class is a spring bean
@RequestMapping("/api/v1/")

public class UserController {
	@Autowired
	UserRepository userRepository;
	
	@GetMapping("/Users")

	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	@GetMapping("/User/{id}")
	public User getUserByID(@PathVariable String id) {
		return userRepository.findById(id).get();
	}
	
	@PostMapping("/Users")
	public User saveUser(@RequestBody User user){
		return userRepository.save(user);
	}
	
	@PostMapping("/UserList")
	public List<User> saveListUsers(@RequestBody List<User> users) {
		return userRepository.saveAll(users);
	}
	
	@PutMapping("Users/{id}")
	public User updateUser(@PathVariable String id, @RequestBody User user) {
		
		User _user = userRepository.findById(id).get();
		
		_user.setUsername(user.getUsername());
		_user.setRol(user.getRol());
		_user.setPassword(user.getPassword());
		_user.setAsignedExam(user.getAsignedExam());
	
		
		userRepository.save(_user);
		
		return _user;
	}

}


		

