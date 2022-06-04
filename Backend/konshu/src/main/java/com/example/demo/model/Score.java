package com.example.demo.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Scores")
public class Score {
	
	private String User; 
	private int ExamId;
	private int UserScore; 
	
	public Score() {
		
	}

	public Score(String user, int examId, int userScore) {
		super();
		User = user;
		ExamId = examId;
		UserScore = userScore;
	}

	public String getUser() {
		return User;
	}

	public void setUser(String user) {
		User = user;
	}

	public int getExamId() {
		return ExamId;
	}

	public void setExamId(int examId) {
		ExamId = examId;
	}

	public int getUserScore() {
		return UserScore;
	}

	public void setUserScore(int userScore) {
		UserScore = userScore;
	}
	
}
