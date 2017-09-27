import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MedicoSucursalEntidad } from './medico-sucursal-entidad.model';
import { MedicoSucursalEntidadService } from './medico-sucursal-entidad.service';

@Component({
  selector: 'app-medico-sucursal-entidad-details',
  templateUrl: './medico-sucursal-entidad-details.component.html'
})
export class MedicoSucursalEntidadDetailsComponent implements OnInit {

  medicoSucursalEntidad: MedicoSucursalEntidad;

    constructor(
      private medicoSucursalEntidadService: MedicoSucursalEntidadService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.medicoSucursalEntidadService.getById(id).subscribe(medicoSucursalEntidad => this.medicoSucursalEntidad = medicoSucursalEntidad);
      });
    }
  }
