import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SeccionService } from './seccion.service';
import { Seccion } from './seccion.model';

import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';

@Component({
  selector: 'app-seccion-upsert',
  templateUrl: './seccion-upsert.component.html'
})
export class SeccionUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  seccion: Seccion;

  /** Many-To-One Relationships */
  sucursals: Sucursal[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private seccionService: SeccionService,
    private sucursalService: SucursalService,
  ) { }

  ngOnInit() {
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.seccionService.getById(id).subscribe(seccion => this.seccion = seccion);
      }
    });
  }

  save(formValues) {
    this.seccion = formValues;
    this.seccionService.insert(this.seccion).subscribe(
      (response) => {
        this.router.navigate(['/entities/seccion']);
      }
    );
  }

  update() {
    this.seccionService.update(this.seccion._id, this.seccion).subscribe(
      (response) => {
        this.router.navigate(['/entities/seccion']);
      }
    );
  }
}
