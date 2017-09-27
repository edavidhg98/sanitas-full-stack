import { Component, OnInit, Inject } from '@angular/core';

import { CatalogoMedicamentosDetalleService } from './catalogo-medicamentos-detalle.service';
import { CatalogoMedicamentosDetalle } from './catalogo-medicamentos-detalle.model';

@Component({
  selector: 'app-catalogo-medicamentos-detalle',
  template: `
              <div class="container-fluid">
                <app-catalogo-medicamentos-detalle-list [catalogoMedicamentosDetalles]="catalogoMedicamentosDetalles"></app-catalogo-medicamentos-detalle-list>
              </div>
            `
})
export class CatalogoMedicamentosDetalleComponent implements OnInit {

  catalogoMedicamentosDetalles: CatalogoMedicamentosDetalle[] = [];

  constructor(private catalogoMedicamentosDetalleService: CatalogoMedicamentosDetalleService) {

  }

  ngOnInit() {
    this.catalogoMedicamentosDetalleService.getAll().subscribe(catalogoMedicamentosDetalles => this.catalogoMedicamentosDetalles = catalogoMedicamentosDetalles);
  }
}
