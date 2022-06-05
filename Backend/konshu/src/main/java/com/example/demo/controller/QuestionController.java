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

import com.example.demo.model.Question;
import com.example.demo.model.User;
import com.example.demo.repository.QuestionRepository;

@CrossOrigin(origins = "http://localhost:4200")

@RestController // Defines that this class is a spring bean
@RequestMapping("/api/v1/")
public class QuestionController {
	@Autowired
	QuestionRepository questionRepository;
	
	@GetMapping("/Questions")

	public List<Question> getAllQuestions(){
		return questionRepository.findAll();
	}
	
	@GetMapping("/Question/{id}")
	public Question getQuestionByID(@PathVariable String id) {
		return questionRepository.findById(id).get();
	}
	
	@PostMapping("/Questions")
	public Question saveQuestion(@RequestBody Question question){
		System.out.println(question);
		return questionRepository.save(question);
		
	}
	
	@PostMapping("/QuestionList")
	public List<Question> saveListQuestions(@RequestBody List<Question> questions) {
		return questionRepository.saveAll(questions);
	}
	
	@PutMapping("/Questions/{id}")
	public Question updateQuestion(@PathVariable String id, @RequestBody Question question) {
		
		Question _Question = questionRepository.findById(id).get();
		
		_Question.setSubject(question.getSubject());
		_Question.setAutor(question.getAutor());
		_Question.setOptionA(question.getOptionA());
		_Question.setOptionB(question.getOptionB());
		_Question.setOptionC(question.getOptionC());
		_Question.setOptionD(question.getOptionD());
		_Question.setAnswer(question.getAnswer());
		_Question.setSustentation(question.getSustentation());
	
		
		questionRepository.save(_Question);
		
		return _Question;
	}

}
