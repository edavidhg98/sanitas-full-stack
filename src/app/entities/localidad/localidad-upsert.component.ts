import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LocalidadService } from './localidad.service';
import { Localidad } from './localidad.model';

import { CiudadService } from '../ciudad/ciudad.service';
import { Ciudad } from '../ciudad/ciudad.model';

@Component({
  selector: 'app-localidad-upsert',
  templateUrl: './localidad-upsert.component.html'
})
export class LocalidadUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  localidad: Localidad;

  /** Many-To-One Relationships */
  ciudads: Ciudad[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private localidadService: LocalidadService,
    private ciudadService: CiudadService,
  ) { }

  ngOnInit() {
    this.ciudadService.getAll().subscribe(ciudads => this.ciudads = ciudads);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.localidadService.getById(id).subscribe(localidad => this.localidad = localidad);
      }
    });
  }

  save(formValues) {
    this.localidad = formValues;
    this.localidadService.insert(this.localidad).subscribe(
      (response) => {
        this.router.navigate(['/entities/localidad']);
      }
    );
  }

  update() {
    this.localidadService.update(this.localidad._id, this.localidad).subscribe(
      (response) => {
        this.router.navigate(['/entities/localidad']);
      }
    );
  }
}
