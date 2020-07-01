import { Component, OnInit } from '@angular/core';
import { CoursesServiceService } from '../services/courses-service.service';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css'],
})
export class DisciplinasComponent implements OnInit {
  myCourses;
  constructor(private coursesServiceService: CoursesServiceService) {}

  ngOnInit(): void {
    this.myCourses = this.coursesServiceService.getCourses();
  }
}
