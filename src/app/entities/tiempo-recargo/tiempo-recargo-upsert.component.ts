import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TiempoRecargoService } from './tiempo-recargo.service';
import { TiempoRecargo } from './tiempo-recargo.model';

import { SucursalEntidadService } from '../sucursal-entidad/sucursal-entidad.service';
import { SucursalEntidad } from '../sucursal-entidad/sucursal-entidad.model';

@Component({
  selector: 'app-tiempo-recargo-upsert',
  templateUrl: './tiempo-recargo-upsert.component.html'
})
export class TiempoRecargoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  tiempoRecargo: TiempoRecargo;

  /** Many-To-One Relationships */
  sucursalEntidads: SucursalEntidad[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tiempoRecargoService: TiempoRecargoService,
    private sucursalEntidadService: SucursalEntidadService,
  ) { }

  ngOnInit() {
    this.sucursalEntidadService.getAll().subscribe(sucursalEntidads => this.sucursalEntidads = sucursalEntidads);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.tiempoRecargoService.getById(id).subscribe(tiempoRecargo => this.tiempoRecargo = tiempoRecargo);
      }
    });
  }

  save(formValues) {
    this.tiempoRecargo = formValues;
    this.tiempoRecargoService.insert(this.tiempoRecargo).subscribe(
      (response) => {
        this.router.navigate(['/entities/tiempo-recargo']);
      }
    );
  }

  update() {
    this.tiempoRecargoService.update(this.tiempoRecargo._id, this.tiempoRecargo).subscribe(
      (response) => {
        this.router.navigate(['/entities/tiempo-recargo']);
      }
    );
  }
}
