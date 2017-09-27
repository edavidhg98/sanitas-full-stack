import { Component, OnInit, Inject } from '@angular/core';

import { MedicoSucursalEntidadService } from './medico-sucursal-entidad.service';
import { MedicoSucursalEntidad } from './medico-sucursal-entidad.model';

@Component({
  selector: 'app-medico-sucursal-entidad',
  template: `
              <div class="container-fluid">
                <app-medico-sucursal-entidad-list [medicoSucursalEntidads]="medicoSucursalEntidads"></app-medico-sucursal-entidad-list>
              </div>
            `
})
export class MedicoSucursalEntidadComponent implements OnInit {

  medicoSucursalEntidads: MedicoSucursalEntidad[] = [];

  constructor(private medicoSucursalEntidadService: MedicoSucursalEntidadService) {

  }

  ngOnInit() {
    this.medicoSucursalEntidadService.getAll().subscribe(medicoSucursalEntidads => this.medicoSucursalEntidads = medicoSucursalEntidads);
  }
}
