import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CatalogoMedicamentosDetalle } from './catalogo-medicamentos-detalle.model';
import { CatalogoMedicamentosDetalleService } from './catalogo-medicamentos-detalle.service';

@Component({
  selector: 'app-catalogo-medicamentos-detalle-details',
  templateUrl: './catalogo-medicamentos-detalle-details.component.html'
})
export class CatalogoMedicamentosDetalleDetailsComponent implements OnInit {

  catalogoMedicamentosDetalle: CatalogoMedicamentosDetalle;

    constructor(
      private catalogoMedicamentosDetalleService: CatalogoMedicamentosDetalleService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.catalogoMedicamentosDetalleService.getById(id).subscribe(catalogoMedicamentosDetalle => this.catalogoMedicamentosDetalle = catalogoMedicamentosDetalle);
      });
    }
  }
