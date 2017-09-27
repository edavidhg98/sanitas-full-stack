import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PrioridadService } from './prioridad.service';
import { Prioridad } from './prioridad.model';


@Component({
  selector: 'app-prioridad-upsert',
  templateUrl: './prioridad-upsert.component.html'
})
export class PrioridadUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  prioridad: Prioridad;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private prioridadService: PrioridadService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.prioridadService.getById(id).subscribe(prioridad => this.prioridad = prioridad);
      }
    });
  }

  save(formValues) {
    this.prioridad = formValues;
    this.prioridadService.insert(this.prioridad).subscribe(
      (response) => {
        this.router.navigate(['/entities/prioridad']);
      }
    );
  }

  update() {
    this.prioridadService.update(this.prioridad._id, this.prioridad).subscribe(
      (response) => {
        this.router.navigate(['/entities/prioridad']);
      }
    );
  }
}
