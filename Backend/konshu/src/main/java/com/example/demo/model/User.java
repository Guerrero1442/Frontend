package com.example.demo.model;
import org.springframework.data.annotation.Id;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Users")

public class User {
	
	@Id
	private int id;
	private String Username;
	private String Rol;
	private String Password;
	private int AsignedExam;
	
	public User() {
		
	}

	public User(int id, String username, String rol, String password, int asignedExam) {
		super();
		this.id = id;
		Username = username;
		Rol = rol;
		Password = password;
		AsignedExam = asignedExam;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return Username;
	}

	public void setUsername(String username) {
		Username = username;
	}

	public String getRol() {
		return Rol;
	}

	public void setRol(String rol) {
		Rol = rol;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	public int getAsignedExam() {
		return AsignedExam;
	}

	public void setAsignedExam(int asignedExam) {
		AsignedExam = asignedExam;
	}
	



}
