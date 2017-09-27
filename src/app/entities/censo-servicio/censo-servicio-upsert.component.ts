import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CensoServicioService } from './censo-servicio.service';
import { CensoServicio } from './censo-servicio.model';

import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';

@Component({
  selector: 'app-censo-servicio-upsert',
  templateUrl: './censo-servicio-upsert.component.html'
})
export class CensoServicioUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  censoServicio: CensoServicio;

  /** Many-To-One Relationships */
  sucursals: Sucursal[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private censoServicioService: CensoServicioService,
    private sucursalService: SucursalService,
  ) { }

  ngOnInit() {
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.censoServicioService.getById(id).subscribe(censoServicio => this.censoServicio = censoServicio);
      }
    });
  }

  save(formValues) {
    this.censoServicio = formValues;
    this.censoServicioService.insert(this.censoServicio).subscribe(
      (response) => {
        this.router.navigate(['/entities/censo-servicio']);
      }
    );
  }

  update() {
    this.censoServicioService.update(this.censoServicio._id, this.censoServicio).subscribe(
      (response) => {
        this.router.navigate(['/entities/censo-servicio']);
      }
    );
  }
}
