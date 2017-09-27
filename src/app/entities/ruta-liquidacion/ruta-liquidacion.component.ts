import { Component, OnInit, Inject } from '@angular/core';

import { RutaLiquidacionService } from './ruta-liquidacion.service';
import { RutaLiquidacion } from './ruta-liquidacion.model';

@Component({
  selector: 'app-ruta-liquidacion',
  template: `
              <div class="container-fluid">
                <app-ruta-liquidacion-list [rutaLiquidacions]="rutaLiquidacions"></app-ruta-liquidacion-list>
              </div>
            `
})
export class RutaLiquidacionComponent implements OnInit {

  rutaLiquidacions: RutaLiquidacion[] = [];

  constructor(private rutaLiquidacionService: RutaLiquidacionService) {

  }

  ngOnInit() {
    this.rutaLiquidacionService.getAll().subscribe(rutaLiquidacions => this.rutaLiquidacions = rutaLiquidacions);
  }
}
