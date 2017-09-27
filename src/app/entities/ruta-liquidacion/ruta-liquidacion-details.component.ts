import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RutaLiquidacion } from './ruta-liquidacion.model';
import { RutaLiquidacionService } from './ruta-liquidacion.service';

@Component({
  selector: 'app-ruta-liquidacion-details',
  templateUrl: './ruta-liquidacion-details.component.html'
})
export class RutaLiquidacionDetailsComponent implements OnInit {

  rutaLiquidacion: RutaLiquidacion;

    constructor(
      private rutaLiquidacionService: RutaLiquidacionService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.rutaLiquidacionService.getById(id).subscribe(rutaLiquidacion => this.rutaLiquidacion = rutaLiquidacion);
      });
    }
  }
