package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Exam;

public interface ExamRepository extends MongoRepository<Exam, String>{

}
