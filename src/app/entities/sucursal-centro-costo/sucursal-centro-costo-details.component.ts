import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SucursalCentroCosto } from './sucursal-centro-costo.model';
import { SucursalCentroCostoService } from './sucursal-centro-costo.service';

@Component({
  selector: 'app-sucursal-centro-costo-details',
  templateUrl: './sucursal-centro-costo-details.component.html'
})
export class SucursalCentroCostoDetailsComponent implements OnInit {

  sucursalCentroCosto: SucursalCentroCosto;

    constructor(
      private sucursalCentroCostoService: SucursalCentroCostoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.sucursalCentroCostoService.getById(id).subscribe(sucursalCentroCosto => this.sucursalCentroCosto = sucursalCentroCosto);
      });
    }
  }
