import { Component, OnInit, Inject } from '@angular/core';

import { SucursalEntidadService } from './sucursal-entidad.service';
import { SucursalEntidad } from './sucursal-entidad.model';

@Component({
  selector: 'app-sucursal-entidad',
  template: `
              <div class="container-fluid">
                <app-sucursal-entidad-list [sucursalEntidads]="sucursalEntidads"></app-sucursal-entidad-list>
              </div>
            `
})
export class SucursalEntidadComponent implements OnInit {

  sucursalEntidads: SucursalEntidad[] = [];

  constructor(private sucursalEntidadService: SucursalEntidadService) {

  }

  ngOnInit() {
    this.sucursalEntidadService.getAll().subscribe(sucursalEntidads => this.sucursalEntidads = sucursalEntidads);
  }
}
