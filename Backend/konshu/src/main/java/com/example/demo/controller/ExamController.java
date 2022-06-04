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

import com.example.demo.model.Exam;
import com.example.demo.repository.ExamRepository;


@CrossOrigin(origins = "http://127.0.0.1:4200")

@RestController // Defines that this class is a spring bean
@RequestMapping("/api/v1/")
public class ExamController {
	@Autowired
	ExamRepository examRepository;
	
	@GetMapping("/Exams")

	public List<Exam> getAllExams(){
		return examRepository.findAll();
	}
	
	@GetMapping("/Exam/{id}")
	public Exam getExamByID(@PathVariable String id) {
		return examRepository.findById(id).get();
	}
	
	@PostMapping("/Exams")
	public Exam saveExam(@RequestBody Exam exam){
		return examRepository.save(exam);
	}
	
	@PostMapping("/ExamList")
	public List<Exam> saveListExams(@RequestBody List<Exam> exams) {
		return examRepository.saveAll(exams);
	}
	

		
}
