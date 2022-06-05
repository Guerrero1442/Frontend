package com.example.demo.model;

import java.util.List;
import java.util.Map;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "Questions")

public class Question {


	private String Subject;
	private String Statement;
	private String Autor;
	private String OptionA;
	private String OptionB;
	private String OptionC;
	private String OptionD;
	private String Answer;
	private String Sustentation;
	
	public Question() {
		
	}

	public Question(String subject, String statement, String autor, String optionA, String optionB, String optionC,
			String optionD, String answer, String sustentation) {
		super();
		Subject = subject;
		Statement = statement;
		Autor = autor;
		OptionA = optionA;
		OptionB = optionB;
		OptionC = optionC;
		OptionD = optionD;
		Answer = answer;
		Sustentation = sustentation;
	}

	public String getSubject() {
		return Subject;
	}

	public void setSubject(String subject) {
		Subject = subject;
	}

	public String getStatement() {
		return Statement;
	}

	public void setStatement(String statement) {
		Statement = statement;
	}

	public String getAutor() {
		return Autor;
	}

	public void setAutor(String autor) {
		Autor = autor;
	}

	public String getOptionA() {
		return OptionA;
	}

	public void setOptionA(String optionA) {
		OptionA = optionA;
	}

	public String getOptionB() {
		return OptionB;
	}

	public void setOptionB(String optionB) {
		OptionB = optionB;
	}

	public String getOptionC() {
		return OptionC;
	}

	public void setOptionC(String optionC) {
		OptionC = optionC;
	}

	public String getOptionD() {
		return OptionD;
	}

	public void setOptionD(String optionD) {
		OptionD = optionD;
	}

	public String getAnswer() {
		return Answer;
	}

	public void setAnswer(String answer) {
		Answer = answer;
	}

	public String getSustentation() {
		return Sustentation;
	}

	public void setSustentation(String sustentation) {
		Sustentation = sustentation;
	}

	


	

}
