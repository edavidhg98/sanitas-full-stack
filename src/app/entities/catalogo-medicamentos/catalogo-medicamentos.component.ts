import { Component, OnInit, Inject } from '@angular/core';

import { CatalogoMedicamentosService } from './catalogo-medicamentos.service';
import { CatalogoMedicamentos } from './catalogo-medicamentos.model';

@Component({
  selector: 'app-catalogo-medicamentos',
  template: `
              <div class="container-fluid">
                <app-catalogo-medicamentos-list [catalogoMedicamentoss]="catalogoMedicamentoss"></app-catalogo-medicamentos-list>
              </div>
            `
})
export class CatalogoMedicamentosComponent implements OnInit {

  catalogoMedicamentoss: CatalogoMedicamentos[] = [];

  constructor(private catalogoMedicamentosService: CatalogoMedicamentosService) {

  }

  ngOnInit() {
    this.catalogoMedicamentosService.getAll().subscribe(catalogoMedicamentoss => this.catalogoMedicamentoss = catalogoMedicamentoss);
  }
}
