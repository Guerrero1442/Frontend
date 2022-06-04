package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Score;

public interface ScoreRepository extends MongoRepository <Score, String>{

}
