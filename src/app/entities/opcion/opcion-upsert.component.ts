import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { OpcionService } from './opcion.service';
import { Opcion } from './opcion.model';


@Component({
  selector: 'app-opcion-upsert',
  templateUrl: './opcion-upsert.component.html'
})
export class OpcionUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  opcion: Opcion;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private opcionService: OpcionService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.opcionService.getById(id).subscribe(opcion => this.opcion = opcion);
      }
    });
  }

  save(formValues) {
    this.opcion = formValues;
    this.opcionService.insert(this.opcion).subscribe(
      (response) => {
        this.router.navigate(['/entities/opcion']);
      }
    );
  }

  update() {
    this.opcionService.update(this.opcion._id, this.opcion).subscribe(
      (response) => {
        this.router.navigate(['/entities/opcion']);
      }
    );
  }
}
