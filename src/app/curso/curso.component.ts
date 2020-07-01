import { Component, OnInit } from '@angular/core';
import { CoursesServiceService } from '../services/courses-service.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
})
export class CursoComponent implements OnInit {
  course;
  form;
  constructor(
    private coursesServiceService: CoursesServiceService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.course = this.coursesServiceService.getCourse(
      this.route.snapshot.params['curso']
    );

    this.form = this.formBuilder.group({
      nota: '',
    });
  }

  ngOnInit(): void {}

  onSubmit(nota) {
    if (nota.nota > 10 || nota.nota < 0) {
      alert('número inválido, nota deve ser entre 0 e 10');
      this.form.reset();
    } else {
      this.coursesServiceService.setNewResult(this.course.sigla, nota.nota);
      this.form.reset();
    }
  }
}
