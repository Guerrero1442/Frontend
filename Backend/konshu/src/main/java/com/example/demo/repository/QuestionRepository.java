package com.example.demo.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.demo.model.Question;

public interface QuestionRepository extends MongoRepository <Question, String> {

	@Query("{ 'Autor' : /.*?0.*/ }")
	List<Question> findQuestionByAutor(String autor);

}
