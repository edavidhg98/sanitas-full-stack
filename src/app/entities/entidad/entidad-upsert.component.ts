import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EntidadService } from './entidad.service';
import { Entidad } from './entidad.model';

import { CiudadService } from '../ciudad/ciudad.service';
import { Ciudad } from '../ciudad/ciudad.model';

@Component({
  selector: 'app-entidad-upsert',
  templateUrl: './entidad-upsert.component.html'
})
export class EntidadUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  entidad: Entidad;

  /** Many-To-One Relationships */
  ciudads: Ciudad[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private entidadService: EntidadService,
    private ciudadService: CiudadService,
  ) { }

  ngOnInit() {
    this.ciudadService.getAll().subscribe(ciudads => this.ciudads = ciudads);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.entidadService.getById(id).subscribe(entidad => this.entidad = entidad);
      }
    });
  }

  save(formValues) {
    this.entidad = formValues;
    this.entidadService.insert(this.entidad).subscribe(
      (response) => {
        this.router.navigate(['/entities/entidad']);
      }
    );
  }

  update() {
    this.entidadService.update(this.entidad._id, this.entidad).subscribe(
      (response) => {
        this.router.navigate(['/entities/entidad']);
      }
    );
  }
}
