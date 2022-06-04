package com.example.demo.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Exams")
public class Exam {
	
	@Id
	private int id;
	private String Subject;
	private String Autor;
	
	public Exam() {
		
	}

	public Exam(int id, String subject, String autor) {
		super();
		this.id = id;
		Subject = subject;
		Autor = autor;

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSubject() {
		return Subject;
	}

	public void setSubject(String subject) {
		Subject = subject;
	}

	public String getAutor() {
		return Autor;
	}

	public void setAutor(String autor) {
		Autor = autor;
	}


	

	

}
