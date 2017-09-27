import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SucursalEntidad } from './sucursal-entidad.model';
import { SucursalEntidadService } from './sucursal-entidad.service';

@Component({
  selector: 'app-sucursal-entidad-details',
  templateUrl: './sucursal-entidad-details.component.html'
})
export class SucursalEntidadDetailsComponent implements OnInit {

  sucursalEntidad: SucursalEntidad;

    constructor(
      private sucursalEntidadService: SucursalEntidadService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.sucursalEntidadService.getById(id).subscribe(sucursalEntidad => this.sucursalEntidad = sucursalEntidad);
      });
    }
  }
