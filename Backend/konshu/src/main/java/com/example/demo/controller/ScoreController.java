package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Question;
import com.example.demo.model.Score;
import com.example.demo.repository.QuestionRepository;
import com.example.demo.repository.ScoreRepository;

@CrossOrigin(origins = "http://127.0.0.1:4200")

@RestController // Defines that this class is a spring bean
@RequestMapping("/api/v1/")
public class ScoreController {
	@Autowired
	ScoreRepository scoreRepository;
	
	@GetMapping("/Scores")

	public List<Score> getAllScores(){
		return scoreRepository.findAll();
	}
	
	@GetMapping("/Score/{id}")
	public Score getScoreByID(@PathVariable String id) {
		return scoreRepository.findById(id).get();
	}
	
	@PostMapping("/Scores")
	public Score saveScore(@RequestBody Score score){
		return scoreRepository.save(score);
	}
	
	@PostMapping("/ScoreList")
	public List<Score> saveListScores(@RequestBody List<Score> scores) {
		return scoreRepository.saveAll(scores);
	}
	
}
