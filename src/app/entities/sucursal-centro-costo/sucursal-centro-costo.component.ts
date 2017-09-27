import { Component, OnInit, Inject } from '@angular/core';

import { SucursalCentroCostoService } from './sucursal-centro-costo.service';
import { SucursalCentroCosto } from './sucursal-centro-costo.model';

@Component({
  selector: 'app-sucursal-centro-costo',
  template: `
              <div class="container-fluid">
                <app-sucursal-centro-costo-list [sucursalCentroCostos]="sucursalCentroCostos"></app-sucursal-centro-costo-list>
              </div>
            `
})
export class SucursalCentroCostoComponent implements OnInit {

  sucursalCentroCostos: SucursalCentroCosto[] = [];

  constructor(private sucursalCentroCostoService: SucursalCentroCostoService) {

  }

  ngOnInit() {
    this.sucursalCentroCostoService.getAll().subscribe(sucursalCentroCostos => this.sucursalCentroCostos = sucursalCentroCostos);
  }
}
