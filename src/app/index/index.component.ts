import { Component, OnInit } from '@angular/core';
import { CoursesServiceService } from '../services/courses-service.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  user;
  totalMateriasCursadas;
  totalMateriasEmCurso;

  constructor(private coursesServiceService: CoursesServiceService) {
    this.totalMateriasCursadas = this.coursesServiceService.getTotalCompleted().totalCursado;
    this.totalMateriasEmCurso = this.coursesServiceService.getTotalCompleted().totalCursando;
  }

  ngOnInit(): void {
    this.user = {
      name: 'Guilherme Santos Ferreira da Silva',
      RA: '0050831811037',
      ciclo: 5,
    };
  }
}
