import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { InstitucionService } from './institucion.service';
import { Institucion } from './institucion.model';


@Component({
  selector: 'app-institucion-upsert',
  templateUrl: './institucion-upsert.component.html'
})
export class InstitucionUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  institucion: Institucion;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private institucionService: InstitucionService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.institucionService.getById(id).subscribe(institucion => this.institucion = institucion);
      }
    });
  }

  save(formValues) {
    this.institucion = formValues;
    this.institucionService.insert(this.institucion).subscribe(
      (response) => {
        this.router.navigate(['/entities/institucion']);
      }
    );
  }

  update() {
    this.institucionService.update(this.institucion._id, this.institucion).subscribe(
      (response) => {
        this.router.navigate(['/entities/institucion']);
      }
    );
  }
}
