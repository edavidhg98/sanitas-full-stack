import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PlanesService } from './planes.service';
import { Planes } from './planes.model';

import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';

@Component({
  selector: 'app-planes-upsert',
  templateUrl: './planes-upsert.component.html'
})
export class PlanesUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  planes: Planes;

  /** Many-To-One Relationships */
  entidads: Entidad[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private planesService: PlanesService,
    private entidadService: EntidadService,
  ) { }

  ngOnInit() {
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.planesService.getById(id).subscribe(planes => this.planes = planes);
      }
    });
  }

  save(formValues) {
    this.planes = formValues;
    this.planesService.insert(this.planes).subscribe(
      (response) => {
        this.router.navigate(['/entities/planes']);
      }
    );
  }

  update() {
    this.planesService.update(this.planes._id, this.planes).subscribe(
      (response) => {
        this.router.navigate(['/entities/planes']);
      }
    );
  }
}
