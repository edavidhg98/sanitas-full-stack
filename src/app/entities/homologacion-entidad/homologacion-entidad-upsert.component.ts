import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HomologacionEntidadService } from './homologacion-entidad.service';
import { HomologacionEntidad } from './homologacion-entidad.model';

import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';

@Component({
  selector: 'app-homologacion-entidad-upsert',
  templateUrl: './homologacion-entidad-upsert.component.html'
})
export class HomologacionEntidadUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  homologacionEntidad: HomologacionEntidad;

  /** Many-To-One Relationships */
  entidads: Entidad[];
  entidad1s: Entidad[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private homologacionEntidadService: HomologacionEntidadService,
    private entidadService: EntidadService,
  ) { }

  ngOnInit() {
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.entidadService.getAll().subscribe(entidad1s => this.entidad1s = entidad1s);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.homologacionEntidadService.getById(id).subscribe(homologacionEntidad => this.homologacionEntidad = homologacionEntidad);
      }
    });
  }

  save(formValues) {
    this.homologacionEntidad = formValues;
    this.homologacionEntidadService.insert(this.homologacionEntidad).subscribe(
      (response) => {
        this.router.navigate(['/entities/homologacion-entidad']);
      }
    );
  }

  update() {
    this.homologacionEntidadService.update(this.homologacionEntidad._id, this.homologacionEntidad).subscribe(
      (response) => {
        this.router.navigate(['/entities/homologacion-entidad']);
      }
    );
  }
}
