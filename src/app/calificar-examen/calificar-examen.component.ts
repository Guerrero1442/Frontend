import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamServiceService } from '../Services/Exams/exam-service.service';

@Component({
  selector: 'app-calificar-examen',
  templateUrl: './calificar-examen.component.html',
  styleUrls: ['./calificar-examen.component.css']
})
export class CalificarExamenComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute,private examServices:ExamServiceService) { }

  ngOnInit(): void {
    this.index=this.route.snapshot.queryParams['id_user']
  }

  index:number
  cargo:string
  indexExam:number
}
