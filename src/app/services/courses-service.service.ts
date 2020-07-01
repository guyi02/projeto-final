import { Injectable } from '@angular/core';
import { Data } from '../data';

@Injectable({
  providedIn: 'root',
})
export class CoursesServiceService {
  constructor() {}

  getCourses() {
    return Data;
  }

  getCourse(sigla) {
    let filteredCourse = null;
    Data.map((course) => {
      course.subjects.filter((obj) => {
        if (obj['sigla'] == sigla) {
          filteredCourse = obj;
        }
      });
    });

    return filteredCourse;
  }

  getTotalCompleted() {
    let arrApporoved = [];
    let arrPending = [];

    Data.map((course) => course.subjects).map((sub) => {
      sub.filter((opt) => {
        if (opt.status == 'aprovado') {
          arrApporoved.push(opt);
        } else {
          arrPending.push(opt);
        }
      });
    });

    return {
      totalCursado: arrApporoved.length,
      totalCursando: arrPending.length,
    };
  }

  setNewResult(sigla, nota) {
    Data.map((course) => course.subjects).map((sub) => {
      sub.map((opt) => {
        if (opt.sigla == sigla) {
          opt.nf = nota;
        }
      });
    });
  }
}
